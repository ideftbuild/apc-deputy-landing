// src/components/ContactForm.tsx
import { APP_CONSTANTS } from "@/constants";

/**
 * Contact Form Component
 * A simple, user-friendly form for visitors to send inquiries.
 * It uses a `mailto:` link for submission, avoiding the need for a backend server.
 */
export default function ContactForm() {
  // The target email address for the mailto link.
  const {
    contact: { email },
  } = APP_CONSTANTS;
  const subject = "Message from the Campaign Website";

  // The form's `action` attribute will construct the mailto link.
  // Note: The body content from the textarea won't be pre-filled automatically
  // in all email clients due to security reasons, but the `mailto` action will
  // open the user's default email client with the recipient and subject pre-filled.
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have questions, ideas, or want to get involved? I would love to hear
          from you.
        </p>
        <form
          action={mailtoLink}
          method="post"
          encType="text/plain"
          className="rounded-lg space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-800 font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
              required
              aria-label="Full Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="your.email@example.com"
              required
              aria-label="Email Address"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-880 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your message, feedback, or question..."
              required
              aria-label="Message"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-3 px-10 rounded-full hover:bg-red-600 transition-colors duration-300 shadow-md text-lg"
              aria-label="Send Message"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
