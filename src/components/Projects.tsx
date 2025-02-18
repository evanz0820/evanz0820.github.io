export default function Projects() {
    const projects = [
      {
        title: "Project 1",
        description: "A full-stack web application for managing user interactions and data visualization.",
        tech: ["Next.js", "Tailwind", "TypeScript"],
        image: "/project1.png",
        link: "https://project1.com"
      },
      {
        title: "Project 2",
        description: "Real-time chat application with end-to-end encryption and group messaging features.",
        tech: ["React", "Node.js", "Socket.io"],
        image: "/project2.png",
        link: "https://project2.com"
      },
      {
        title: "Project 3",
        description: "E-commerce platform with integrated payment processing and inventory management.",
        tech: ["Next.js", "Prisma", "Stripe"],
        image: "/project3.png",
        link: "https://project3.com"
      }
    ]
  
    return (
      <section id="projects" className="py-16 container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl bg-white dark:bg-gray-800 
                       transition-all duration-300 ease-in-out
                       hover:shadow-2xl hover:-translate-y-2
                       border border-gray-200 dark:border-gray-700"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 
                            opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
              
              {/* View Project text that appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white 
                            transform translate-y-full transition-transform duration-300 
                            group-hover:translate-y-0 z-20">
                <span className="inline-flex items-center text-sm">
                  View Project 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
  
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 
                           group-hover:scale-110"
                />
              </div>
  
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white 
                             group-hover:text-blue-600 dark:group-hover:text-blue-400
                             transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm rounded-full
                               bg-gray-100 text-gray-800 
                               dark:bg-gray-700 dark:text-gray-200
                               transition-transform duration-300
                               group-hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    )
  }