# Site

Astro rebuild of the personal site for Aaron Michael Price.

## Scripts

```bash
npm install
npm run dev
npm run new-post -- "My New Post"
```

## Current status

- Astro project structure is in place.
- Blog posts live as Markdown files in `src/pages/blog/`.
- Product pages live under `src/pages/products/`.
- Contact and support forms submit to Formspree.
- GitHub Pages deployment workflow lives at `.github/workflows/deploy.yml`.
- Astro is configured for the custom domain:
  - `site: https://aaronprice.org`
- GitHub Pages custom domain is declared in `public/CNAME`.

## Important

Dependencies are installed locally and the Astro build has been validated. The repo is configured for GitHub Pages deployment through GitHub Actions.

## GitHub Pages setup

On GitHub:

1. Open the repository Settings.
2. Go to Pages.
3. Set Source to `GitHub Actions`.
4. Enter `aaronprice.org` as the custom domain if GitHub has not picked it up automatically from `CNAME`.
5. Enable `Enforce HTTPS` after DNS is correct and the certificate is issued.

After that, pushing to `main` will trigger deployment.

## DNS

At your DNS provider, point `aaronprice.org` to GitHub Pages using GitHub's recommended records for an apex domain. If you also want `www.aaronprice.org`, add it as a `CNAME` to your GitHub Pages host and optionally redirect it to the apex domain in GitHub Pages settings.

## Writing blog posts

The simplest workflow is:

```bash
npm run new-post -- "My New Post"
```

That creates a Markdown file in `src/pages/blog/` with the correct frontmatter and a basic starter template.

Edit the generated file, then:

```bash
npm run build
git add .
git commit -m "Add blog post: My New Post"
git push
```

### Images

Put blog images in:

```text
public/images/blog/
```

Reference them in Markdown like:

```md
![Alt text](/images/blog/example.jpg)
```

### Manual template

If you prefer duplicating a file instead of using the script, copy:

```text
templates/blog-post.md
```
