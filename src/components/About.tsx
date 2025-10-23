// src/components/About.tsx
import { APP_CONSTANTS } from "@/constants";

/**
 * About Component
 * Provides a detailed overview of the candidate's background, including their biography,
 * education, legal expertise, leadership roles, and key achievements.
 */
export default function About() {
  const {
    socialLinks: { facebook },
  } = APP_CONSTANTS;

  return (
    <section id="about" className="py-12 md:py-24 px-6 md:px-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center place-items-center">
          <img
            src="img/about_img.webp"
            alt="About"
            className="w-30 h-30 sm:w-32 sm:h-32 md:w-80 md:h-80 rounded-full object-cover mx-auto"
          />
          <div>
            <p className="text-gray-700 leading-relaxed">
              I’m Ibrahim Komkanda Bangura, a Barrister and Solicitor of the
              High Court of Sierra Leone, Lecturer at the University of Makeni,
              and a passionate Youth Ambassador. Born in Mahera Town, Lungi, my
              journey has always been driven by service, discipline, and a
              desire to empower others. With First Class Honours in Political
              Science and Law, I bring both academic excellence and practical
              experience to everything I do. I currently lead the Makeni Branch
              of Fornah-Sesay Cummings & Co, lecture at UniMak, and work closely
              with young people to promote civic education and leadership. I
              believe in integrity, innovation, and inclusiveness—values that
              guide my work in law, education, and community development.
            </p>
            <div className="mx-auto text-center mt-6 mb-6">
              <a
                href={facebook}
                className="w-max border-b mt-4 hover:text-gray-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
