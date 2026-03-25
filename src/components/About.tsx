import Image from 'next/image'

export default function About() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 70 },
    { name: "Git", level: 85 }
  ]

  return (
    <section id="about" className="py-10 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-600 reveal">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="reveal order-2 md:order-1">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              I&apos;m a Software Engineer at FIS Global, where I work on the Profile core banking platform serving clients like Barclays. My journey into tech started with a curiosity for how software can solve real-world problems, which led me to study Computer Science at Georgia State University.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              Day to day, I build and validate features across the full stack — from database logic and backend triggers to front-end delivery systems. I also develop automation tools with Python and Power Apps that have cut client onboarding time by 35%.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
            Outside of work, I'm usually on the tennis court training for my next tournament, grinding competitive Valorant, or tinkering away on side projects.
            </p>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">Technical Skills</h3>
              <div className="space-y-3 sm:space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                      <div
                        className="bg-blue-600 h-1.5 sm:h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-56 sm:h-64 md:h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] reveal order-1 md:order-2 overflow-hidden">
            <div className="absolute inset-2 sm:inset-0 border-2 border-blue-600 rounded-lg transform translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 z-0 dark:border-opacity-50"></div>
            <div className="absolute inset-2 sm:inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-lg transform -translate-x-2 -translate-y-2 sm:-translate-x-4 sm:-translate-y-4 z-0"></div>
            <div className="relative h-full w-full z-10 px-2 sm:px-0">
              <Image
                src="/your-photo.png"
                alt="Evan Zhang"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}