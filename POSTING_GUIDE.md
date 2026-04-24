# Posting Guide

This site is set up so blog posts are written as simple Markdown files.

## Fastest workflow

Open Terminal and run:

```bash
cd /Users/pricea/Developer/Site
npm run new-post -- "My New Post"
```

That creates a new file in:

```text
src/pages/blog/
```

Example:

```text
src/pages/blog/my-new-post.md
```

## Write the post

Open the new `.md` file in any Markdown editor.

Good Mac options:

- Obsidian
- Typora
- VS Code
- iA Writer

## Required post format

Each post should look like this:

```md
---
layout: ../../layouts/PostLayout.astro
title: My New Post
publishDate: April 24, 2026
category: Updates
excerpt: One short summary sentence for the blog index.
---

Write your post here.

## Section heading

More text here.
```

## Basic Markdown you can use

```md
# Big heading
## Section heading
### Smaller heading

Regular paragraph text.

**Bold text**
*Italic text*

- Bullet one
- Bullet two

[A link](https://example.com)
```

## Adding images

Put image files here:

```text
public/images/blog/
```

Example:

```text
public/images/blog/my-photo.jpg
```

Then reference the image in the post like this:

```md
![Alt text](/images/blog/my-photo.jpg)
```

## Before publishing

Run:

```bash
cd /Users/pricea/Developer/Site
npm run build
```

If the build succeeds, the post is valid.

## Publish the post

Run:

```bash
cd /Users/pricea/Developer/Site
git add .
git commit -m "Add blog post: My New Post"
git push
```

GitHub Pages will deploy the site automatically after the push.

## If you do not want to use the generator

You can manually copy this template:

```text
templates/blog-post.md
```

Then save the new file into:

```text
src/pages/blog/
```

## Full example

```bash
cd /Users/pricea/Developer/Site
npm run new-post -- "WidgText 1.1 Update"
npm run build
git add .
git commit -m "Add blog post: WidgText 1.1 Update"
git push
```

## Important folders

- Blog posts: `src/pages/blog/`
- Blog images: `public/images/blog/`
- Manual post template: `templates/blog-post.md`
- Post generator script: `scripts/new-post.sh`

## If something goes wrong

Check these first:

1. Did you save the post in `src/pages/blog/`?
2. Did you keep the frontmatter block at the top?
3. Did you put images in `public/images/blog/`?
4. Does `npm run build` succeed?
