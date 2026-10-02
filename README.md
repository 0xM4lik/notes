# bunkernet // notes

Personal digital garden, cybersecurity writeups, and homelab systems documentation deployed on Cloudflare Workers.

[![Quartz 5](https://img.shields.io/badge/Quartz-5.0.0-black?style=flat-square&logo=quartz)](https://quartz.jzhao.xyz)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE.txt)

---

## Features

| Feature                     | Description                                                                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **11 Bunkernet Themes**     | Full palette parity with [bunkernet.cc](https://bunkernet.cc) (Dark, Light, Matrix, Ocean, Dracula, Nord, Amber, Tokyo Night, Gruvbox, Catppuccin, Monokai) |
| **System Auto-Detect**      | Matches OS appearance dynamically with zero-flicker pre-render execution                                                                                    |
| **Dynamic Graph Re-render** | Quartz interactive force-directed graph synchronizes colors live on theme change                                                                            |
| **Obsidian Markdown**       | Native support for wikilinks, callouts, frontmatter tags, syntax highlighting, and KaTeX math                                                               |
| **Static Edge Hosting**     | Pre-rendered static HTML and assets served via Cloudflare Workers Static Assets                                                                             |

---

## Quick Start

Run the site locally with hot reload:

```bash
npm install
npx quartz build --serve
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## Theming

Themes are switchable at runtime from the toolbar popover menu. The engine stores preferences under `bunkernet_theme_v2` and `theme` in `localStorage`, maintaining state across subdomains.

| Theme ID      | Palette Description                          | Primary Accent |
| ------------- | -------------------------------------------- | -------------- |
| `dark`        | Clean dark theme                             | `#58a6ff`      |
| `light`       | High-contrast clean light theme              | `#0969da`      |
| `matrix`      | Cyberpunk CRT green phosphor terminal        | `#4dff9e`      |
| `ocean`       | Deep oceanic cyan with neon amber highlights | `#00f0ff`      |
| `dracula`     | Gothic dark purple and pink                  | `#bd93f9`      |
| `nord`        | Arctic Scandinavian frost slate and blue     | `#88c0d0`      |
| `amber`       | Monochrome warm amber phosphor CRT           | `#ffb000`      |
| `tokyo-night` | Indigo cyberpunk night with neon blue        | `#7aa2f7`      |
| `gruvbox`     | Warm retro dark groove palette               | `#fabd2f`      |
| `catppuccin`  | Soothing pastel mocha with lavender          | `#cba6f7`      |
| `monokai`     | High-contrast classic developer code palette | `#a6e22e`      |

---

## Build & Deployment

### Production Build

```bash
npx quartz build
```

The compiled static site will be generated into the `./public` directory.

### Deploy to Cloudflare Workers

```bash
npx wrangler deploy
```

Deployment configuration is defined in [`wrangler.jsonc`](wrangler.jsonc), binding the `./public` asset directory to Cloudflare's global edge network.

---

## Author & Links

| Service            | Link                                                                           |
| ------------------ | ------------------------------------------------------------------------------ |
| **Main Website**   | [bunkernet.cc](https://bunkernet.cc)                                           |
| **Notes Instance** | [notes.bunkernet.cc](https://notes.bunkernet.cc)                               |
| **GitHub**         | [@0xM4lik](https://github.com/0xM4lik)                                         |
| **Matrix**         | [`@malik:matrix.bunkernet.cc`](https://matrix.to/#/@malik:matrix.bunkernet.cc) |
| **HackTheBox**     | [Janik on HTB](https://app.hackthebox.com/users/1464597)                       |

---

## License

This project is licensed under the MIT License — see [`LICENSE.txt`](LICENSE.txt) for details.
