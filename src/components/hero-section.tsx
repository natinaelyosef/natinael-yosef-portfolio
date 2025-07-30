"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react"
import { Button } from "./ui/button"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const titles = ["Frontend Developer", "Backend Developer", "Full Stack Developer"]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[loopNum % titles.length]

      if (isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1))
        setTypingSpeed(50)
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1))
        setTypingSpeed(150)
      }

      if (!isDeleting && displayedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, loopNum, typingSpeed, titles])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Horizontal Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Left Side - Profile Photo */}
            <div className="flex justify-center lg:justify-end items-center h-full">
              <div className="relative inline-block">
                <img
                  src="/photo1.JPG?height=450&width=450"
                  alt="Profile Photo"
                  className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 opacity-20"></div>
              </div>
            </div>

            {/* Right Side - Name, Title, Description, and Actions */}
            <div className="text-center lg:text-left space-y-8 flex flex-col justify-center h-full">
              {/* Name and Title */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Natinael Yosef Adisu
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-8 min-h-[3rem] flex items-center justify-center lg:justify-start">
                  <span className="inline-block">
                    {displayedText}
                    <span className="animate-pulse text-blue-600 dark:text-blue-400 ml-1">|</span>
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mb-8">
                Passionate full-stack developer with expertise in modern web technologies. I create beautiful,
                functional, and user-friendly applications that solve real-world problems. Always eager to learn new
                technologies and take on challenging projects.
              </p>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="group bg-transparent hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://github.com/natinaelyosef/natinael-yosef-portfolio', '_blank')}
                >
                  <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group bg-transparent hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://www.linkedin.com/in/natinael-yosef', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group bg-transparent hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Email
                </Button>
              </div>

              {/* CV Download Button */}
              <div className="flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    const link = document.createElement("a")
                    

                    link.href = "/cv.pdf"
                    link.download = "Natinael Yosef CV 0965767512(1).pdf"

                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                >
                  <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Centered at bottom */}
          <div className="flex justify-center mt-20">
            <button
              onClick={() => scrollToSection("skills")}
              className="animate-bounce text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors hover:scale-110"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
