// src/components/ContactForm.tsx
import { APP_CONSTANTS } from "@/constants";
import { useState } from "react";

const serverBaseURL = APP_CONSTANTS.server_base_url;
/**
 * Contact Form Component
 * A simple, user-friendly form for visitors to send inquiries.
 * It uses a `mailto:` link for submission, avoiding the need for a backend server.
 */
export default function ContactForm() {
  // The target email address for the mailto link.
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    recipientEmail: "",
    name: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`${serverBaseURL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();
      console.log("Success:", result);
      setStatus("success");
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 1000);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="px-4 max-w-3xl mt-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Get in Touch
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Have questions, ideas, or want to get involved? We would love to hear
          from you.
        </p>
        <form
          method="post"
          encType="text/plain"
          className="rounded-lg space-y-6"
          onSubmit={handleSubmit}
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
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              aria-label="Full Name"
            />
          </div>

          <div>
            <label
              htmlFor="recipientEmail"
              className="block text-gray-800 font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="recipientEmail"
              name="recipientEmail"
              className="w-full px-4 py-3 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.recipientEmail}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message, feedback, or question..."
              required
              aria-label="Message"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className={`${
                status === "error"
              } text-white bg-red-500 hover:bg-red-600 font-bold py-3 px-10 rounded-full transition-colors duration-300 shadow-md text-lg`}
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "Message Sent!"
                  : status === "error"
                    ? "Try Again"
                    : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
