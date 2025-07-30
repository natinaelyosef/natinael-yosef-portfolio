"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

const skills = [
  {
    name: "Python",
    description: "Versatile programming language for web development, data science, and automation",
    icon: "🐍",
    color: "from-yellow-400 to-blue-500",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
    icon: "🎨",
    color: "from-cyan-400 to-blue-600",
  },
  {
    name: "Laravel (PHP)",
    description: "Elegant PHP framework for web artisans",
    icon: "🔧",
    color: "from-red-400 to-orange-500",
  },
  {
    name: "FastAPI",
    description: "Modern, fast web framework for building APIs with Python",
    icon: "⚡",
    color: "from-green-400 to-teal-500",
  },
  {
    name: "PostgreSQL",
    description: "Advanced open-source relational database",
    icon: "🐘",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Django",
    description: "High-level Python web framework for rapid development",
    icon: "🎯",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "MERN Stack",
    description: "MongoDB, Express.js, React, Node.js - Full-stack JavaScript",
    icon: "⚛️",
    color: "from-purple-400 to-pink-500",
  },
]

export default function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

    const element = document.getElementById("skills")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and frameworks I work with to bring ideas to life
          </p>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {skills.map((skill, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="p-8 sm:p-12 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${skill.color} mb-6 text-4xl shadow-lg`}
                    >
                      {skill.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">{skill.name}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {skills.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 dark:bg-blue-400 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
