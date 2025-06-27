import { GoogleGenAI } from '@google/genai';

export async function onRequestPost(context) {
  try {
    const { request } = context;
    const { toolId, prompt, language } = await request.json();

    // Initialize Gemini
    const ai = new GoogleGenAI({
      apiKey: context.env.GEMINI_API_KEY,
    });

    const model = ai.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

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

    const result = await model.generateContent(selectedPrompt);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ content: text }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('AI generation error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to generate AI response',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 