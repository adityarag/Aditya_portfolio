import React from 'react'
import { motion } from 'framer-motion'
import { Video, Camera, Edit, Palette, Music, Monitor } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Video,
      title: 'Instagram Reels & YouTube Shorts',
      description: 'High-retention short-form content with perfect timing, transitions, and viral potential for maximum engagement.',
      features: ['Viral Reels Editing', 'YouTube Shorts', 'Cinematic Transitions', 'Music Sync Perfection']
    },
    {
      icon: Camera,
      title: 'YouTube Vlog Editing',
      description: 'Professional vlog editing for YouTubers with 600K+ subscribers, ensuring high retention and engagement.',
      features: ['Vlog Editing', 'Cinematic Montages', 'Influencer-Style Content', 'Retention Optimization']
    },
    {
      icon: Edit,
      title: 'Podcast & Interview Highlights',
      description: 'Dynamic podcast editing with captions, cutdowns, and highlight reels that capture key moments.',
      features: ['Podcast Editing', 'Interview Highlights', 'Dynamic Captions', 'Voice-over Timing']
    },
    {
      icon: Palette,
      title: 'Corporate & Startup Branding',
      description: 'High-impact branding reels and corporate content for startups, real estate, and business marketing.',
      features: ['Branding Reels', 'Corporate Videos', 'Real Estate Tours', 'Startup Content']
    },
    {
      icon: Music,
      title: 'Documentary & Storytelling',
      description: 'Full-fledged documentary editing with emotional arcs, interviews, and compelling narrative structure.',
      features: ['Documentary Editing', 'NGO Content', 'Storytelling', 'Emotional Narratives']
    },
    {
      icon: Monitor,
      title: 'Comedy & Entertainment',
      description: 'Prank videos, comedy content, and entertainment editing with perfect comedic timing and effects.',
      features: ['Prank Video Editing', 'Comedy Timing', 'Entertainment Content', 'Event Aftermovies']
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="services-header"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="services-title"
          >
            MY SERVICES
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="services-subtitle"
          >
            From concept to completion, I offer comprehensive creative services 
            to bring your vision to life with professional quality and attention to detail.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="service-card"
            >
              <div className="service-icon">
                <service.icon size={32} color="white" />
              </div>
              
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
