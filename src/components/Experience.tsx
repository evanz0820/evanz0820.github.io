import Image from 'next/image'

export default function Experience() {
  const bullets = [
    "Develop, test, and validate software for the Profile core banking platform upgrade serving Barclays, ensuring feature parity and data integrity across legacy and modernized system versions during full platform conversion",
    "Design and implement customer alert features end to end, building database retrieval logic, integrating backend triggers with front-end delivery systems, and verifying email notification workflows meet client specifications",
    "Translate complex client feature requests into clean technical designs for the Barclays development team, coordinating implementation details across engineering, QA, and operations to ensure production readiness",
    "Build automated data processing solutions using Python and Microsoft Power Apps for the Model Bank template framework, reducing prospective client onboarding time by 35%",
    "Collaborate with cross-functional teams using Agile methodologies including sprint planning, daily standups, and iterative delivery to meet milestone deadlines on enterprise software implementations",
  ]

  return (
    <section id="experience" className="py-10 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-600 reveal">
          Experience
        </h2>

        <div className="reveal">
          <div className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8 shadow-sm">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
              <a
                href="https://www.fisglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-white rounded-lg p-2 border border-gray-100 dark:border-gray-600 block hover:shadow-md transition-shadow"
              >
                <Image
                  src="/fis-logo.png"
                  alt="FIS Global"
                  fill
                  className="object-contain p-1"
                  sizes="80px"
                />
              </a>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Software Engineer
                </h3>
                <p className="text-base sm:text-lg font-medium text-blue-600">
                  FIS Global
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  Fidelity National Information Services
                </p>
              </div>
            </div>

            {/* Bullet points */}
            <ul className="space-y-3 sm:space-y-4">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
