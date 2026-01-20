#!/usr/bin/env python
"""
Simple HTTP server for the sentiment analysis backend.
Uses Python's built-in http.server instead of Flask to avoid compatibility issues.
"""
import json
import sys
import os
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import threading

sys.path.insert(0, os.path.dirname(__file__))

# Import the Flask app routes separately
from app import app

class SimpleHandler(BaseHTTPRequestHandler):
    """Handle HTTP requests using Flask's test client"""
    
    def do_GET(self):
        """Handle GET requests"""
        path = urlparse(self.path).path
        
        with app.test_client() as client:
            response = client.get(path)
            
        self.send_response(response.status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        
        self.wfile.write(response.get_data())
    
    def do_POST(self):
        """Handle POST requests"""
        path = urlparse(self.path).path
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length)
        
        with app.test_client() as client:
            response = client.post(
                path,
                data=body,
                content_type=self.headers.get('Content-Type', 'application/json')
            )
        
        self.send_response(response.status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        
        self.wfile.write(response.get_data())
    
    def do_OPTIONS(self):
        """Handle CORS preflight"""
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
    
    def log_message(self, format, *args):
        """Suppress default logging"""
        print(f"[{self.client_address[0]}] {format % args}", flush=True)

def run_server(port=5000):
    """Run the HTTP server"""
    try:
        server_address = ('0.0.0.0', port)
        print(f"Creating server on {server_address}...", flush=True)
        httpd = HTTPServer(server_address, SimpleHandler)
        print(f"✓ Server running on http://127.0.0.1:{port}", flush=True)
        print(f"✓ Network: http://192.168.0.191:{port}", flush=True)
        print("Press CTRL+C to quit", flush=True)
        
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down...", flush=True)
        try:
            httpd.shutdown()
        except:
            pass
    except Exception as e:
        print(f"ERROR: {e}", flush=True)
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == '__main__':
    print("Starting sentiment analysis backend...")
    print("Using Flask with Python's http.server")
    run_server(5000)
