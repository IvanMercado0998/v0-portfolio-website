# NAVICOM CloudSystems Portfolio Website

---

## Overview

This repository contains the source code for the NAVICOM CloudSystems Portfolio Website. It is tightly integrated with NAVICOM CloudSystems and automatically synchronized with deployments. Any updates made through the NAVICOM platform are reflected in this repository and deployed via Vercel.

---

## Live Deployment

Production URL:  
https://vercel.com/ivanbmercado09989174383-1568s-projects/navicom-portfolio-website

---

## System Architecture

This project is built using a modern full-stack frontend architecture:

- Next.js (Application Framework)
- React (UI Library)
- TypeScript (Typed JavaScript)
- Tailwind CSS (Styling Framework)
- shadcn/ui + Radix UI (Component System)
- Vercel (Deployment Platform)

---

## System Requirements

Ensure the following software is installed on the development machine:

- Node.js (version 20.x or higher recommended)
- npm (bundled with Node.js)
- Git (for version control)
- Visual Studio Code or equivalent IDE

Verify installations:

```bash
node -v
npm -v
git --version
Repository Setup

Clone the repository:

git clone git@github.com:IvanMercado0998/v0-portfolio-website.git
cd v0-portfolio-website

Install dependencies:

npm install

If dependency conflicts occur:

npm install --legacy-peer-deps
Development Server

Start the local development environment:

npm run dev

Access the application:

http://localhost:3000
Build and Production

Build the application:

npm run build

Run production server:

npm start
Project Structure

Typical structure:

/app                Application routes and pages
/components         Reusable UI components
/components/ui      shadcn UI components
/lib                Utility functions
/hooks              Custom React hooks
/public             Static assets
/styles             Global styles
Dependency Overview
Core Dependencies
next
react
react-dom
typescript
UI and Styling
tailwindcss
tailwind-merge
tailwindcss-animate
class-variance-authority
clsx
Component Libraries
@radix-ui/*
shadcn/ui
Forms and Validation
react-hook-form
zod
@hookform/resolvers
Animations and UX
framer-motion
embla-carousel-react
sonner
Data Visualization
recharts
Utilities
date-fns
Development Dependencies
typescript
postcss
autoprefixer
@tailwindcss/postcss
@types/node
@types/react
@types/react-dom
Tailwind CSS Configuration

Ensure the global stylesheet includes:

@tailwind base;
@tailwind components;
@tailwind utilities;

To regenerate Tailwind configuration:

npx tailwindcss init -p
shadcn/ui Configuration

Initialize UI components if needed:

npx shadcn-ui@latest init

Add components:

npx shadcn-ui@latest add button
Recommended Development Tools

Visual Studio Code extensions:

ESLint
Prettier
Tailwind CSS IntelliSense
TypeScript support extensions
PostCSS Language Support
Deployment

The project is configured for automatic deployment via Vercel.

Manual deployment:

npm install -g vercel
vercel
Continuous Integration Flow
Code changes are made locally or via NAVICOM CloudSystems
Changes are pushed to GitHub
Vercel automatically builds and deploys the latest version
Production environment is updated in real time
Troubleshooting
Dependency Issues
npm install --legacy-peer-deps
Port Conflicts
npm run dev -- -p 3001
Build Failures
npm run build
License

This project is proprietary and owned by NAVICOM CloudSystems. Unauthorized use, reproduction, or distribution is prohibited.

Maintained By

NAVICOM CloudSystems Engineering Division