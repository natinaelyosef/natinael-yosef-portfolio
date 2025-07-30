import Navigation from "../components/navigation"
import HeroSection from "../components/hero-section"
import SkillsCarousel from "../components/skills-carousel"
import ProjectsSection from "../components/projects-section"
import ContactForm from "../components/contact-form"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main>
        <HeroSection />
        <SkillsCarousel />
        <ProjectsSection />
        <ContactForm />
      </main>
      <footer className="bg-gray-50 dark:bg-gray-800 py-8 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2024 Natinael Yosef Adisu. All rights reserved.</p>
      </footer>
    </div>
  )
}
