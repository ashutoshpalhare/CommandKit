# CommandKit

> **Your Pocket Reference for ChatGPT Slash Commands**

A beautiful, fast, and fully responsive library of **100+ ChatGPT slash commands and prompt shortcuts** designed to help you discover, search, organize, copy, and reuse powerful AI workflows.

**CommandKit** is built with **pure HTML5, CSS3, and vanilla JavaScript (ES6)** — no frameworks, no build tools, no package managers, and no dependencies.

<p align="center">
  <a href="https://ashutoshpalhare.github.io/commandkit/">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-CommandKit-blue?style=for-the-badge" alt="Live Demo">
  </a>
  <a href="https://github.com/ashutoshpalhare/commandkit">
    <img src="https://img.shields.io/badge/💻%20Source%20Code-GitHub-black?style=for-the-badge&logo=github" alt="Source Code">
  </a>
</p>

---

## ✨ Features

* 🔍 **Instant Search** — Search across commands, titles, descriptions, categories, and examples with live text highlighting.
* 🗂️ **Category Filters** — Browse commands by category with automatic command counts.
* ↕️ **Smart Sorting** — Sort by Alphabetical, Newest, Most Popular, or Favorites.
* ⭐ **Favorites** — Save your favorite commands with persistent LocalStorage support.
* 📋 **One-Click Copy** — Copy any slash command instantly with clipboard support and toast feedback.
* 📖 **Expandable Cards** — View detailed explanations, usage tips, examples, and best use cases.
* 🌙 **Dark & Light Mode** — Dark mode by default with a persistent theme toggle.
* ⌨️ **Keyboard Shortcuts** — Navigate faster with built-in keyboard shortcuts.
* 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop screens.
* 🎨 **Smooth UI** — Subtle animations, hover effects, transitions, and interactive feedback.
* ♿ **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation, focus states, and skip links.
* ⚡ **Performance Optimized** — Debounced search and paginated/lazy card rendering.
* 🚀 **SEO Ready** — Meta tags, Open Graph, Twitter Cards, JSON-LD structured data, `robots.txt`, `sitemap.xml`, and favicon support.

---

## 📊 Library at a Glance

|          |              |
| -------- | ------------ |
| **100+** | Commands     |
| **11**   | Categories   |
| **0**    | Frameworks   |
| **0**    | Build Tools  |
| **0**    | Dependencies |

---

## ⌨️ Keyboard Shortcuts

| Shortcut   | Action                   |
| ---------- | ------------------------ |
| `Ctrl + K` | Focus the search bar     |
| `Esc`      | Close all expanded cards |
| `Ctrl + D` | Toggle dark/light theme  |

---

## 🛠️ Tech Stack

* **HTML5** — Semantic structure and accessibility
* **CSS3** — Responsive layout, themes, animations, and components
* **JavaScript ES6** — Application logic and interactions
* **LocalStorage API** — Persistent favorites and theme preferences
* **Clipboard API** — One-click command copying

No frameworks. No npm. No bundlers. No build process.

---

## 📁 Project Structure

```text
commandkit/
├── index.html
├── style.css
├── script.js
├── commands.js
├── README.md
├── robots.txt
├── sitemap.xml
└── assets/
    ├── icons/
    │   └── favicon.svg
    └── images/
        └── og-image.png
```

---

## 🚀 Getting Started

CommandKit requires no installation or build process.

### Run Locally

```bash
git clone https://github.com/ashutoshpalhare/commandkit.git
cd commandkit
```

Then open `index.html` in any modern browser.

That's it. No dependencies or development server required.

---

## ➕ Adding New Commands

All commands are stored in `commands.js` as a JavaScript array.

```js
{
  id: 101,
  command: "/mycommand",
  title: "My Command",
  category: "Writing",
  description: "Short one-line description.",
  example: "/mycommand do something useful.",
  details: "Longer explanation shown when the card is expanded.",
  tips: [
    "Tip one.",
    "Tip two."
  ],
  favorite: false
}
```

### Command Fields

| Field         | Type    | Description                          |
| ------------- | ------- | ------------------------------------ |
| `id`          | Number  | Unique identifier used for favorites |
| `command`     | String  | Slash command starting with `/`      |
| `title`       | String  | Human-friendly command name          |
| `category`    | String  | Command category                     |
| `description` | String  | Short command description            |
| `example`     | String  | Example prompt using the command     |
| `details`     | String  | Detailed explanation                 |
| `tips`        | Array   | Usage tips displayed when expanded   |
| `favorite`    | Boolean | Default favorite state               |

---

## 🗂️ Categories

CommandKit currently includes **11 categories**:

**Writing · Coding · Business · Learning · Marketing · Productivity · Analysis · Prompt Engineering · Career · Social Media · General**

New categories can be added directly through the command data. Category metadata and icons can be customized through `CATEGORY_META` in `script.js`.

---

## 🎨 Customization

### Theme

Theme colors are controlled through CSS custom properties in `style.css`:

```css
:root
[data-theme="dark"]
[data-theme="light"]
```

### Layout

The layout uses an 8px spacing system and can be customized through variables such as:

```css
--space-*
--sidebar-width
--content-max
```

---

## 📚 Data Source

The command collection is inspired by the article:

**100 Powerful AI Slash Commands & Prompt Shortcuts**

The commands are organized as structured JavaScript objects inside `commands.js`, making the dataset easy to modify, expand, or replace.

> **Note:** CommandKit is an independent project and is not affiliated with or officially endorsed by OpenAI or ChatGPT.

---

## 🌐 Live Demo

<p align="center">
  <a href="https://ashutoshpalhare.github.io/commandkit/">
    <img src="https://img.shields.io/badge/🚀%20Open%20CommandKit-Live%20Demo-2ea44f?style=for-the-badge" alt="Open CommandKit">
  </a>
</p>

---

## 🤝 Contributing

Contributions are welcome!

You can help improve CommandKit by:

* Adding useful commands
* Improving command descriptions
* Fixing bugs
* Improving accessibility
* Enhancing UI/UX
* Optimizing performance
* Improving documentation

### Contribution Workflow

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Test locally
5. Commit your changes
6. Open a Pull Request

---

## 👨‍💻 Developer

**Ashutosh Palhare**

Versatile Developer · Cybersecurity Enthusiast · Tech Lover

Built and maintained by **Ashutosh Palhare**.

<p>
  <a href="https://github.com/ashutoshpalhare">
    <img src="https://img.shields.io/badge/GitHub-ashutoshpalhare-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://ashutoshpalhare.github.io">
    <img src="https://img.shields.io/badge/Portfolio-ashutoshpalhare.github.io-4285F4?style=for-the-badge" alt="Portfolio">
  </a>
</p>

---

## 📄 License

This project is provided for **educational and personal use**.

The command collection is inspired by publicly available content. If you redistribute or substantially reuse the command data, please provide appropriate credit to the original source.

---

## ⭐ Support

If you find **CommandKit** useful, consider giving the repository a ⭐ on GitHub.

Your support helps the project reach more developers, creators, and AI enthusiasts.

---

<p align="center">
  <strong>CommandKit</strong> — Search. Copy. Create. 🚀
</p>

<p align="center">
  Built with ❤️ by <a href="https://github.com/ashutoshpalhare">Ashutosh Palhare</a>
</p>
