import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Waves } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className={`p-2 rounded-lg ${
                isScrolled 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white/90 text-primary-600'
              }`}
            >
              <Waves className="h-8 w-8" />
            </motion.div>
            <div className="flex flex-col">
              <span className={`text-xl lg:text-2xl font-bold ${
                isScrolled ? 'text-secondary-900' : 'text-white'
              }`}>
                Tubo Drenosa
              </span>
              <span className={`text-sm font-medium ${
                isScrolled ? 'text-primary-600' : 'text-primary-200'
              }`}>
                Geossintéticos
              </span>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-secondary-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-200'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => scrollToSection('#contact')}
              className="btn-primary"
            >
              Orçamento
            </motion.button>
          </nav>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-secondary-900 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg"
          >
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-secondary-700 hover:text-primary-600 font-medium text-left py-2 transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollToSection('#contact')}
                className="btn-primary text-center mt-4"
              >
                Orçamento
              </motion.button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}