// src/constants.ts

/**
 * Global App Constants
 * Centralized configuration values (candidate name, social links, contact,
 * donate link) for use across components.
 */
export const APP_CONSTANTS = {
  appName: "APC National Deputy Secretary General Landing",
  candidateName: {
    short: "Ibrahim K. Bangura",
    full: "Ibrahim Komkanda Bangura",
  },
  socialLinks: {
    facebook: "https://web.facebook.com/profile.php?id=61581340741528",
    tiktok: "https://www.tiktok.com/@komkanda1",
    twitter: "https://x.com/komkonda",
  },
  contact: {
    email: import.meta.env.VITE_CLIENT_EMAIL,
    phone: "https://chat.whatsapp.com/KcPZyEDMeAU06qGMLF4GC7?mode=wwc",
  },
  donateLink: "#donate",
};
