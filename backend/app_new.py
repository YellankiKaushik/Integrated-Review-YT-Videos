# Flask Backend Entry Point
# Main application file - routes API requests to appropriate services
# This file has been refactored to use modular services for maintainability

from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Import services
from services.sentiment_service import analyze_sentiment
from services.youtube_service import get_comments, batch_comments
from services.openai_service import (
    initialize_openai_client,
    get_transcript,
    get_transcript_summary,
    get_comments_summaries,
    create_final_summary
)
from utils.youtube_helper import extract_video_id, get_video_info

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Initialize API clients
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# Initialize OpenAI client
initialize_openai_client(OPENAI_API_KEY)

@app.route('/api/analyze', methods=['POST'])
def analyze():
    """
    Analyze a YouTube video's comments and sentiment.
    
    Expected POST data:
    - url: YouTube video URL (or)
    - videoId: YouTube video ID
    
    Returns:
    - videoId, videoTitle, channelTitle, commentCount, sentiment analysis, summary
    """
    data = request.json
    
    # Check if URL or video ID is provided
    if 'url' in data:
        video_id = extract_video_id(data['url'])
    elif 'videoId' in data:
        video_id = data['videoId']
    else:
        return jsonify({'error': 'No URL or video ID provided'}), 400
    
    if not video_id:
        return jsonify({'error': 'Invalid YouTube URL or video ID'}), 400
    
    try:
        # Get video information
        video_info = get_video_info(video_id, YOUTUBE_API_KEY)
        if not video_info:
            return jsonify({'error': 'Video not found'}), 404
        
        # Get comments
        comments = get_comments(video_id, YOUTUBE_API_KEY)
        
        # Get transcript and summary
        transcript = get_transcript(video_id)
        transcript_summary = get_transcript_summary(transcript)
        
        # Check if there was an API quota error with transcript summary
        quota_error = False
        if "OpenAI API quota exceeded" in transcript_summary:
            quota_error = True
        
        # Batch comments and get summaries
        comment_batches = batch_comments(comments)
        comment_summaries = get_comments_summaries(comment_batches)
        
        # Check if there was an API quota error with comment summaries
        for summary in comment_summaries:
            if "OpenAI API quota exceeded" in summary:
                quota_error = True
                break
        
        # Create final summary
        final_summary = create_final_summary(comment_summaries, transcript_summary)
        
        # Analyze sentiment
        sentiment_counts = analyze_sentiment(comments)
        
        # Prepare results
        results = {
            'videoId': video_id,
            'videoTitle': video_info['title'],
            'channelTitle': video_info['channelTitle'],
            'commentCount': len(comments),
            'sentiment': sentiment_counts,
            'summary': final_summary,
            'transcriptSummary': transcript_summary,
            'apiQuotaExceeded': quota_error
        }
        
        return jsonify(results)
        
    except Exception as e:
        print(f"Error processing request: {e}")
        error_msg = str(e)
        
        if "insufficient_quota" in error_msg or "exceeded your current quota" in error_msg:
            return jsonify({
                'error': 'OpenAI API quota exceeded. Please check your API key and billing details.',
                'apiQuotaExceeded': True
            }), 429
        
        return jsonify({'error': 'Failed to process video'}), 500

@app.route('/api/results', methods=['GET'])
def get_results():
    """
    Retrieve analysis results for a specific video.
    
    Query parameters:
    - videoId: YouTube video ID
    
    Returns:
    - Same as /api/analyze endpoint
    """
    video_id = request.args.get('videoId')
    
    if not video_id:
        return jsonify({'error': 'No video ID provided'}), 400
    
    try:
        # Get video information
        video_info = get_video_info(video_id, YOUTUBE_API_KEY)
        if not video_info:
            return jsonify({'error': 'Video not found'}), 404
        
        # Get comments
        comments = get_comments(video_id, YOUTUBE_API_KEY)
        
        # Get transcript and summary
        transcript = get_transcript(video_id)
        transcript_summary = get_transcript_summary(transcript)
        
        # Check if there was an API quota error with transcript summary
        quota_error = False
        if "OpenAI API quota exceeded" in transcript_summary:
            quota_error = True
        
        # Batch comments and get summaries
        comment_batches = batch_comments(comments)
        comment_summaries = get_comments_summaries(comment_batches)
        
        # Check if there was an API quota error with comment summaries
        for summary in comment_summaries:
            if "OpenAI API quota exceeded" in summary:
                quota_error = True
                break
        
        # Create final summary
        final_summary = create_final_summary(comment_summaries, transcript_summary)
        
        # Analyze sentiment
        sentiment_counts = analyze_sentiment(comments)
        
        # Prepare results
        results = {
            'videoId': video_id,
            'videoTitle': video_info['title'],
            'channelTitle': video_info['channelTitle'],
            'commentCount': len(comments),
            'sentiment': sentiment_counts,
            'summary': final_summary,
            'transcriptSummary': transcript_summary,
            'apiQuotaExceeded': quota_error
        }
        
        return jsonify(results)

    except Exception as e:
        print(f"Error processing request: {e}")
        error_msg = str(e)
        
        if "insufficient_quota" in error_msg or "exceeded your current quota" in error_msg:
            return jsonify({
                'error': 'OpenAI API quota exceeded. Please check your API key and billing details.',
                'apiQuotaExceeded': True
            }), 429
        
        return jsonify({'error': 'Failed to process video'}), 500

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint for deployment monitoring."""
    return jsonify({'status': 'ok'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
