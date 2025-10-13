# APC Deputy Landing Page

A modern, responsive political campaign landing page built with vanilla React, Tailwind CSS, and CDN-loaded dependencies. This single-page application showcases the candidacy of Ibrahim Komkanda Bangura for National Deputy Secretary General of the All People's Congress (APC) in Sierra Leone.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Dynamic navigation, contact forms, and social media integration
- **Performance Metrics**: Leadership achievements with animated progress indicators
- **Global Configuration**: Centralized constants for easy customization
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

## 🏗️ Architecture

This project uses a **vanilla React architecture** with CDN-loaded dependencies, making it deployment-friendly without build tools:

### Technology Stack

- **React 18** (via CDN)
- **ReactDOM 18** (via CDN)
- **Babel Standalone** (for JSX transformation)
- **Tailwind CSS** (via CDN)
- **Poppins Font** (Google Fonts)

### Project Structure

```bash
apc-deputy-landing/
├── index.html                 # Main HTML entry point
├── vercel.json               # Vercel deployment configuration
├── public/
│   └── images/
│       └── hero_background_image.jpeg
└── src/
    ├── App.tsx               # Main application component
    ├── constants.ts          # Global configuration constants
    ├── index.css            # Custom styles and hero background
    └── components/          # React components
        ├── About.tsx        # Candidate biography and story
        ├── Attributes.tsx   # Key candidate attributes
        ├── ContactForm.tsx  # Contact form component
        ├── CoreValues.tsx   # Political values and principles
        ├── Donation.tsx     # Campaign donation section
        ├── Footer.tsx       # Site footer with candidate info
        ├── Header.tsx       # Top slogan bar
        ├── Hero.tsx         # Main hero section
        ├── LeadershipAchievements.tsx # Metrics and achievements
        ├── Navbar.tsx       # Navigation bar
        ├── SocialMedia.tsx  # Social media links
        └── VisionMission.tsx # Vision and mission statements
```

## 🎯 Components Overview

### Core Sections

- **Hero**: Compelling introduction with call-to-action
- **About**: Personal story, background, and achievements
- **Leadership Achievements**: Interactive metrics and progress indicators
- **Vision & Mission**: Political platform and goals
- **Core Values**: Fundamental principles and beliefs
- **Attributes**: Key leadership qualities
- **Donation**: Campaign funding section
- **Social Media**: Social platform integration
- **Contact Form**: Visitor engagement and inquiries
- **Footer**: Final information and copyright

### Navigation

- **Header**: Top slogan bar ("ALM na we move!")
- **Navbar**: Responsive navigation with mobile menu
- **Smooth Scrolling**: Enhanced user experience

## ⚙️ Configuration

All configurable values are centralized in `src/constants.ts`:

```typescript
window.APP_CONSTANTS = {
  appName: "APC Deputy Landing",
  candidateName: {
    short: "Ibrahim K. Bangura",
    full: "Ibrahim Komkanda Bangura",
  },
  socialLinks: {
    facebook: "#facebook",
    tiktok: "#tiktok",
    twitter: "#twitter",
  },
  contact: {
    email: "info@example.com",
    phone: "[WhatsApp Link]"
  },
  donateLink: "#donate"
};
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A local web server (for development)

### Local Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd apc-deputy-landing
   ```

2. **Start a local server**

   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   Navigate to `http://localhost:8000`

### Customization

1. **Update Candidate Information**
   - Edit `src/constants.ts` to change names, contact info, and social links
   - Replace `public/images/hero_background_image.jpeg` with your preferred hero image

2. **Modify Content**
   - Update component content in `src/components/`
   - Adjust styling using Tailwind CSS classes or `src/index.css`

3. **Add/Remove Sections**
   - Create new components in `src/components/`
   - Add script tags to `index.html` in the correct order
   - Import components in `src/App.tsx`

## 🎨 Styling & Design

- **Framework**: Tailwind CSS for utility-first styling
- **Typography**: Poppins font family (400, 600, 700 weights)
- **Color Scheme**:
  - Primary: Red (#DC2626)
  - Secondary: Gray tones
  - Background: Light gray (#F9FAFB)
- **Responsive Breakpoints**: Mobile-first with md: and lg: prefixes

## 📞 Contact

For questions about this project or the campaign:

- Email: <info@example.com>
- Website: [Campaign Website]

---

Built with ❤️ for the future of Sierra Leone
