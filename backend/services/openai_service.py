# Backend Service: OpenAI Integration Service
# This module handles all OpenAI API calls for summarization and analysis

import time
from openai import OpenAI
import httpx

# Initialize OpenAI client with proper error handling
openai_client_initialized = False
client = None

def initialize_openai_client(api_key):
    """Initialize the OpenAI client with the provided API key."""
    global openai_client_initialized, client
    try:
        if not api_key:
            print("WARNING: OpenAI API key is not set. Some features will be limited.")
            return False
        else:
            client = OpenAI(
                api_key=api_key,
                http_client=httpx.Client()
            )
            openai_client_initialized = True
            return True
    except Exception as e:
        print(f"ERROR initializing OpenAI client: {e}")
        print("OpenAI integration will be disabled.")
        return False

def get_transcript_summary(transcript):
    """Get a summary of the video transcript using OpenAI."""
    # Check if OpenAI client is initialized
    if not openai_client_initialized or client is None:
        return "Transcript summary unavailable: OpenAI API is not configured."
    
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Provide a detailed summary of the given youtube video transcript."},
                {"role": "user", "content": transcript}
            ]
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"Error in transcript summary: {e}")
        
        # Check if it's a quota exceeded error
        error_str = str(e)
        if "insufficient_quota" in error_str or "exceeded your current quota" in error_str:
            return "Unable to generate transcript summary: OpenAI API quota exceeded. Please check your API key and billing details."
        
        # For other errors, retry once after delay
        time.sleep(60)  # Wait for 60 seconds before retrying
        try:
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "Provide a detailed summary of the given youtube video transcript."},
                    {"role": "user", "content": transcript}
                ]
            )
            return response.choices[0].message.content
        except Exception as retry_error:
            print(f"Retry failed: {retry_error}")
            return "Unable to generate transcript summary due to API errors. Please try again later."

def get_comments_summaries(batches):
    """Get summaries of comment batches using OpenAI."""
    summaries = []
    quota_exceeded = False
    
    # Check if OpenAI client is initialized
    if not openai_client_initialized or client is None:
        return ["Comments summary unavailable: OpenAI API is not configured."]

    for batch in batches:
        # Skip processing if quota already exceeded
        if quota_exceeded:
            summaries.append("OpenAI API quota exceeded. Unable to process comments.")
            continue
            
        try:
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "Summarize the following comments while keeping the detailed context."},
                    {"role": "user", "content": " ".join(batch)}
                ]
            )
            summaries.append(response.choices[0].message.content)
        except Exception as e:
            print(f"Error in comment summary: {e}")
            error_str = str(e)
            
            # Check if it's a quota exceeded error
            if "insufficient_quota" in error_str or "exceeded your current quota" in error_str:
                quota_exceeded = True
                summaries.append("OpenAI API quota exceeded. Unable to process comments.")
                continue
                
            # For other errors, retry once after delay
            time.sleep(60)  # Wait for 60 seconds
            try:
                # Retry the current batch
                response = client.chat.completions.create(
                    model="gpt-3.5-turbo",
                    messages=[
                        {"role": "system", "content": "Summarize the following comments while keeping the detailed context."},
                        {"role": "user", "content": " ".join(batch)}
                    ]
                )
                summaries.append(response.choices[0].message.content)
            except Exception as retry_error:
                print(f"Retry failed: {retry_error}")
                summaries.append("Failed to summarize comments due to API errors.")

    return summaries

def create_final_summary(summaries, transcript_summary):
    """Create a final summary from comment summaries and transcript summary."""
    # Check if OpenAI client is initialized
    if not openai_client_initialized or client is None:
        return "Analysis unavailable: OpenAI API is not configured."
    
    # Check if we already have fallback messages in the summaries
    for summary in summaries:
        if "OpenAI API quota exceeded" in summary or "API errors" in summary or "unavailable" in summary:
            return "Unable to provide a complete analysis: Some parts of the analysis failed due to API limitations."
            
    # Check if transcript summary contains an error message
    if "OpenAI API quota exceeded" in transcript_summary or "API errors" in transcript_summary or "unavailable" in transcript_summary:
        return "Unable to provide a complete analysis: Failed to process video transcript due to API limitations."
        
    summary_text = " ".join(summaries)
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": f"This is the summary of a YouTube video's transcript: {transcript_summary}. A user has commented on the video. Your task is to analyze this comment in the context of the video transcript. Based on the comment content and its relation to the transcript, please provide detailed insights, addressing these key points:\n1. Identify positive aspects of the video that the comment highlights and link these to specific parts of the transcript where possible.\n2. Identify any criticisms or areas for improvement mentioned in the comment, and relate these to relevant sections of the transcript.\n3. Based on the feedback or suggestions in the comment, recommend new content ideas or topics for future videos that align with the viewer's interests and the overall content strategy but don't make up things from your side unnecessarily. Ensure your analysis is clear and includes specific examples from both the comment and the transcript to support your insights."},
                {"role": "user", "content": summary_text}
            ]
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"Error in final summary: {e}")
        error_str = str(e)
        
        # Check if it's a quota exceeded error
        if "insufficient_quota" in error_str or "exceeded your current quota" in error_str:
            return "Unable to generate analysis: OpenAI API quota exceeded. Please check your API key and billing details."
            
        # For other errors, retry once after delay
        time.sleep(60)  # Wait for 60 seconds before retrying
        try:
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": f"This is the summary of a YouTube video's transcript: {transcript_summary}. A user has commented on the video. Your task is to analyze this comment in the context of the video transcript. Based on the comment content and its relation to the transcript, please provide detailed insights, addressing these key points:\n1. Identify positive aspects of the video that the comment highlights and link these to specific parts of the transcript where possible.\n2. Identify any criticisms or areas for improvement mentioned in the comment, and relate these to relevant sections of the transcript.\n3. Based on the feedback or suggestions in the comment, recommend new content ideas or topics for future videos that align with the viewer's interests and the overall content strategy but don't make up things from your side unnecessarily. Ensure your analysis is clear and includes specific examples from both the comment and the transcript to support your insights."},
                    {"role": "user", "content": summary_text}
                ]
            )
            return response.choices[0].message.content
        except Exception as retry_error:
            print(f"Retry failed: {retry_error}")
            return "Unable to generate final analysis due to API errors. Please try again later."

def get_transcript(video_id):
    """Get transcript for a YouTube video."""
    # This is a placeholder. In a real implementation, you would use YouTube's captions API
    # or a third-party library like youtube-transcript-api
    return "This is a placeholder transcript."
