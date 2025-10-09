// src/components/SocialMedia.tsx

/**
 * Social Media Component
 * Displays a set of beautifully styled icons linking to the candidate's social media profiles.
 * Uses placeholder links as specified.
 */


// Data structure for social media links to keep the component clean.
const socialLinks = [
  {
    name: 'Facebook',
    href: APP_CONSTANTS.socialLinks.facebook,
    ariaLabel: 'Follow on Facebook',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: APP_CONSTANTS.socialLinks.twitter,
    ariaLabel: 'Follow on Twitter',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: APP_CONSTANTS.socialLinks.tiktok,
    ariaLabel: 'Follow on TikTok',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-1.05-6.46-2.95-1.63-1.9-2.42-4.36-2.4-6.81 0-2.05 1.04-4.01 2.7-5.18 1.61-1.14 3.53-1.61 5.43-1.59.19.01.38.02.57.03v4.49c-2.19-.11-4.19.64-5.32 2.26-1.14 1.63-1.53 3.65-1.16 5.56.36 1.88 1.73 3.43 3.47 4.17 2.11.9 4.49.67 6.27-.61.85-.62 1.5-1.43 1.88-2.38.38-.95.53-2.02.49-3.08v-8.15c.42.22.81.48 1.22.72Z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: APP_CONSTANTS.contact.phone, // Example WhatsApp link structure
    ariaLabel: 'Connect on WhatsApp',
    icon: (
      // <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      //   <path d="M19.382 14.887c-.246-.14-1.428-.707-1.652-.785-.224-.078-.387-.126-.55.126-.163.251-.624.785-.765.947-.14.163-.282.176-.528.05-.246-.126-1.033-.38-1.968-1.214-.728-.65-1.213-1.463-1.354-1.714-.14-.251-.013-.387.113-.51.113-.113.252-.294.378-.443.126-.149.164-.251.252-.413.088-.163.038-.3.0-.428-.038-.126-.55-.138-.765-.812-.203-.65-.438-1.344-.438-1.344s-.325-.337-.65-.337h-.576c-.225 0-.525.075-.75.387-.225.312-.875 1.012-.875 2.462s.9 2.862 1.025 3.062c.125.213 1.725 2.762 4.213 3.712.587.225 1.05.362 1.412.463.525.137.988.112 1.35-.05.4-.175 1.238-.512 1.413-1 .175-.487.175-.912.125-1s-.225-.15-.475-.287zM12.002 2.002a9.99 9.99 0 00-7.068 17.07l-2.064 2.065 2.125-2.012a9.99 9.99 0 107.007-17.123z" />
      // </svg>
      <svg className ="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <g fill="none" fill-rule="evenodd">
          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
          <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.7.7 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.71.71 0 0 0-.973.158l-.6.915a.23.23 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055s-.798-.992-1.007-1.373a.23.23 0 0 1 .067-.291l.924-.686a.71.71 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.7.7 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636"/>
        </g>
      </svg>
    ),
  },
];

window.SocialMedia = function SocialMedia() {
  return (
    <section id="social-media" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Follow My Journey & Connect With Me
        </h2>
        <div className="flex justify-center items-center space-x-4 md:space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="text-white bg-red-600 p-4 rounded-full hover:bg-red-700 hover:scale-110 transform transition-all duration-300 shadow-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
