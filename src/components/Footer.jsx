import React from 'react'
import { motion } from 'framer-motion'
import { Waves, Mail, Phone, MapPin, ArrowUp, Linkedin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Serviços',
      links: [
        { name: 'Geotêxteis para Drenagem', href: '#services' },
        { name: 'Sistemas de Proteção', href: '#services' },
        { name: 'Consultoria Técnica', href: '#services' },
        { name: 'Instalação Especializada', href: '#services' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nós', href: '#about' },
        { name: 'Nossos Projetos', href: '#services' },
        { name: 'Qualidade', href: '#about' },
        { name: 'Sustentabilidade', href: '#about' }
      ]
    },
    {
      title: 'Suporte',
      links: [
        { name: 'Contato', href: '#contact' },
        { name: 'Orçamento', href: '#contact' },
        { name: 'Documentação Técnica', href: '#contact' },
        { name: 'Suporte Técnico', href: '#contact' }
      ]
    }
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' }
  ]

  const contactInfo = [
    { icon: Mail, text: 'contato@tubodrenosa.com.br', href: 'mailto:contato@tubodrenosa.com.br' },
    { icon: Phone, text: '(11) 9999-9999', href: 'tel:+5511999999999' },
    { icon: MapPin, text: 'São Paulo, SP', href: '#' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-800 to-secondary-900"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-radial from-primary-900/20 via-transparent to-transparent"
      ></motion.div>

      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 1 }}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative container-max section-padding pt-20">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg"
              >
                <Waves className="h-8 w-8 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Tubo Drenosa</span>
                <span className="text-sm text-primary-300 font-medium">Geossintéticos</span>
              </div>
            </motion.div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Especialistas em soluções de drenagem com geossintéticos para rodovias. 
              Tecnologia avançada e qualidade garantida para seus projetos de infraestrutura.
            </p>

            <div className="space-y-3">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-primary-300 transition-colors"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="text-sm">{item.text}</span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold mb-6 text-primary-300">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05), duration: 0.4 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform transition-transform duration-200 block"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <p className="text-gray-400 text-sm">
                © {currentYear} Tubo Drenosa. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-sm">
                Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">Papum</a></em>
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-2 bg-gray-700 rounded-lg text-gray-300 ${social.color} transition-all duration-300 hover:bg-gray-600`}
                    >
                      <IconComponent className="h-4 w-4" />
                    </motion.a>
                  )
                })}
              </div>

              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg text-white hover:shadow-lg transition-all duration-300"
              >
                <ArrowUp className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}