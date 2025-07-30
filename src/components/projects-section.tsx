"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

const projects = [
  {
    title: "Car sale",
    description:
      "CarSale is a dynamic, responsive front-end web application designed to streamline the process of browsing and discovering car listings. It features an intuitive interface for showcasing a diverse inventory, enhancing the user experience for potential car buyers.",
    
      image: "/car.png?height=300&width=400",
    technologies: ["Html", "Css", "Javascript", "Express.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Shopsy",
    description: "Shopsy is a sleek, responsive front-end web application built with React, Tailwind CSS, and HTML. Designed to simplify the online shopping experience, it offers users an intuitive interface to explore a wide range of products seamlessly. With its modern design and optimized performance, Shopsy provides a smooth browsing experience for users seeking quality items at their fingertips.",
    image: "/shopsy.png?height=300&width=400",
    technologies: ["React", "Html", "Tailwind CSS","Javascript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Assosa University Corruption Complaint website",
    description:
       "Assosa University Corruption Complaint is a secure, responsive web application built with Laravel, PHP, HTML, CSS, and JavaScript. Designed to empower individuals to report corruption cases within Assosa University, the platform provides a straightforward interface for submitting complaints anonymously or with personal details. It promotes transparency and accountability, offering a reliable channel for whistleblowers and concerned community members.",

    image: "/corruption.png?height=300&width=400",
    technologies: ["Laravel php", "React", "Tailwind", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex space-x-3">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Github className="w-4 h-4 mr-2" />
                  Source
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
