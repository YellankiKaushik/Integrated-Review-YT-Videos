#!/usr/bin/env python
"""
Simple Flask runner - minimalist approach.
"""
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from app import app

if __name__ == '__main__':
    print("Starting Flask app on port 5000...")
    try:
        # Use the simplest possible configuration
        app.run(
            host='0.0.0.0',
            port=5000,
            debug=False,
            use_debugger=False,
            use_reloader=False,
            threaded=False
        )
    except KeyboardInterrupt:
        print("\nShutting down...")
        sys.exit(0)
    except Exception as e:
        print(f"ERROR: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
