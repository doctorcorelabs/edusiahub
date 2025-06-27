addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  }

  // Only handle POST requests
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { toolId, prompt, language } = await request.json();

    // Get API key from environment
    const apiKey = GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Define prompts for different tools
    const prompts = {
      'activity-planner': `You are an expert pedagogue and inclusive education specialist from Indonesia. Your task is to create creative and adaptive learning activity plans.

A teacher is asking for help with the following details:
${prompt}

Please create a clear activity plan in ${language === 'id' ? 'Indonesian' : 'English'}. Use Markdown format. Ensure the steps are practical for implementation in a diverse classroom. Give special emphasis on adaptations for students with special needs. Answer only with the activity plan, without additional opening or closing.`,

      'communication-assistant': `You are an expert in empathetic communication for inclusive education. Your task is to help compose constructive and collaborative messages.

Communication details:
${prompt}

Please create a draft message in ${language === 'id' ? 'Indonesian' : 'English'} that is polite, clear, and focused on collaboration. The message should be professional yet warm, encouraging open dialogue and partnership. Answer only with the message draft, without additional commentary.`,

      'content-simplifier': `You are an expert in making educational content accessible. Your task is to simplify complex materials for different audiences.

Content to simplify:
${prompt}

Please simplify this content in ${language === 'id' ? 'Indonesian' : 'English'} to make it more accessible and easier to understand. Maintain the educational value while using simpler language and clearer explanations. Answer only with the simplified content, without additional commentary.`
    };

    const selectedPrompt = prompts[toolId];
    if (!selectedPrompt) {
      return new Response(JSON.stringify({ error: 'Invalid tool ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Call Gemini API directly using fetch
    const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: selectedPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      })
    });

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.text();
      console.error('Gemini API error:', errorData);
      throw new Error(`Gemini API error: ${geminiResponse.status}`);
    }

    const geminiData = await geminiResponse.json();
    
    // Extract the generated text from the response
    const generatedText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!generatedText) {
      throw new Error('No text generated from Gemini API');
    }

    return new Response(JSON.stringify({ content: generatedText }), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });

  } catch (error) {
    console.error('AI generation error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to generate AI response',
      details: error.message 
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  }
} 