# Integrated Review of YouTube Videos - Architecture Documentation

## Project Overview

This is a full-stack web application that analyzes YouTube video comments using sentiment analysis and AI-powered summarization. It provides insights into viewer sentiment, key themes, and detailed analysis of video feedback.

## Technology Stack

### Frontend
- **Framework:** Next.js 15 (React 19)
- **Styling:** Tailwind CSS + Shadcn/ui components
- **State Management:** React Hooks
- **API Client:** Fetch API
- **Features:** Server-side rendering, API routes, real-time UI updates

### Backend
- **Framework:** Flask (Python)
- **ML Models:** Transformers (DistilBERT for sentiment analysis)
- **AI Integration:** OpenAI API (GPT-3.5 Turbo)
- **External APIs:** YouTube Data API v3
- **Architecture:** Modular service-based architecture

## Project Structure

```
project-root/
├── frontend/
│   ├── src/                    # Frontend source (Next.js)
│   ├── app/                    # Next.js app directory
│   ├── components/             # Reusable React components
│   ├── styles/                 # Global CSS
│   ├── public/                 # Static assets
│   └── package.json           # Frontend dependencies
│
├── backend/
│   ├── app.py                 # Main Flask application
│   ├── services/              # Business logic modules
│   │   ├── sentiment_service.py      # Sentiment analysis
│   │   ├── youtube_service.py        # YouTube comments fetching
│   │   └── openai_service.py         # OpenAI API integration
│   ├── utils/                 # Helper utilities
│   │   └── youtube_helper.py         # YouTube API helpers
│   ├── requirements.txt        # Python dependencies
│   └── Dockerfile             # Container configuration
│
├── docs/
│   ├── overview.md            # This file
│   ├── architecture.md         # Technical architecture
│   └── ux-flow.md             # User experience flows
│
├── .env.example               # Environment variables template
└── README.md                  # Getting started guide
```

## Data Flow

### 1. User Input
- User submits a YouTube video URL via the frontend form
- Frontend validates the URL format

### 2. Backend Processing
- Backend extracts video ID from URL
- Fetches video metadata from YouTube API
- Retrieves comments (up to 500)
- Generates sentiment analysis for each comment
- Creates summaries using OpenAI

### 3. Analysis Results
- Sentiment distribution (positive/negative/neutral percentages)
- Transcript summary
- Comment-based insights
- Final analysis combining all data

### 4. Frontend Display
- Results are displayed in charts and text summaries
- Sentiment breakdown visualization
- Key themes and insights

## Key Components

### Frontend Components
- `YoutubeForm`: Input form for video URLs
- `SentimentResults`: Display sentiment analysis
- `SentimentChart`: Visualization of sentiment distribution
- `SentimentSummary`: Text-based insights
- `TranscriptSummary`: Video transcript summary
- UI Components: Button, Input, Card, Alert, etc. (Shadcn)

### Backend Services
- **sentiment_service.py**: Analyzes comment sentiment using transformers
- **youtube_service.py**: Fetches comments from YouTube API
- **openai_service.py**: Integrates with OpenAI for summarization
- **youtube_helper.py**: Utility functions for YouTube integration

## API Endpoints

### POST /api/analyze
Analyzes a YouTube video for sentiment and creates summaries.

**Request:**
```json
{
  "url": "https://youtube.com/watch?v=VIDEO_ID"
  // OR
  "videoId": "VIDEO_ID"
}
```

**Response:**
```json
{
  "videoId": "dQw4w9WgXcQ",
  "videoTitle": "Video Title",
  "channelTitle": "Channel Name",
  "commentCount": 150,
  "sentiment": {
    "positive": 65.5,
    "negative": 15.3,
    "neutral": 19.2
  },
  "summary": "Detailed analysis...",
  "transcriptSummary": "Video transcript summary...",
  "apiQuotaExceeded": false
}
```

### GET /api/results?videoId=VIDEO_ID
Retrieves previously cached results for a video.

### GET /health
Health check endpoint for deployment monitoring.

## Environment Variables

Create a `.env` file with:

```
YOUTUBE_API_KEY=your_youtube_api_key
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_API_URL=http://localhost:5000  # Backend URL for frontend
```

## Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Auto-deploy on push

### Backend (Render or Railway)
1. Push code to GitHub
2. Create new service
3. Set build command: `pip install -r backend/requirements.txt`
4. Set start command: `cd backend && python app.py`
5. Auto-deploy on push

## Error Handling

- **Missing API Keys:** Graceful degradation of features
- **API Quota Exceeded:** User-friendly error messages
- **Invalid URLs:** URL validation on both frontend and backend
- **Network Errors:** Automatic retry logic with exponential backoff
- **Malformed Data:** Input sanitization and validation

## Performance Optimizations

- Lazy loading of ML models
- Comment batching to reduce API calls
- Error retry logic to handle transient failures
- CORS enabled for cross-origin requests
- Development mode with hot reload support

## Future Enhancements

- Real-time WebSocket updates
- Video caching to reduce repeated API calls
- Extended comment fetching (beyond 500 comments)
- Multilingual sentiment analysis
- Custom model fine-tuning
- Database integration for result persistence
- User authentication and saved analyses
