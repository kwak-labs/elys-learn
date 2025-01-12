# Elys Learn Content Management Guide

This guide explains how to manage and contribute content to the Elys Learn documentation platform.

## Content Structure

The content is organized in language-specific folders under the `content/` directory (This is an example of the structure):
```
content/
├── en/ # English content
│   ├── 0.index.md
│   ├── 1.staking/
│   │   ├── 0.index.md
│   │   ├── 1.governors.md
│   │   └── 2.rewards.md
│   └── 2.liquidity_mining/
│       ├── 0.index.md
│       └── ...
└── es/ # Spanish content
    ├── index.md
    └── about.md```


### File Naming Conventions

- Use numbered prefixes (e.g., `0.index.md`, `1.staking.md`) to control the ordering
- Use lowercase with underscores for multi-word filenames
- Each section should have an `index.md` file as its entry point
- Related content should be grouped in subdirectories

## Creating New Content

### File Template

Every markdown file should start with this frontmatter template:
```md
---
title: Your Page Title
description: A brief description of the page content (used for SEO and previews)
---
```


## Content Formatting
Learn more about markdown [here](https://www.markdownguide.org/basic-syntax/)

### Markdown Features

The platform supports standard markdown plus some enhanced features:

- Headers (H1-H6)
- Links to other pages (`[Link Text](/en/path/to/page)`)
- Code blocks with syntax highlighting
- Tables
- Lists (ordered and unordered)
- Images
- Blockquotes
- Bold and italic text

For a complete markdown reference, see:
- [Basic Markdown Syntax](https://www.markdownguide.org/basic-syntax/)
- [Extended Markdown Syntax](https://www.markdownguide.org/extended-syntax/)

### Internal Links

When linking to other pages within the documentation:
- Always include the language prefix: `/en/` or `/es/`
- Use relative paths from the content root
- Link to specific sections using anchors: `[Link](#section-id)`

Example Page for /en/0.index.md:
```md
---
title: What is Elys?
description: Your comprehensive guide to understanding and using Elys Network
---

# What is Elys?

Elys Network is a decentralized finance (Defi) [AppChain](en/999.concepts.md#appchain) that facilitates the uses of Swapping tokens, Staking, Liquidity Mining, Perpetual trading, Leverage trading, and more. But dont worry if you dont know what any of that means, this guide will help you understand everything you need to know, using videos, and text like you are reading right now!

## Navigation Glossory!
- [Staking](en/1.staking.md) - Learn all about staking on Elys
- [Tokens](en/2.tokens.md) - Learn about the native tokens used on Elys

Through our comprehensive platform, liquidity providers, traders, and stakers can optimize their strategies while accessing a wide range of options to enhance their rewards in the DeFi ecosystem.
```

## Want to see what it would look like?
Navigate to 







