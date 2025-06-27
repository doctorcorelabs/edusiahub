# AI Implementation Guide for EdusiaHub

## Overview
This guide will help you implement the AI features for the EdusiaHub inclusive education platform using Gemini API and Cloudflare Workers.

## Features Implemented

### 1. AI Tools
- **Adaptive Activity Planner**: Create personalized learning activities for students with specific needs
- **Empathetic Communication Assistant**: Help compose constructive messages between parents and teachers
- **Content Simplifier**: Transform complex materials into accessible formats

### 2. User Interface
- Responsive design with card-based layout
- Multilingual support (Indonesian/English)
- Copy-to-clipboard functionality
- Loading states and error handling
- Medical disclaimer for safety

## Frontend Implementation

### Files Created/Modified:
1. `src/pages/AI.tsx` - Main AI page component
2. `src/App.tsx` - Added AI route
3. `src/components/Header.tsx` - Added AI navigation
4. `src/i18n/locales/ai-en.json` - English translations
5. `src/i18n/locales/ai-id.json` - Indonesian translations

### Key Features:
- Three distinct AI tools with specialized forms
- Real-time response generation
- Error handling and user feedback
- Responsive design for all devices
- Accessibility considerations

## Backend Implementation

### Files Created:
1. `functions/api/ai/generate.js` - Cloudflare Worker function
2. `wrangler.toml` - Worker configuration
3. `package-ai.json` - Dependencies

### API Endpoints:
- `POST /api/ai/generate` - Main AI generation endpoint

## Setup Instructions

### 1. Frontend Setup
```bash
# Install additional dependencies
npm install @google/genai

# The AI page is already integrated into the routing
# Navigate to /ai to access the AI tools
```

### 2. Backend Setup (Cloudflare Workers)

#### Prerequisites:
- Cloudflare account
- Node.js and npm installed
- Wrangler CLI installed

#### Installation:
```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Navigate to the project directory
cd your-project-directory

# Install dependencies
npm install

# Set up your Gemini API key as a secret
wrangler secret put GEMINI_API_KEY
# Enter your Gemini API key when prompted

# Deploy the worker
wrangler deploy
```

### 3. Environment Configuration

#### Required Environment Variables:
- `GEMINI_API_KEY`: Your Google Gemini API key

#### Getting Gemini API Key:
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key and set it as a secret in Cloudflare Workers

### 4. Update Frontend API Endpoint

After deploying the worker, update the API endpoint in `src/pages/AI.tsx`:

```typescript
// Replace this line in the generateAIResponse function
const response = await fetch('/api/ai/generate', {
  
// With your actual Cloudflare Worker URL
const response = await fetch('https://your-worker-url.your-subdomain.workers.dev/api/ai/generate', {
```

## Usage Guide

### For Teachers:
1. Navigate to the AI Assistant page
2. Select "Adaptive Activity Planner"
3. Fill in the form with:
   - Subject and topic
   - Grade level
   - Student's special need
   - Desired activity style
4. Click "Generate Activity Plan"
5. Copy and adapt the generated plan for your classroom

### For Parents:
1. Navigate to the AI Assistant page
2. Select "Empathetic Communication Assistant"
3. Fill in the form with:
   - Your role (Parent)
   - Target (Teacher)
   - Purpose of communication
   - Key points to convey
4. Click "Generate Message Draft"
5. Review and modify the generated message before sending

### For Content Creators:
1. Navigate to the AI Assistant page
2. Select "Content Simplifier"
3. Paste the original text
4. Select target audience
5. Click "Simplify Now"
6. Use the simplified content for your materials

## Security Considerations

### 1. API Key Security
- Never expose API keys in frontend code
- Use environment variables and secrets
- Rotate API keys regularly

### 2. Input Validation
- Validate all user inputs
- Sanitize text before sending to AI
- Implement rate limiting

### 3. Medical Disclaimer
- Always display the medical disclaimer
- Emphasize that AI is not a diagnostic tool
- Encourage professional consultation

## Testing

### 1. Frontend Testing
```bash
# Run the development server
npm run dev

# Navigate to http://localhost:5173/ai
# Test all three AI tools
# Verify multilingual support
# Test responsive design
```

### 2. Backend Testing
```bash
# Test the worker locally
wrangler dev

# Test with sample data
curl -X POST https://your-worker-url.workers.dev/api/ai/generate \
  -H "Content-Type: application/json" \
  -d '{
    "toolId": "activity-planner",
    "prompt": "Mata Pelajaran: Matematika\nTopik: Penjumlahan\nTingkat Kelas: Kelas 1\nKebutuhan Khusus: ADHD\nGaya Aktivitas: Permainan Edukatif",
    "language": "id"
  }'
```

## Troubleshooting

### Common Issues:

1. **API Key Not Working**
   - Verify the API key is correctly set in Cloudflare Workers
   - Check if the key has proper permissions
   - Ensure the key is not expired

2. **CORS Errors**
   - Add CORS headers to the Cloudflare Worker
   - Verify the frontend URL is allowed

3. **Rate Limiting**
   - Implement proper rate limiting
   - Add user authentication if needed

4. **Response Quality**
   - Refine prompts for better results
   - Add more context to user inputs
   - Implement feedback mechanisms

## Future Enhancements

### Planned Features:
1. **User Authentication**: Secure access to AI tools
2. **Usage Analytics**: Track tool usage and effectiveness
3. **Feedback System**: Collect user feedback on AI responses
4. **Custom Prompts**: Allow users to create custom prompts
5. **Response History**: Save and retrieve previous responses
6. **Integration**: Connect with other EdusiaHub features

### Technical Improvements:
1. **Caching**: Cache common responses
2. **Streaming**: Real-time response streaming
3. **Batch Processing**: Handle multiple requests efficiently
4. **Model Selection**: Choose different AI models based on task

## Support

For technical support or questions:
1. Check the troubleshooting section
2. Review Cloudflare Workers documentation
3. Consult Google Gemini API documentation
4. Contact the development team

## License

This implementation is part of the EdusiaHub project and follows the same licensing terms. 