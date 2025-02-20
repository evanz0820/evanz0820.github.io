export default function Contact() {
    return (
      <section id="contact" className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">Get in Touch</h2>
        <div className="max-w-xl">
          <p className="text-gray-600 mb-6">
            I&apos;m always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
          <div className="space-y-4">
            <a 
              href="mailto:zevan2003@gmail.com"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <span className="mr-2">✉️</span> zevan2003@gmail.com
            </a>
            <a 
              href="https://github.com/evanz0820"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <span className="mr-2">📦</span> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/evanz0820"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <span className="mr-2">💼</span> LinkedIn
            </a>
          </div>
        </div>
      </section>
    )
  }
  