import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Shield, Award } from 'lucide-react'

export default function Hero() {
  const features = [
    { icon: Shield, text: 'Tecnologia Avançada' },
    { icon: Award, text: 'Qualidade Garantida' },
    { icon: Zap, text: 'Instalação Rápida' }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-transparent"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-radial from-transparent via-primary-600/20 to-transparent"
      ></motion.div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 1 }}
            className="absolute w-2 h-2 bg-primary-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative container-max section-padding pt-24 lg:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium"
            >
              <Zap className="h-4 w-4 mr-2 text-accent-400" />
              Soluções Inovadoras em Drenagem
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold text-white leading-tight"
            >
              Geossintéticos para
              <span className="block bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                Rodovias
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-primary-100 leading-relaxed max-w-lg"
            >
              Especialistas em soluções de drenagem com geossintéticos. 
              Garantimos a durabilidade e eficiência de seus projetos de infraestrutura rodoviária.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg"
                  >
                    <IconComponent className="h-5 w-5 text-accent-400" />
                    <span className="text-white text-sm font-medium">{feature.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center group"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Saiba Mais
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateY: [0, 10, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
            >
              <div className="space-y-6">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-accent-500 rounded-2xl mb-4"
                  >
                    <Shield className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Soluções Completas
                  </h3>
                  <p className="text-primary-200">
                    Tecnologia de ponta para drenagem rodoviária
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Projetos', value: '500+' },
                    { label: 'Anos', value: '15+' },
                    { label: 'Clientes', value: '200+' },
                    { label: 'Estados', value: '10+' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4"
                    >
                      <div className="text-2xl font-bold text-accent-400">{stat.value}</div>
                      <div className="text-sm text-primary-200">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="flex items-center justify-center space-x-2 bg-accent-500/20 rounded-lg p-4"
                >
                  <CheckCircle className="h-5 w-5 text-accent-400" />
                  <span className="text-white font-medium">Garantia de Qualidade</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500/30 rounded-full blur-xl"
            ></motion.div>

            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-400/20 rounded-full blur-xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 text-center"
        >
          <div className="text-sm mb-2">Role para descobrir mais</div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}