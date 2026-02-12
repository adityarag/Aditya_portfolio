import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS Configuration
      const SERVICE_ID = 'service_5rly0c6'        // Your EmailJS Service ID
      const TEMPLATE_ID = 'template_hles7xi'      // Your EmailJS Template ID
      const PUBLIC_KEY = 'kgJw-ienprhxRkZYi'      // Your EmailJS Public Key

      // Send email using EmailJS directly (no fallback needed since we have credentials)

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Contact from Portfolio Website',
        message: formData.message,
        to_email: 'adityaragvlogs01@gmail.com'
      }

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )

      console.log('Email sent successfully:', result)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setSubmitStatus('success')

    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adityaragvlogs01@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-7903267471'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India'
    }
  ]

  return (
    <section id="contact" className="modern-contact-section">
      <div className="contact-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-title"
          >
            LET'S
            <br />
            GET IN
            <br />
            TOUCH
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-subtitle"
          >
            Ready to bring your vision to life? Let's discuss your project and create something{' '}
            <span style={{ color: '#a855f7', fontWeight: 'bold' }}>extraordinary</span> together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="contact-email">
              adityaragvlogs01@gmail.com
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-info-section"
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always excited to work on <span style={{ color: '#ffffff', fontWeight: 'bold' }}>new projects</span> and collaborate with{' '}
              <span style={{ color: '#a855f7', fontWeight: 'bold' }}>creative minds</span>.
              Whether you have a specific vision or need guidance on your next project, I'm here to help.
            </p>

            {/* Contact Methods */}
            <div>
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="contact-card"
                >
                  <div className="contact-icon">
                    <method.icon size={32} color="white" />
                  </div>
                  <div className="contact-info">
                    <h4>{method.label}</h4>
                    <p>{method.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="modern-form">
              <h3>Send a Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="form-group"
                  >
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="form-group"
                  >
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="form-group"
                >
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Project Inquiry"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="form-group"
                >
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input form-textarea"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="form-status success"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="form-status error"
                  >
                    ❌ Something went wrong. Please try again or email directly.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -3 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="form-button"
                  disabled={isSubmitting}
                >
                  <Send size={24} />
                  {isSubmitting ? 'OPENING EMAIL...' : 'SEND MESSAGE'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
