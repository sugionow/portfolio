# Sugiono Portfolio

Portfolio website for Sugiono, a backend web developer focused on enterprise systems, REST APIs, and operational web applications.

Live site: [https://sugiono.my.id](https://sugiono.my.id)

## Overview

This project is a personal portfolio built with Next.js, React, and a custom 3D presentation layer. It highlights Sugiono's background, selected work, tech stack, and contact information in a more interactive format.

The site presents:

- developer profile and role highlights
- interactive landing section with mobile-specific profile card behavior
- About Me, experience, and project showcase
- tech stack section with responsive card layout
- direct links to GitHub, LinkedIn, email, and resume

## Profile

- Name: Sugiono
- Role: Backend Web Developer
- Secondary focus: Laravel Developer
- Website: [https://sugiono.my.id](https://sugiono.my.id)
- GitHub: [https://github.com/sugionow](https://github.com/sugionow)
- LinkedIn: [https://linkedin.com/in/sugiono-gio-b92b2617b](https://linkedin.com/in/sugiono-gio-b92b2617b)
- Email: [soegiono1998@gmail.com](mailto:soegiono1998@gmail.com)

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- GSAP
- Lenis
- Three.js
- Framer Motion

## Featured Work

- GOC Career Portal
  Recruitment platform for vacancies, candidate pipelines, and hiring workflows.
- e-Retur Distributor System
  Return workflow platform for distributor submission, tracking, and history.
- e-Claim Promo Portal
  Claim submission system with validation and document-based workflow.
- IT Asset Management System
  Internal system for tracking and reporting company assets.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Commands

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Lint the project:

```bash
npm run lint
```

## Project Structure

```text
app/                    Next.js app router entry
components/             top-level client shell
public/                 static assets, resume, images, video, 3D assets
sugiono-3d/             portfolio sections, styles, animation, 3D logic
```

## Deployment

This portfolio is intended to be deployed to Sugiono's public domain:

- Production URL: [https://sugiono.my.id](https://sugiono.my.id)

If you deploy using a platform such as Vercel, make sure the production branch points to `main` and the custom domain is connected to `sugiono.my.id`.
