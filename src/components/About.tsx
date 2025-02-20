import Image from 'next/image'

export default function About() {
    return (
      <section id="about" className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Your bio and experience goes here. Talk about your journey, skills,
              and what drives you as a developer.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Python", "SQL", "Git"].map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-64">
            <Image
              src="/your-photo.jpg"
              alt="Evan Zhang"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>
    )
  }