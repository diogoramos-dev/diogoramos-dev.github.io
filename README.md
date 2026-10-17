This repository hosts the source code of my [personal website](https://diogoramos-dev.github.io).

It's a [Jekyll](https://jekyllrb.com) site, built and hosted by GitHub Pages. No build step to run: push to `main` and GitHub publishes it.

## Writing a new post

**On GitHub (no setup):**

1. Open the `_posts` folder and click **Add file → Create new file**.
2. Name it `YYYY-MM-DD-short-title.md`, e.g. `2026-11-03-apex-trigger-framework.md`.
3. Start with this header, then write the article in Markdown below it:

   ```markdown
   ---
   title: "Your article title"
   description: One sentence shown in lists and search results.
   series: The Salesforce Architect Mindset   # optional
   tags: [Apex, Architecture]                  # optional
   ---
   ```

4. Commit. The post is live in about a minute.

See `_drafts/sample-post.md` for every formatting element available (code, tables, callouts, images). Files in `_drafts/` are never published.

**With a visual editor:** sign in at [pagescms.org](https://pagescms.org) with GitHub and pick this repository. The `.pages.yml` file already configures the posts and projects forms.

**Linking a Medium article instead:** add `external_url: https://medium.com/...` to the header and leave the body empty. The post shows in the list and links out to Medium.

## Adding a project

Edit `_data/projects.yml` (there is an example in the file).

## Structure

| Path | What it is |
| --- | --- |
| `_config.yml` | Site title, description, social links |
| `_posts/` | Blog posts (Markdown) |
| `_data/projects.yml` | Projects list |
| `about/index.md` | About page |
| `_layouts/`, `_includes/` | HTML templates |
| `assets/css/main.css` | All styles, including light/dark theme tokens |

## Running locally (optional)

```bash
bundle install
bundle exec jekyll serve --drafts
```

Then open http://localhost:4000.
