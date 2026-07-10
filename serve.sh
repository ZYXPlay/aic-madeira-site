#!/bin/sh
# Build the site into dist/ and serve it: ./serve.sh [port]
PORT="${1:-8000}"
cd "$(dirname "$0")" || exit 1
python3 build.py || exit 1
echo "Serving at http://localhost:$PORT"
cd dist && exec python3 -m http.server "$PORT"
