# Backend Service: Sentiment Analysis Service
# This module handles sentiment analysis of comments using transformers

from transformers import pipeline

# Initialize the sentiment analysis pipeline lazily with error handling
sentiment_analyzer = None

def get_sentiment_analyzer():
    """Lazy load the sentiment analyzer on first use."""
    global sentiment_analyzer
    if sentiment_analyzer is None:
        try:
            sentiment_analyzer = pipeline("sentiment-analysis")
        except Exception as e:
            print(f"ERROR initializing sentiment analyzer: {e}")
            print("Sentiment analysis will be disabled.")
    return sentiment_analyzer

def analyze_sentiment(comments):
    """Analyze the sentiment of comments."""
    if not comments:
        return {
            'positive': 0,
            'negative': 0,
            'neutral': 0
        }
    
    sentiment_counts = {'positive': 0, 'negative': 0, 'neutral': 0}
    
    for comment in comments:
        try:
            # Process comments in batches to avoid rate limits
            analyzer = get_sentiment_analyzer()
            if analyzer is None:
                # If sentiment analyzer is not available, skip sentiment analysis
                sentiment_counts['neutral'] += 1
                continue
                
            result = analyzer(comment)
            sentiment = result[0]
            
            # Using the same threshold as in the original code (0.9)
            if sentiment['label'] == 'POSITIVE' and sentiment['score'] > 0.9:
                sentiment_counts['positive'] += 1
            elif sentiment['label'] == 'NEGATIVE' and sentiment['score'] > 0.9:
                sentiment_counts['negative'] += 1
            else:
                sentiment_counts['neutral'] += 1
                
        except Exception as e:
            print(f"Error in sentiment analysis: {e}")
            sentiment_counts['neutral'] += 1
    
    # Calculate percentages instead of raw counts
    total = sum(sentiment_counts.values())
    if total > 0:
        sentiment_percentages = {
            'positive': (sentiment_counts['positive'] / total) * 100,
            'negative': (sentiment_counts['negative'] / total) * 100,
            'neutral': (sentiment_counts['neutral'] / total) * 100
        }
        return sentiment_percentages
    else:
        return {
            'positive': 0,
            'negative': 0,
            'neutral': 0
        }
