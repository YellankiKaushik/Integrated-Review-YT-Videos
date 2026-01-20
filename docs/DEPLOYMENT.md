# Deployment Guide

Complete guide for deploying the Integrated Review of YouTube Videos application to production.

## Prerequisites

- GitHub account with repository pushed
- Vercel account (for frontend)
- Render or Railway account (for backend)
- YouTube API key
- OpenAI API key

---

## Frontend Deployment (Vercel)

Vercel is the easiest platform for deploying Next.js applications.

### Step 1: Prepare for Deployment

1. **Update API URL in code**
   - Frontend needs to know backend URL
   - This will be set via environment variables

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Select `Integrated-Review-YT-Videos` repository
5. Configure project:
   - **Framework Preset:** Next.js
   - **Root Directory:** `.` (leave default)
6. Add environment variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
   ```
   *(We'll fill this after deploying backend)*

7. Click "Deploy"
8. Wait 2-3 minutes for deployment
9. Your frontend URL will be displayed

### Step 3: Update Backend URL

Once backend is deployed:
1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Update `NEXT_PUBLIC_API_URL` with actual backend URL
4. Redeploy (Deployments → Redeploy)

---

## Backend Deployment (Render)

Render provides free tier suitable for this project.

### Step 1: Prepare Repository

Ensure your repository has:
- `/backend/app.py`
- `/backend/requirements.txt`
- `/backend/services/` directory
- `/backend/utils/` directory

### Step 2: Deploy to Render

1. Go to https://render.com
2. Sign in with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub account
5. Search and select `Integrated-Review-YT-Videos`
6. Configure:
   - **Name:** `yt-sentiment-backend` (or custom)
   - **Environment:** `Python 3`
   - **Region:** Choose closest to you
   - **Build Command:** `pip install -r backend/requirements.txt`
   - **Start Command:** `cd backend && python app.py`
   - **Instance Type:** Free (or paid if needed)

7. Add environment variables:
   ```
   YOUTUBE_API_KEY=your_key_here
   OPENAI_API_KEY=your_key_here
   ```

8. Click "Create Web Service"
9. Wait 5-10 minutes for first deployment
10. Copy the backend URL (e.g., `https://yt-sentiment-backend.onrender.com`)

### Step 3: Verify Deployment

Test backend health:
```bash
curl https://your-backend-url.onrender.com/health
```

Expected response:
```json
{"status": "ok"}
```

---

## Alternative: Deploy Backend to Railway

If Render has issues, try Railway.

1. Go to https://railway.app
2. Sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Configure:
   - **Start Command:** `cd backend && python app.py`

7. Add variables in Railway dashboard
8. Deploy and copy URL

---

## Post-Deployment Checklist

- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Render/Railway
- [ ] NEXT_PUBLIC_API_URL updated in Vercel
- [ ] Both services have API keys configured
- [ ] Test /health endpoint on backend
- [ ] Test analysis on frontend
- [ ] Check error handling with invalid inputs
- [ ] Monitor logs for errors

---

## Updating After Deployment

### Update Frontend
```bash
git add .
git commit -m "Update frontend"
git push origin main
# Vercel auto-deploys on push
```

### Update Backend
```bash
git add .
git commit -m "Update backend"
git push origin main
# Render auto-deploys on push
```

---

## Monitoring

### Vercel Monitoring
- Dashboard → Analytics
- View logs: Deployments → Click latest → Logs
- Performance metrics available

### Render Monitoring
- Dashboard → Your Service
- View logs: "Logs" tab
- Monitor build and runtime logs

---

## Troubleshooting Deployments

### "Build failed" on Render

**Check logs** for specific error. Common issues:

1. **Python version mismatch**
   - Ensure requirements.txt specifies correct versions
   - Or remove version pins for flexibility

2. **Missing dependencies**
   ```bash
   pip freeze > backend/requirements.txt
   ```

3. **Import errors**
   - Ensure all modules are imported correctly
   - Check relative vs absolute imports

### Frontend shows 502 error

1. **Backend not running**
   - Check Render dashboard - is service running?
   - Restart service if needed

2. **Wrong API URL**
   - Verify NEXT_PUBLIC_API_URL in Vercel settings
   - Redeploy frontend after updating

3. **CORS issues**
   - Backend has CORS enabled in app.py
   - Check browser console for CORS errors

### "API quota exceeded"

1. **OpenAI quota**
   - Check OpenAI account billing
   - Add payment method if needed
   - Reset usage limits

2. **YouTube quota**
   - Check YouTube API usage in Google Cloud Console
   - May need to increase quota or wait for reset

---

## Costs

- **Vercel:** Free tier usually sufficient
- **Render:** Free tier with 750 hours/month (~31 days)
- **Railway:** Free tier with $5 credit
- **APIs:**
  - YouTube: Free (with quota limits)
  - OpenAI: Pay-as-you-go (~$0.001-0.002 per analysis)

---

## Performance Optimization

### Reduce costs:
- Implement caching for video results
- Batch process comments
- Limit comment fetching (currently 500)

### Improve speed:
- Enable Vercel edge functions
- Use CDN for static assets
- Cache API responses

---

## Security Best Practices

1. **Never commit .env file**
   ```bash
   echo ".env" >> .gitignore
   ```

2. **Use environment variables** for all secrets
3. **Rotate API keys** periodically
4. **Enable HTTPS** (automatic on Vercel/Render)
5. **Implement rate limiting** on backend
6. **Add authentication** for production use

---

## Support

- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
- Railway Docs: https://docs.railway.app
- OpenAI Docs: https://platform.openai.com/docs
- YouTube API Docs: https://developers.google.com/youtube/v3
