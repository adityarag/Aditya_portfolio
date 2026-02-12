import React from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="hero-container">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            HI, I'M
            <br />
            ADITYA RAG
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-subtitle"
          >
            Professional Video Editor & Content Creator
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-description"
          >
            With 5+ years of experience, I create high-retention edits for top influencers,
            startups, and brands. From cinematic reels to YouTube vlogs, I deliver
            precision, speed, and originality in every project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hero-buttons"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-button-primary"
            >
              <Play size={20} />
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-button-secondary"
            >
              <ArrowRight size={20} />
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Professional Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hero-3d-container"
        >
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '2rem',
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
            padding: '8px'
          }}>
            <img
              src="/images/aditya-professional.png"
              alt="Aditya Rag - Professional Video Editor"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '1.5rem',
                filter: 'brightness(1.1) contrast(1.1)'
              }}
            />
            {/* Subtle gradient overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '30%',
              background: 'linear-gradient(transparent, rgba(168, 85, 247, 0.1))',
              borderRadius: '0 0 1.5rem 1.5rem'
            }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
