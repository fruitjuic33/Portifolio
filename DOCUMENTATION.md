

### [v1.4.0] - 2026-05-22
- **Optimized:** Full-site responsive audit for mobile, tablets, and desktop.
- **Improved:** Used `svh` units in Hero for better mobile browser support.
- **Improved:** Enhanced grid systems in Skills and Projects for smoother scaling.
- **Improved:** Redesigned mobile navigation with better touch targets and social links.
- **Improved:** Consistent typography and spacing (20/32 padding) across all sections.
- **Improved:** Polished UI components with larger rounded corners and better hover states.

### [v1.3.0] - 2026-05-19
- **Added:** Success state simulation for Contact form with `framer-motion` animations.
- **Added:** Competitive Programming category in `Skills.tsx`.
- **Improved:** Animated mobile menu with entry/exit transitions.
- **Improved:** Page title updated for better SEO/UX.
- **Fixed:** Linting error in `ThemeContext.tsx` related to `react-refresh`.
- **Fixed:** Vite configuration updated with `base` path for GitHub Pages.

### [v1.2.0] - 2026-05-17
- **Changed:** Default theme set to Light Mode.

### [v1.1.0] - 2026-05-14
- **Added:** Dynamic Theme Switching (Light/Dark Mode).
- **Added:** `ThemeContext.tsx` for global state management.
- **Added:** Persistence for theme preference using `localStorage`.
- **Improved:** `Navbar.tsx` now includes a theme toggle button with Sun/Moon icons.

### [v1.0.0] - 2026-05-13
- **Initial Release:** Complete portfolio with Hero, About, Skills, Experience, Projects, and Contact sections.
- **Core:** Built with React 19, TypeScript, and Tailwind CSS v4.

---
Architectural Overview
The portfolio is designed as a single-page application (SPA) using a component-based architecture. It prioritizes performance and developer experience by utilizing Vite and TypeScript.

Component breakdown

Theme Management (New in v1.1)
- **`ThemeContext.tsx`**: A React Context provider that manages the `'light' | 'dark'` state. It persists the choice in the browser's `localStorage` and applies the corresponding CSS class to the document root.

Layout & Navigation
- **`Navbar.tsx`**: Updated in v1.1 to include the `useTheme` hook. It renders a Sun icon in dark mode and a Moon icon in light mode.
- **`Footer.tsx`**: Clean, minimalist footer with dynamic year calculation and social links.

Content Sections
- **`Hero.tsx`**: Uses `framer-motion` for entry animations and background decorative pulses.
- **`About.tsx`**: Split-view layout for personal summary and a vertical timeline for education.
- **`Skills.tsx`**: Categorized grid of skills with hover-effect badges.
- **`Experience.tsx`**: Vertical timeline for professional and volunteer roles.
- **`Projects.tsx`**: Card-based project showcase with integrated code and demo links.
- **`Contact.tsx`**: Multi-channel contact layout including a stylized (non-functional) contact form.

Styling & Theme (Tailwind v4)
The project uses the new **Tailwind CSS v4** `@theme` engine.
- Configuration is handled directly in `src/index.css` using CSS variables.
- Supports Dark Mode natively via the `.dark` class on the `<html>` element.
- Colors follow the `Zinc` and `Slate` palettes for a modern aesthetic.

Maintenance Guide

### Updating Brand Icons
If you need to add more brand icons (like Instagram or Twitter), it is recommended to add them as SVGs in `src/components/Icons.tsx` to maintain the sharp aesthetic and avoid extra dependencies.

Adding New Sections
1. Create a new component in `src/components/`.
2. Import and add it to `src/App.tsx`.
3. Add a link to the new section in the `navLinks` array inside `src/components/Navbar.tsx`.

Build Troubleshooting
If the build fails due to CSS errors:
- Ensure `@tailwindcss/postcss` is installed.
- Verify `postcss.config.js` is using the correct plugin name.
- Check that all utility classes in `index.css` are recognized by Tailwind v4.

