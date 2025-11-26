export default function Projects() {
    const projects = [
      {
        title: "Credit Card Fraud Detection",
        description: "Full-stack ML application using PyTorch neural networks to detect fraudulent transactions with an Angular dashboard for real-time visualization and model metrics.",
        tech: ["Angular", "PyTorch", "Flask", "Chart.js"],
        link: "https://fraud-detection-model-roan.vercel.app/"
      },
      {
        title: "Smart Workforce Scheduler",
        description: "A full-stack web application for managing user interactions and data visualization.",
        tech: ["React", "Tailwind", "TypeScript"],
        link: "https://smart-workforce-scheduler.vercel.app/"
      },
      {
        title: "Hospital Management System",
        description: "A full-stack web application for managing user interactions and data visualization.",
        tech: ["Next.js", "Tailwind", "TypeScript"],
        link: "https://github.com/Ipelcaztreortega/fsh"
      },
      {
        title: "University Course Scheduler",
        description: "Real-time chat application with end-to-end encryption and group messaging features.",
        tech: ["React", "Node.js", "Socket.io"],
        link: "https://github.com/GSU-Scheduler/website2"
      },
      {
        title: "Rankify",
        description: "Review website dedicated for students at Georgia State University for businesses and restaurants around the downtown campus.",
        tech: ["Vue.js", "Tailwind", "Firebase", "Google Maps API"],
        link: "https://rankify-xi.vercel.app/"
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
  
              {/* Project preview iframe */}
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <iframe 
                  src={project.link}
                  title={project.title}
                  className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
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