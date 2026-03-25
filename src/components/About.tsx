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
              I&apos;m a Full Stack Developer with a passion for creating elegant, efficient, and user-friendly web applications. My journey began with a fascination for how technology can solve real-world problems, which led me to pursue a degree in Computer Science at Georgia State University.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              With experience in both front-end and back-end development, I enjoy working across the entire stack to deliver cohesive solutions. I&apos;m particularly enthusiastic about React and the Next.js ecosystem, and I continuously expand my knowledge in emerging technologies.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
              When I&apos;m not coding, you might find me exploring new hiking trails, experimenting with photography, or contributing to open-source projects.
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