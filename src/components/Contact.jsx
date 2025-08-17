import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  
  const [status, setStatus] = useState({ message: '', isError: false })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', isError: false })
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    }
    
    setIsSubmitting(false)
    setTimeout(() => setStatus({ message: '', isError: false }), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@tubodrenosa.com.br',
      link: 'mailto:contato@tubodrenosa.com.br',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 9999-9999',
      link: 'tel:+5511999999999',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'São Paulo, SP',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const features = [
    {
      icon: Clock,
      title: 'Resposta Rápida',
      description: 'Retornamos seu contato em até 24 horas'
    },
    {
      icon: Users,
      title: 'Consultoria Gratuita',
      description: 'Primeira consulta sem compromisso'
    },
    {
      icon: CheckCircle,
      title: 'Orçamento Detalhado',
      description: 'Proposta técnica completa e transparente'
    }
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-radial from-primary-200 via-transparent to-transparent"
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
            <Send className="h-4 w-4 mr-2" />
            Entre em Contato
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Vamos Conversar Sobre
            <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Seu Projeto
            </span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe está pronta para desenvolver a solução ideal em geossintéticos 
            para seu projeto rodoviário. Entre em contato e receba uma proposta personalizada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group block"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl mb-4 group-hover:shadow-lg transition-shadow`}
                >
                  <IconComponent className="h-7 w-7 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-secondary-600">
                  {item.info}
                </p>
              </motion.a>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                Solicite seu Orçamento
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                Preencha o formulário abaixo com os detalhes do seu projeto. 
                Nossa equipe técnica entrará em contato para desenvolver a melhor solução.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 mb-1">{feature.title}</h4>
                      <p className="text-secondary-600">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
              whileHover={{ scale: 1.01 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Nome da empresa"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-6"
              >
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Descreva seu projeto e necessidades..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </motion.button>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg ${
                    status.isError 
                      ? 'bg-red-50 text-red-700 border border-red-200' 
                      : 'bg-green-50 text-green-700 border border-green-200'
                  }`}
                >
                  <div className="flex items-center">
                    {status.isError ? (
                      <X className="h-5 w-5 mr-2" />
                    ) : (
                      <CheckCircle className="h-5 w-5 mr-2" />
                    )}
                    {status.message}
                  </div>
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}