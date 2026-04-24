#!/usr/bin/env bash

set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Usage: npm run new-post -- \"Post Title\""
  exit 1
fi

TITLE="$*"
DATE_STR="$(date +"%B %-d, %Y")"

slug="$(
  printf '%s' "$TITLE" \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//'
)"

if [ -z "$slug" ]; then
  echo "Could not generate a valid slug from the title."
  exit 1
fi

POST_DIR="src/pages/blog"
POST_PATH="${POST_DIR}/${slug}.md"

if [ -f "$POST_PATH" ]; then
  echo "Post already exists: $POST_PATH"
  exit 1
fi

mkdir -p "$POST_DIR"
mkdir -p "public/images/blog"

cat > "$POST_PATH" <<EOF
---
layout: ../../layouts/PostLayout.astro
title: $TITLE
publishDate: $DATE_STR
category: Updates
excerpt: Add a one-sentence summary for the blog index.
---

Write your post here.

## Section heading

More text here.

![Optional image](/images/blog/your-image-file.jpg)
EOF

echo "Created: $POST_PATH"
echo
echo "Next steps:"
echo "1. Edit the post file."
echo "2. Add any images to public/images/blog/"
echo "3. Run: npm run build"
echo "4. Commit and push"
