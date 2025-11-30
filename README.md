# Favour Akpasi - Portfolio V2

A simple, interactive portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This project showcases my work as a software engineer, featuring a dynamic and responsive design.

## ✨ Features

-   **Scroll Spy Navigation**: The sidebar navigation automatically updates to reflect the current section as you scroll.
-   **Dynamic Backgrounds**:
    -   **Twinkling Stars**: A custom Canvas-based component that renders a field of stars that twinkle randomly and react to mouse movement.
    -   **Gradient Orbs**: Smooth, CSS-based parallax gradient orbs in the sidebar that move in response to scrolling.
-   **Responsive Design**: Fully optimized layout for mobile, tablet, and desktop screens.
-   **Dark Mode**: Seamless dark and light mode support using `next-themes`.
-   **Performance Optimized**: Uses `requestAnimationFrame` and CSS transforms for buttery smooth animations (60fps).

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
-   **State Management**: React Context (`ActiveSectionContext`)
-   **Utilities**:
    -   `react-intersection-observer` for scroll detection.
    -   `clsx` and `tailwind-merge` for class name management.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

-   `app/`: Next.js App Router pages and layouts.
-   `components/`: Reusable UI components and sections.
    -   `layout/`: Header, Navbar, Sidebar.
    -   `sections/`: About, Experience, Projects, etc.
    -   `ui/`: Generic UI elements (Buttons, ScrollArea, etc.).
-   `context/`: React Context providers (e.g., ActiveSectionContext).
-   `hooks/`: Custom React hooks (e.g., useScrollSpy).
-   `lib/`: Constants and utility functions.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
