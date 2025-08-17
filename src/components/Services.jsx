import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Shield, Wrench, CheckCircle, ArrowRight, Zap, Settings, Target } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Layers,
      title: 'Geotêxteis para Drenagem',
      description: 'Soluções completas em geotêxteis especializados para sistemas de drenagem rodoviária, garantindo eficiência e durabilidade.',
      features: ['Filtração eficiente', 'Resistência UV', 'Fácil instalação', 'Longa durabilidade'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Sistemas de Proteção',
      description: 'Implementação de sistemas avançados de proteção para pavimentos e estruturas rodoviárias utilizando geossintéticos.',
      features: ['Proteção contra erosão', 'Estabilização do solo', 'Controle de umidade', 'Redução de custos'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Wrench,
      title: 'Consultoria Técnica',
      description: 'Consultoria especializada em projetos de drenagem, dimensionamento e especificação de materiais geossintéticos.',
      features: ['Análise técnica', 'Projeto personalizado', 'Acompanhamento', 'Suporte contínuo'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'Instalação Especializada',
      description: 'Equipe técnica qualificada para instalação correta de sistemas de drenagem com geossintéticos em rodovias.',
      features: ['Equipe treinada', 'Instalação rápida', 'Controle de qualidade', 'Garantia de serviço'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Eficiência Comprovada',
      description: 'Resultados superiores em drenagem e proteção de pavimentos'
    },
    {
      icon: Shield,
      title: 'Durabilidade Garantida',
      description: 'Materiais resistentes que suportam condições adversas'
    },
    {
      icon: Target,
      title: 'Solução Personalizada',
      description: 'Cada projeto recebe análise e solução específica'
    },
    {
      icon: CheckCircle,
      title: 'Qualidade Certificada',
      description: 'Produtos que atendem normas técnicas rigorosas'
    }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-primary-200 via-transparent to-transparent"
      ></motion.div>

      <div className="relative container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Layers className="h-4 w-4 mr-2" />
            Nossos Serviços
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Soluções Completas em
            <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Geossintéticos
            </span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços especializados em geossintéticos 
            para drenagem rodoviária, garantindo soluções eficientes e duradouras.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:shadow-lg transition-shadow`}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (featureIndex * 0.1), duration: 0.4 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="flex items-center text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-2 transition-all duration-300"
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/50 to-accent-700/50"></div>
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl lg:text-4xl font-bold mb-6"
                >
                  Por que Escolher a Tubo Drenosa?
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-xl text-primary-100 leading-relaxed mb-8"
                >
                  Combinamos experiência técnica, inovação e compromisso com a qualidade 
                  para entregar as melhores soluções em geossintéticos do mercado.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                    >
                      <IconComponent className="h-8 w-8 text-accent-300 mb-4" />
                      <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                      <p className="text-primary-100 text-sm leading-relaxed">{benefit.description}</p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl"
          ></motion.div>

          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-300/20 rounded-full blur-xl"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  )
}