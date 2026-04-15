"""
build-brainplay.py
==================
Run this from the same folder as brainplay/index.html whenever you add a new post.

    python3 build-brainplay.py

It reads every .html file in the posts/ subfolder, extracts the
frontmatter comment at the top, and injects a sorted post list into
brainplay/index.html between the <!-- POSTS:START --> and <!-- POSTS:END --> markers.
"""

import os
import re
from datetime import datetime

# ── Config ────────────────────────────────────────────────────────────────────

POSTS_DIR     = "posts"       # folder containing individual post files
INDEX_FILE    = "index.html"  # the page to inject the list into
SKIP_FILES    = {"post-template.html"}  # filenames to ignore

# ── Frontmatter parser ────────────────────────────────────────────────────────

def parse_frontmatter(content: str) -> dict | None:
    """
    Reads the first HTML comment in the file and parses key: value pairs.

    Expected format at the very top of each post file:
    <!--
    title: Why Sleep Matters for Learning
    date: 2025-03-10
    tags: neuroscience, education
    excerpt: A short teaser sentence goes here.
    -->
    """
    match = re.search(r'<!--([\s\S]*?)-->', content)
    if not match:
        return None
    meta = {}
    for line in match.group(1).strip().splitlines():
        if ':' in line:
            key, _, value = line.partition(':')
            meta[key.strip()] = value.strip()
    # Require all four fields
    required = {"title", "date", "tags", "excerpt"}
    if not required.issubset(meta):
        return None
    return meta

# ── HTML renderer for a single post ──────────────────────────────────────────

def render_post_item(meta: dict, filename: str) -> str:
    href         = f"posts/{filename}"
    date_iso     = meta["date"]
    date_display = datetime.strptime(date_iso, "%Y-%m-%d").strftime("%-d %b %Y")
    tag_list     = [t.strip() for t in meta["tags"].split(",")]
    data_tags    = ",".join(tag_list)
    tags_html    = "\n\t\t\t  ".join(
                       f'<span class="post-tag">{t}</span>' for t in tag_list)

    return f"""
\t\t<li class="post-item" data-tags="{data_tags}">
\t\t  <article class="post-card">
\t\t    <div class="post-card-meta">
\t\t      <time class="post-date" datetime="{date_iso}">{date_display}</time>
\t\t      <span class="post-tags">
\t\t\t  {tags_html}
\t\t      </span>
\t\t    </div>
\t\t    <h2 class="post-title">
\t\t      <a href="{href}">{meta["title"]}</a>
\t\t    </h2>
\t\t    <p class="post-excerpt">{meta["excerpt"]}</p>
\t\t    <a href="{href}" class="post-read-more">read →</a>
\t\t  </article>
\t\t</li>"""

# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    # 1. Collect posts
    posts = []
    for filename in os.listdir(POSTS_DIR):
        if not filename.endswith(".html") or filename in SKIP_FILES or filename.startswith("draft_"):
            continue
        filepath = os.path.join(POSTS_DIR, filename)
        with open(filepath, encoding="utf-8") as f:
            content = f.read()
        meta = parse_frontmatter(content)
        if meta is None:
            print(f"  ⚠️  Skipping {filename} — missing or incomplete frontmatter")
            continue
        posts.append((meta, filename))

    if not posts:
        print("⚠️  No posts found. Make sure your post files have frontmatter comments.")
        return

    # 2. Sort newest-first
    posts.sort(key=lambda p: p[0]["date"], reverse=True)

    # 3. Render list HTML
    list_html = "".join(render_post_item(meta, fn) for meta, fn in posts)

    # 4. Inject into scribbles.html
    with open(INDEX_FILE, encoding="utf-8") as f:
        page = f.read()

    marker = r'<!-- POSTS:START -->[\s\S]*?<!-- POSTS:END -->'
    replacement = f'<!-- POSTS:START -->{list_html}\n\t\t<!-- POSTS:END -->'

    if not re.search(marker, page):
        print("❌  Could not find <!-- POSTS:START --> ... <!-- POSTS:END --> in brainplay/index.html.")
        print("    Add those markers inside your <ol class=\"post-list\"> element and try again.")
        return

    updated = re.sub(marker, replacement, page)

    with open(INDEX_FILE, "w", encoding="utf-8") as f:
        f.write(updated)

    print(f"✅  Injected {len(posts)} post(s) into {INDEX_FILE}:")
    for meta, fn in posts:
        print(f"    • {meta['date']}  {meta['title']}")

if __name__ == "__main__":
    main()
