#!/usr/bin/env python
"""Minimal test server to verify Flask works"""
from flask import Flask, jsonify
import sys

app = Flask(__name__)

@app.route('/test', methods=['GET'])
def test():
    print("DEBUG: Test endpoint called", file=sys.stderr, flush=True)
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    print("Starting minimal test server...", flush=True)
    sys.stdout.flush()
    sys.stderr.flush()
    try:
        app.run(host='0.0.0.0', port=5000, debug=False)
    except Exception as e:
        print(f"ERROR: {e}", file=sys.stderr, flush=True)
        import traceback
        traceback.print_exc(file=sys.stderr)
