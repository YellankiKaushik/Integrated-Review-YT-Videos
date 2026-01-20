# Backend Utils: YouTube Helper Functions
# This module contains utility functions for extracting video IDs and 
# communicating with YouTube API

import re
from googleapiclient.discovery import build

def extract_video_id(url):
    """Extract the video ID from a YouTube URL."""
    regex = r"(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})"
    match = re.search(regex, url)
    return match.group(1) if match else None

def get_video_info(video_id, api_key):
    """Get basic information about a YouTube video."""
    youtube = build('youtube', 'v3', developerKey=api_key)
    response = youtube.videos().list(
        part="snippet",
        id=video_id
    ).execute()
    
    if not response['items']:
        return None
    
    video_info = response['items'][0]['snippet']
    return {
        'title': video_info['title'],
        'channelTitle': video_info['channelTitle'],
        'publishedAt': video_info['publishedAt']
    }
