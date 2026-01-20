# Project Overview

## Integrated Review of YouTube Videos using Sentiment Analysis and AI

This is a comprehensive full-stack application designed to analyze YouTube video comments and provide AI-powered insights about viewer sentiment and video performance.

## What Does This Project Do?

### Core Features

1. **YouTube Comment Analysis**
   - Automatically fetches comments from any YouTube video
   - Analyzes sentiment of each comment (positive/negative/neutral)
   - Calculates overall sentiment distribution

2. **AI-Powered Summarization**
   - Uses OpenAI GPT-3.5 Turbo to summarize comments
   - Provides transcript summaries
   - Generates detailed insights about video performance

3. **Sentiment Visualization**
   - Displays sentiment distribution in interactive charts
   - Shows breakdown of positive, negative, and neutral comments
   - Visualizes key metrics and statistics

4. **Detailed Insights**
   - Identifies positive aspects highlighted by viewers
   - Flags criticisms and areas for improvement
   - Suggests content ideas for future videos

## How It Works

### User Flow

1. **Input**: User enters a YouTube video URL
2. **Processing**: 
   - Extract video metadata
   - Fetch comments from YouTube
   - Analyze sentiment of comments
   - Generate AI summaries
3. **Output**: Display comprehensive analysis dashboard

### Technology Behind the Scenes

- **ML Sentiment Analysis**: Uses DistilBERT model via Hugging Face Transformers
- **AI Summarization**: OpenAI's GPT-3.5 Turbo for intelligent text analysis
- **APIs**: YouTube Data API v3 for video and comment data
- **Frontend**: Modern React with Next.js and Tailwind CSS
- **Backend**: Python Flask microservices architecture

## Key Use Cases

- **Content Creators**: Understand viewer sentiment and get feedback insights
- **Video Marketers**: Analyze campaign video performance
- **Researchers**: Study sentiment trends in video comments
- **Quality Assurance**: Monitor content reception and identify issues

## Project Statistics

- **Frontend**: React 19, Next.js 15, 30+ UI components
- **Backend**: Modular Python services, 3 main services + utilities
- **APIs Integrated**: YouTube Data API, OpenAI API
- **ML Models**: DistilBERT sentiment analysis, GPT-3.5 Turbo
