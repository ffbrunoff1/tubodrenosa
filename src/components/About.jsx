import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Award, TrendingUp, CheckCircle, Zap } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Soluções personalizadas que atendem às necessidades específicas de cada projeto rodoviário.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais com vasta experiência em geossintéticos e infraestrutura rodoviária.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Qualidade Certificada',
      description: 'Produtos e serviços que seguem os mais rigorosos padrões de qualidade internacional.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Inovação Contínua',
      description: 'Investimento constante em pesquisa e desenvolvimento de novas tecnologias.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const achievements = [
    { number: '500+', label: 'Projetos Concluídos', icon: CheckCircle },
    { number: '15+', label: 'Anos de Experiência', icon: Award },
    { number: '10+', label: 'Estados Atendidos', icon: Target },
    { number: '98%', label: 'Satisfação dos Clientes', icon: Users }
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary-200/30 via-transparent to-transparent"
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
            <Zap className="h-4 w-4 mr-2" />
            Sobre a Tubo Drenosa
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Especialistas em
            <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Soluções de Drenagem
            </span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Com mais de 15 anos de experiência, somos referência nacional em soluções de drenagem 
            com geossintéticos para rodovias. Nossa expertise garante projetos eficientes e duradouros.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-secondary-900">
                Nossa Missão
              </h3>
              <p className="text-lg text-secondary-700 leading-relaxed">
                Fornecer soluções inovadoras em geossintéticos para drenagem rodoviária, 
                garantindo a máxima eficiência, durabilidade e sustentabilidade em cada projeto. 
                Nosso compromisso é com a excelência técnica e a satisfação total de nossos clientes.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-secondary-900">
                Nossos Valores
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {['Qualidade Técnica', 'Inovação Constante', 'Sustentabilidade', 'Compromisso'].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-secondary-700 font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100"
            >
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className="text-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mb-3"
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="text-3xl font-bold text-secondary-900 mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-secondary-600 font-medium">
                        {achievement.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full blur-xl"
            ></motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl mb-4 group-hover:shadow-lg transition-shadow`}
                >
                  <IconComponent className="h-7 w-7 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <Target className="h-5 w-5 mr-2" />
            Conheça Nossos Projetos
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}