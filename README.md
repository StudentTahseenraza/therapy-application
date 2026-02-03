# 🧠 Dr. Maya Reynolds, PsyD – Therapy Website

A **professional, responsive therapist website** built with **Next.js 14** and **Tailwind CSS**, featuring a complete redesign from the original lilac template to match **Dr. Maya Reynolds’ professional therapeutic profile**.

This project emphasizes **calming UI, accessibility, performance, and trust-building design**, tailored for mental health professionals.

---

## 🔗 Preview Image

![Therapy Website Preview](https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&auto=format&fit=crop)

---

## 🌟 Features

### 🎨 Professional Design
- **Custom Color Palette**
  - Deep Teal: `#2A5C6B`
  - Warm Gold Accent: `#F5A623`
- **Clean Typography**
  - Headings: **Inter**
  - Body Text: **Source Sans Pro**
- **Calming UI**
  - Designed to reduce anxiety and build trust
- **Mirror-frame image styling** on Blog hero
- **Circular image crops** throughout the design

---

### 📱 Fully Responsive
- Mobile-first design
- Tablet and desktop optimizations
- Touch-friendly navigation
- Adaptive layouts for all screen sizes

---

### ✨ Interactive Elements
- Smooth scroll animations using **Framer Motion**
- FAQ accordion with expand/collapse behavior
- Hover effects on cards and buttons
- Scroll progress indicator
- Weather widget simulation *(as per screenshots)*

---

## 🏠 Complete Page Structure

### Homepage (8 Sections)
1. **Hero Section** – *“Find Calm Amidst Life’s Demands”*
2. **Intro Section** – Therapeutic philosophy and approach
3. **Specialties** – Anxiety, Trauma, Burnout
4. **Support Section** – *“You don’t have to navigate alone”*
5. **About Section** – Dr. Maya Reynolds’ introduction
6. **Our Office** – New section showcasing therapy space
7. **FAQ** – Accordion-based common questions
8. **Professional Background**
9. **Final CTA** – Get started today

---

### 📝 Blog
- Mirror-frame hero with left-side image
- Blog grid with 4 sample posts
- Category badges and read-time indicators
- Email subscription section
- Individual blog post modal view

---

### 📞 Contact
- Contact information and working hours
- HIPAA-compliant design
- Appointment booking placeholder
- Office location with embedded map
- Social media links
- Privacy and compliance notices

---

## 🚀 Performance Optimized
- **Next.js 14 App Router**
- Optimized images using `next/image`
- Lazy loading for improved performance
- SEO-friendly structure and copy
- Fast page loads

---

🛠️ Tools & Technologies
⚙️ Frontend Framework & Language
<p align="center"> <img src="https://img.shields.io/badge/Next.js-14.2.0-000000?style=for-the-badge&logo=next.js&logoColor=white" /> <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" /> </p>
🎨 Styling & UI
<p align="center"> <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" /> <img src="https://img.shields.io/badge/CSS3-Animations-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> </p>
✨ Animations
<p align="center"> <img src="https://img.shields.io/badge/Framer_Motion-12.0-0055FF?style=for-the-badge&logo=framer&logoColor=white" /> </p> <p align="center"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg" width="48" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="48" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="48" /> </p>
🧩 Icons & Assets
<p align="center"> <img src="https://img.shields.io/badge/Lucide_Icons-0.563.0-FF6B35?style=for-the-badge&logo=lucide&logoColor=white" /> <img src="https://img.shields.io/badge/React_Icons-5.5.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" /> </p>
🧪 Development Tools
<p align="center"> <img src="https://img.shields.io/badge/ESLint-9.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" /> <img src="https://img.shields.io/badge/Prettier-3.0-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" /> </p>
🚀 Platform & Performance
<p align="center"> <img src="https://img.shields.io/badge/Next.js_App_Router-Optimized-black?style=for-the-badge&logo=next.js" /> <img src="https://img.shields.io/badge/SEO-Friendly-Yes-success?style=for-the-badge" /> <img src="https://img.shields.io/badge/Lazy_Loading-Enabled-blue?style=for-the-badge" /> </p>

---

## 🚀 Getting Started

### Prerequisites
- Node.js **18+**
- npm or yarn

---

### Installation

    git clone <repository-url>
    cd therapist-website
    npm install

Run Development Server

    npm run dev

Open your browser at:

http://localhost:3000

Build for Production

    npm run build
    npm start


🔧 Troubleshooting
Tailwind Classes Not Working

    rm -rf .next node_modules/.cache
    npm run dev

🎯 Key Implementation Details

Design System
------------
Centralized color variables

Responsive spacing system

Animation presets

Accessibility-focused contrast ratios


Content Management
-------------

All content stored in lib/constants.ts

Therapist details sourced from provided PDF

SEO-optimized copy for Santa Monica, CA

Professional therapy terminology


Animations
----------

Scroll-triggered fade-in animations

Hover effects on interactive elements

Smooth page transitions

Micro-interactions & loading states


Compliance Features
-------------

HIPAA compliance notice

Privacy policy links

Professional disclaimer

Secure contact UX

🎨 Customization Guide
----------------

Update Therapist Information

Edit lib/constants.ts to update:

Therapist name & credentials

Bio and professional background

Contact details and office hours

Specialties and FAQ content


📱 Responsive Breakpoints
--------

| Device  | Width            |
| ------- | ---------------- |
| Mobile  | `< 640px`        |
| Tablet  | `640px – 1024px` |
| Desktop | `> 1024px`       |



Build Errors
-------------
Verify TypeScript configuration

Check missing dependencies

Image Optimization

Use next/image

Configure external domains in next.config.js

📄 License
-------
This project is for educational and portfolio purposes only.
The design is based on an existing template with significant original modifications.

🙏 Credits
-------
Original Template: Lilac Template by Go Bloom Creative

Therapist Profile: Dr. Maya Reynolds, PsyD (Fictional)

Design & Development: Custom professional redesign

Icons: Lucide React, React Icons

Animations: Framer Motion
