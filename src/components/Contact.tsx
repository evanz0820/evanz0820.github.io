export default function Contact() {
    return (
      <section id="contact" className="py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-black dark:text-white">Get in Touch</h2>
        <div className="max-w-xl">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
            I&apos;m always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
          <div className="space-y-3 sm:space-y-4">
            <a
              href="mailto:zevan2003@gmail.com"
              className="flex items-center text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 py-2 transition-colors"
            >
              <span className="mr-2 sm:mr-3 text-lg">✉️</span> zevan2003@gmail.com
            </a>
            <a
              href="https://github.com/evanz0820"
              className="flex items-center text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 py-2 transition-colors"
            >
              <span className="mr-2 sm:mr-3 text-lg">📦</span> GitHub
            </a>
            <a
              href="https://linkedin.com/in/evanz0820"
              className="flex items-center text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 py-2 transition-colors"
            >
              <span className="mr-2 sm:mr-3 text-lg">💼</span> LinkedIn
            </a>
          </div>
        </div>
      </section>
    )
  }
  