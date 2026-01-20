# PowerShell script to run the YouTube Sentiment Analysis backend
Write-Host "Installing required dependencies..."
pip install -r requirements.txt

Write-Host "Downloading NLTK data..."
python -m nltk.downloader vader_lexicon

Write-Host "Starting the Flask application..."
python app.py 