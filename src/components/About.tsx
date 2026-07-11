import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Star } from 'lucide-react'

const About: React.FC = () => {
  const stats = [
    { icon: Award, value: '100+', label: 'Projects Completed' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Clock, value: '5+', label: 'Years Experience' },
    { icon: Star, value: '600K+', label: 'Subscriber Reach' }
  ]

  return (
    <section id="about" className="about-section">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="about-container">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            ABOUT ME
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="about-text"
          >
            Hi, I'm <span className="about-highlight">Aditya Rag</span>, a passionate and versatile video editor with over
            <span className="about-highlight"> half a decade</span> of professional experience in content creation,
            video production, and post-editing.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="about-text"
          >
            I've collaborated with <span className="about-highlight">top influencers, startups, real estate firms, NGOs,
            and international clients</span>. Whether it's cinematic reels, YouTube vlogs, podcast highlights,
            corporate edits, or creative storytelling—I deliver high-retention edits with precision, speed, and originality.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="about-text"
          >
            From working with <span className="about-highlight">600K+ subscriber YouTubers</span> to creating
            documentary content for NGOs, I bring stories to life through expert editing, perfect timing,
            and creative vision that keeps audiences engaged.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="about-stats"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="stat-item"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="stat-number"
                >
                  {stat.value}
                </motion.span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Workspace Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-image"
        >
          <div style={{
            width: '100%',
            height: '500px',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            padding: '8px'
          }}>
            <img
              src="/images/aditya-workspace.png"
              alt="Aditya Rag's Professional Video Editing Workspace"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '1rem',
                filter: 'brightness(1.05) contrast(1.1)'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
