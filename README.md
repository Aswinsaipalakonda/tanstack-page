<div align="center">

<img src="./public/tanstack-circle-logo.png" alt="TanStack Logo" width="80" />

# ✨ TanStack Landing Page

A modern, responsive, and beautifully crafted landing page built with **TanStack Start**, **React 19**, **Tailwind CSS v4**, and **Shadcn UI**.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TanStack](https://img.shields.io/badge/TanStack-Start-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)](https://tanstack.com/start)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-Latest-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)

[🌐 Live Demo](https://github.com/Aswinsaipalakonda/tanstack-page) · [🐛 Report Bug](https://github.com/Aswinsaipalakonda/tanstack-page/issues) · [✨ Request Feature](https://github.com/Aswinsaipalakonda/tanstack-page/issues)

</div>

---

## 📸 Preview

> 🚧 _Add a screenshot or GIF of your landing page here!_
>
> ```
> ![Landing Page Preview](./public/preview.png)
> ```

---

## 🚀 Features

| Feature                     | Description                                                           |
| --------------------------- | --------------------------------------------------------------------- |
| 🎨 **Modern UI**            | Stunning hero section with animated text effects & motion transitions |
| 🌙 **Dark/Light Mode**      | Seamless theme toggling with persistent storage                       |
| 📱 **Fully Responsive**     | Looks perfect on mobile, tablet, and desktop                          |
| ⚡ **Blazing Fast**         | Powered by Vite 7 + TanStack Start for optimal performance            |
| 🧩 **Shadcn Components**    | Beautiful, accessible UI components out of the box                    |
| 🎭 **Framer Motion**        | Smooth, spring-based animations throughout                            |
| 📦 **Modular Architecture** | Clean, component-based structure for easy customization               |
| 🔍 **SEO Optimized**        | Meta tags, semantic HTML, and proper heading hierarchy                |

---

## 🏗️ Sections

- 🏠 **Hero Section** — Animated headline with CTA buttons & background effects
- 📝 **About / Content** — Company overview with testimonials
- ⭐ **Features** — Six feature cards with icons & color-coded borders
- 📅 **Timeline / Process** — Step-by-step workflow with versioned entries
- 🔗 **App Integrations** — Partner/integration showcase
- 💰 **Pricing** — Three-tier pricing cards (Free, Pro, Startup)
- 📧 **Call to Action** — Email subscription form
- 📬 **Contact** — Full contact form with company details
- 🔻 **Footer** — Navigation links & social media icons

---

## 🛠️ Tech Stack

```
📦 tanstack-page
├── ⚛️  React 19          — UI library
├── 🔀  TanStack Router   — File-based routing
├── 🚀  TanStack Start    — Full-stack framework
├── 🎨  Tailwind CSS v4   — Utility-first styling
├── 🧩  Shadcn UI         — Component library
├── 🎭  Motion (Framer)   — Animation library
├── 📐  TypeScript 5.7    — Type safety
├── ⚡  Vite 7            — Build tool
└── 🧪  Vitest            — Testing framework
```

---

## 📂 Project Structure

```
src/
├── assets/
│   ├── images/              # Static images (backgrounds, screenshots)
│   └── svg/                 # SVG components (logo)
├── components/
│   ├── ui/                  # Shadcn UI components (button, card, etc.)
│   ├── shadcn-studio/       # Block components (features, timeline, integrations)
│   ├── header.tsx           # Navigation bar with mobile menu
│   ├── hero-section.tsx     # Animated hero with CTA
│   ├── content.tsx          # About section
│   ├── pricing.tsx          # Pricing cards
│   ├── contact.tsx          # Contact form
│   ├── call-to-action.tsx   # CTA section
│   ├── footer.tsx           # Footer with social links
│   ├── theme-provider.tsx   # Dark/Light mode context
│   ├── mode-toggle.tsx      # Theme toggle button
│   └── logo.tsx             # Site logo
├── lib/
│   └── utils.ts             # Utility functions (cn)
├── routes/
│   ├── __root.tsx           # Root layout (meta, head, scripts)
│   └── index.tsx            # Home page (all sections assembled)
└── styles.css               # Global styles + Tailwind config
```

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **pnpm**

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Aswinsaipalakonda/tanstack-page.git

# 2️⃣ Navigate into the project
cd tanstack-page

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev
```

The app will be running at **[http://localhost:3000](http://localhost:3000)** 🎉

---

## 📜 Available Scripts

| Script         | Command           | Description                           |
| -------------- | ----------------- | ------------------------------------- |
| 🚀 **Dev**     | `npm run dev`     | Start development server on port 3000 |
| 🏗️ **Build**   | `npm run build`   | Create production build               |
| 👁️ **Preview** | `npm run preview` | Preview the production build          |
| 🧪 **Test**    | `npm run test`    | Run tests with Vitest                 |
| 🔍 **Lint**    | `npm run lint`    | Run ESLint checks                     |
| 💅 **Format**  | `npm run format`  | Check formatting with Prettier        |
| ✅ **Check**   | `npm run check`   | Fix formatting & linting issues       |

---

## 🧩 Adding Shadcn Components

This project supports multiple Shadcn registries:

```bash
# Default Shadcn UI components
npx shadcn@latest add button

# Shadcn Studio blocks
npx shadcn@latest add @ss-blocks/hero-section

# Tailark components
npx shadcn@latest add @tailark/header
```

---

## 🎨 Customization

### 🎨 Theme Colors

Edit the CSS variables in `src/styles.css` under `:root` (light) and `.dark` (dark):

```css
:root {
  --primary: oklch(0.21 0.006 285.885);
  --background: oklch(1 0 0);
  /* ... other colors */
}
```

### 🖋️ Meta & SEO

Edit the `head()` function in `src/routes/__root.tsx`:

```tsx
meta: [
  { title: 'Your Site Title' },
  { name: 'description', content: 'Your site description' },
],
links: [
  { rel: 'icon', href: '/favicon.svg' },
],
```

### 🧭 Navigation Links

Edit the `menuItems` array in `src/components/header.tsx`:

```tsx
const menuItems = [
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  // Add more...
]
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Made with ❤️ by [Aswinsai](https://github.com/Aswinsaipalakonda)**

⭐ Star this repo if you found it helpful!

</div>
