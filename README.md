# OpenHealth5G — Official Website

**Open 5G Networking for Digital Health**

This repository hosts the source code and content for the [OpenHealth5G](https://openhealth5g.org) research project website, built with [Hugo](https://gohugo.io/).

## Table of Contents

- [OpenHealth5G — Official Website](#openhealth5g--official-website)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Local Development](#local-development)
    - [Adding Content](#adding-content)
      - [Publications](#publications)
      - [News](#news)
      - [Team Members](#team-members)
      - [Software](#software)
      - [Static Images](#static-images)
  - [Design Guidelines](#design-guidelines)
    - [Color Palette](#color-palette)
    - [Typography](#typography)
  - [Building \& Deploying](#building--deploying)
    - [Local Build](#local-build)
    - [CI/CD Deployment](#cicd-deployment)
  - [Contributing](#contributing)
    - [Workflow](#workflow)
    - [Need Help?](#need-help)

## Project Overview

The OpenHealth5G website showcases our research on leveraging 5G open radio access networks for digital health applications. The site includes sections for:

| Section      | Description                                           |
|-------------|-------------------------------------------------------|
| About        | Project background, mission, and vision               |
| Use Cases    | Healthcare scenarios enabled by 5G networking         |
| Partners     | Collaborating institutions and organizations          |
| Team         | Researchers and contributors (data-driven)            |
| Software     | Open-source tools and projects (data-driven)          |
| Publications | Peer-reviewed papers and preprints (content-driven)   |
| News         | Project updates and announcements (content-driven)    |

The site is live at **https://openhealth5g.github.io/**.

## Getting Started

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (extended version, v0.124+ recommended)
- A text editor or IDE

### Local Development

```bash
# Clone the repository
git clone https://github.com/openhealth5g/openhealth5g.github.io.git
cd openhealth5g.github.io

# Run the local development server
hugo server

# The site will be available at http://localhost:1313
```

### Adding Content

#### Publications

Publications are content-driven. Create a new markdown file under `content/publications/`:

```bash
hugo new publications/2026-your-paper-title.md
```

Or create the file manually. The required front matter is:

```yaml
---
title: "Your Paper Title"
authors: "Author 1, Author 2, Author 3"
venue: "Conference/Journal Name"
date: 2026-01-15T00:00:00-03:00
pdf_link: "https://doi.org/..."
doi: "https://doi.org/..."
tags: ["Tag1", "Tag2"]
---

Your abstract or summary here.
```

**Tips:**
- Use a filename that includes the year and a slug: `2026-paper-slug.md`
- The `date` field controls chronological ordering
- `tags` enable filtering on the publications page
- Place the abstract/summary in the body (after the `---` separator)

#### News

News items are also content-driven. Create a new file under `content/news/`:

```bash
hugo new news/2026-your-news-slug.md
```

Or create the file manually. The required front matter is:

```yaml
---
title: "Your News Title"
date: 2026-01-15
summary: "One-line summary of the news item"
tags: ["tag1", "tag2"]
---

Your news content here. Use Markdown formatting.
```

**Tips:**
- The `summary` field is displayed alongside the title in the news listing
- `tags` enable filtering on the news page
- Full Markdown formatting (headings, lists, tables) is supported in the body

#### Team Members

Team is data-driven. Add entries to `data/team.yml`:

```yaml
members:
  - name: "Prof. Dr. Full Name"
    role: "Professor / Research Fellow / Student (PhD Candidate) / Collaborator"
    affiliation: "UFRGS / UFCSPA / PUCRS / UNISINOS / UTFPR"
    bio: "Short biography (2-3 sentences)."
    image: "images/team-photo-name.jpg"
    lattes: "http://lattes.cnpq.br/..."
    github: "username"
```

**Tips:**
- Place the photo in `static/images/` with the naming convention `team-role-firstname.jpg`
- `lattes` and `github` are optional (omit the line if not applicable)
- Roles determine display order on the team page: Professors, Research Fellows, Students, Collaborators
- Maintain alphabetical order within each role group

#### Software

Software is also data-driven. Add entries to `data/software.yml`:

```yaml
projects:
  - project_name: "Project Name"
    description: "Short description of the project and its purpose."
    repository_url: "https://github.com/openhealth5g/repo"
    status: "active"
```

**Valid statuses:** `active`, `archived`, `deprecated`

#### Static Images

Place all images in `static/images/`. When adding new images:

- Use WebP or SVG for diagrams and logos when possible (smaller file size)
- Use JPG for photos (compress to under 200 KB)
- Name files with descriptive, lowercase, hyphenated slugs: `architecture-diagram.png`
- Ensure team photos follow the convention: `team-{role}-{firstname}.jpg`

## Design Guidelines

This project follows a **"Refined Clinical Tech"** aesthetic. All design decisions should align with the brand identity documented in [BRANDING.md](./BRANDING.md).

### Color Palette

| Color        | Hex Code   | Usage                        |
|-------------|------------|------------------------------|
| Dark Blue   | `#004182` | Primary headings, logos      |
| Light Blue  | `#00B8E6` | Accents, CTAs, highlights    |
| Soft White  | `#F4F7F9` | Section backgrounds           |
| Dark Slate  | `#333333` | Body text                     |

### Typography

The **Ubuntu** font family is the exclusive typeface for the site.

- **Headings:** Ubuntu Bold (`#004182`)
- **Subheadings:** Ubuntu Medium (`#00B8E6`)
- **Body Text:** Ubuntu Regular (`#333333`)
- **Technical Labels:** Ubuntu Condensed

## Building & Deploying

### Local Build

```bash
hugo
# Generated site is in the public/ directory
```

### CI/CD Deployment

This repository uses GitHub Actions for automated deployment. The workflow is defined in [`.github/workflows/hugo.yaml`](./.github/workflows/hugo.yaml).

When a pull request is merged into the `main` branch, the site is automatically built and deployed to https://openhealth5g.github.io/ via GitHub Pages.

**No manual deployment steps are required.** Simply commit and push your changes (or open a PR) and the pipeline handles the rest.

## Contributing

We welcome contributions from all members of the OpenHealth5G research group. Use this only if you are proposing structural changes to the website. Simple content additions can be pushed directly to the `main` branch (members only).

### Workflow

1. **Create a branch** for your changes: `git checkout -b feature/your-change`
2. **Make your changes** — add content, fix typos, update images
3. **Test locally** (optional but recommended): `hugo server`
4. **Commit and push**: `git push origin feature/your-change`
5. **Open a Pull Request** — describe what changed and why

### Need Help?

- See [BRANDING.md](./BRANDING.md) for logo usage, colors, and typography
- Contact the project coordinator: **Prof. Dr. Juliano Wickboldt** (UFRGS)
