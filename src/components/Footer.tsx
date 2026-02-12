import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, X, Linkedin, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/_aditya_rag?igsh=MXV5dzB1ZWhlYXo0cg==', label: 'Instagram' },
    { icon: X, href: 'https://x.com/_aditya_rag?t=7xB--OtN3Q4goPNKQ7s6Eg&s=09', label: 'X (Twitter)' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-rag?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@reglocks?si=jKOT2L45lmf-S_Wt', label: 'YouTube' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Instagram Reels',
    'YouTube Editing',
    'Podcast Highlights',
    'Corporate Videos',
    'Documentary Editing',
    'Real Estate Tours',
  ]

  return (
    <footer className="footer-section">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg rotate-45"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full"
        />
      </div>

      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Logo with Animated Shapes */}
            <div className="footer-brand">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="footer-logo"
              >
                ADITYA RAG
              </motion.div>

              {/* Animated Geometric Shapes */}
              <div className="footer-shapes">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="footer-shape"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="footer-shape"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="footer-shape"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="footer-shape"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="footer-shape"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="footer-shape"
                />
              </div>
            </div>

            <p className="footer-description">
              Professional Video Editor & Content Creator passionate about crafting{' '}
              <span style={{ color: '#a855f7', fontWeight: 'bold' }}>high-retention edits</span> that tell compelling stories.
            </p>

            {/* Contact Info */}
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" size={20} />
                <span>adityaragvlogs01@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" size={20} />
                <span>+91-7903267471</span>
              </div>
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" size={20} />
                <span>India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="footer-link"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-section-title">Services</h4>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="footer-link"
                    style={{ cursor: 'pointer' }}
                  >
                    {service}
                  </motion.span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          {/* Social Links */}
          <div className="footer-social">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="footer-social-link"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            <p>&copy; {currentYear} Aditya. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
