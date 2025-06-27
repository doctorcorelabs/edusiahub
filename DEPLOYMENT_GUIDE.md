# Deployment Guide - EdusiaHub AI Feature

## 🚀 Quick Deployment

### Option 1: Deploy with Alternative Worker (Recommended)

The alternative worker doesn't require external dependencies and should deploy successfully:

```bash
# 1. Make sure you're in the project directory
cd edusiahub-inclusive-future-main

# 2. Install Wrangler globally (if not already installed)
npm install -g wrangler

# 3. Login to Cloudflare
wrangler login

# 4. Set your Gemini API key
wrangler secret put GEMINI_API_KEY
# Enter your API key when prompted

# 5. Deploy the worker
wrangler deploy
```

### Option 2: Use the Original Worker with Dependencies

If you prefer to use the original worker with the Google GenAI SDK:

```bash
# 1. Install dependencies
npm install @google/genai

# 2. Update wrangler.toml to use the original worker
# Change main = "functions/api/ai/generate-alternative.js" 
# to main = "functions/api/ai/generate.js"

# 3. Deploy
wrangler deploy
```

## 🔧 Configuration

### 1. Update wrangler.toml
The file is already configured to use the alternative worker. If you want to use the original:

```toml
name = "edusiahub-ai"
main = "functions/api/ai/generate.js"  # or generate-alternative.js
compatibility_date = "2024-01-01"

[build.upload]
format = "service-worker"

[vars]
# Add your environment variables here
```

### 2. Set Environment Variables
```bash
# Set your Gemini API key
wrangler secret put GEMINI_API_KEY
```

## 🌐 Frontend Configuration

### 1. Update API Endpoint
After deployment, update the API endpoint in `src/pages/AI.tsx`:

```typescript
// Replace this line:
const apiUrl = '/api/ai/generate';

// With your actual Cloudflare Worker URL:
const apiUrl = 'https://your-worker-name.your-subdomain.workers.dev/api/ai/generate';
```

### 2. Test the Integration
```bash
# Start the development server
npm run dev

# Navigate to http://localhost:5173/ai
# Test all three AI tools
```

## 🔍 Troubleshooting

### Common Issues:

#### 1. "Could not resolve @google/genai"
**Solution:** Use the alternative worker (`generate-alternative.js`) which doesn't require external dependencies.

#### 2. "API key not configured"
**Solution:** Make sure you've set the API key:
```bash
wrangler secret put GEMINI_API_KEY
```

#### 3. CORS Errors
**Solution:** The alternative worker includes CORS headers. If using the original worker, add CORS headers manually.

#### 4. "Worker not found"
**Solution:** Check that the worker name in `wrangler.toml` matches your Cloudflare account.

## 📋 Testing Checklist

### Backend Testing:
- [ ] Worker deploys successfully
- [ ] API key is configured
- [ ] CORS headers are working
- [ ] All three tools respond correctly

### Frontend Testing:
- [ ] AI page loads without errors
- [ ] All three tools are accessible
- [ ] Forms submit correctly
- [ ] Responses are displayed properly
- [ ] Copy-to-clipboard works
- [ ] Multilingual support works
- [ ] Responsive design works

### Integration Testing:
- [ ] Frontend can communicate with backend
- [ ] Error handling works
- [ ] Loading states display correctly
- [ ] Mock responses work when API is unavailable

## 🎯 Production Deployment

### 1. Build Frontend
```bash
npm run build
```

### 2. Deploy Frontend
Deploy the `dist` folder to your hosting provider (Vercel, Netlify, etc.)

### 3. Update API Endpoint
Make sure the production frontend points to the correct Cloudflare Worker URL.

### 4. Monitor
- Check Cloudflare Workers dashboard for errors
- Monitor API usage and costs
- Set up alerts for high error rates

## 🔒 Security Considerations

### 1. API Key Security
- ✅ API key stored as Cloudflare secret
- ✅ Never exposed in frontend code
- ✅ Rotate keys regularly

### 2. Rate Limiting
Consider implementing rate limiting:
```javascript
// Add to your worker
const rateLimit = {
  maxRequests: 100,
  windowMs: 15 * 60 * 1000, // 15 minutes
};
```

### 3. Input Validation
The worker includes basic validation, but consider adding more:
```javascript
// Validate input length
if (prompt.length > 10000) {
  return new Response(JSON.stringify({ error: 'Input too long' }), {
    status: 400,
    headers: { 'Content-Type': 'application/json' }
  });
}
```

## 📊 Monitoring

### 1. Cloudflare Analytics
- Monitor worker performance
- Track request volume
- Check error rates

### 2. User Analytics
- Track tool usage
- Monitor user satisfaction
- Identify popular features

### 3. Cost Monitoring
- Monitor Gemini API usage
- Track Cloudflare Workers costs
- Set up billing alerts

## 🆘 Support

### If you encounter issues:

1. **Check the logs:**
   ```bash
   wrangler tail
   ```

2. **Test locally:**
   ```bash
   wrangler dev
   ```

3. **Verify configuration:**
   - Check `wrangler.toml`
   - Verify API key is set
   - Confirm worker name is correct

4. **Common solutions:**
   - Use alternative worker for dependency issues
   - Check CORS configuration
   - Verify API key permissions

## 🎉 Success!

Once deployed successfully, your AI feature will be available at:
- **Frontend:** `https://your-domain.com/ai`
- **Backend:** `https://your-worker-name.your-subdomain.workers.dev`

The AI tools will help teachers, parents, and students with:
- Creating adaptive learning activities
- Improving communication
- Simplifying educational content

**Status: 🟢 Ready for Production Use** 