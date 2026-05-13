# 🚀 Professional Portfolio: Munu Pangani

A modern, high-performance personal portfolio built with React 19, TypeScript, and Tailwind CSS v4. This project is designed to be sleek, responsive, and easy to maintain.

## 🛠 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI sections (Hero, About, Projects, etc.)
│   ├── Icons.tsx        # Custom SVG icons for brands (GitHub, LinkedIn)
│   └── ...
├── data/
│   └── profile.ts       # CENTRAL DATA FILE (Update your info here)
├── App.tsx              # Main application entry and layout
├── index.css            # Tailwind v4 configuration and global styles
└── main.tsx             # React DOM rendering
```

## ⚙️ How to Customize

All personal information is centralized in **one file**. You do not need to touch the component code to update your details.

1. Open `src/data/profile.ts`.
2. Update the `profile` object with your:
   - Name & Title
   - Contact Info (Email, Phone, Socials)
   - Education & Experience
   - Skills & Projects

## 🚀 Getting Started

### Development
To run the project locally for previewing:
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
To generate an optimized build:
```bash
npm run build
```

## 🌐 Deployment (GitHub Pages)

This project is pre-configured for deployment to GitHub Pages.

1. Create a repository on GitHub named `Portifolio`.
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/fruitjuic33/Portifolio.git
   git push -u origin main
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```
   Your site will be live at `https://fruitjuic33.github.io/Portifolio/`.


