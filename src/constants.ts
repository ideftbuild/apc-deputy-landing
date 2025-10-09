// src/constants.ts

/**
 * Global App Constants
 * Centralized configuration values (candidate name, social links, contact,
 * donate link) exposed on the window for use across CDN-loaded components.
 */
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