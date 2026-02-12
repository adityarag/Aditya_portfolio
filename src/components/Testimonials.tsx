import React from 'react'
import { motion } from 'framer-motion'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Aditya's editing skills are incredible! His work on my YouTube vlogs has significantly increased my retention rates and subscriber engagement.",
      author: "Drishti Sharma",
      position: "YouTuber",
      company: "600K+ Subscribers",
      rating: 4.5,
      hasImage: true,
      image: "/images/clients/Drishti%20Sharma.jpg",
      color: "from-red-500 to-pink-500"
    },
    {
      quote: "The Instagram reels Aditya creates are pure magic. His timing and transitions have helped my content go viral multiple times!",
      author: "Ansh Tripathi",
      position: "Content Creator",
      company: "100K+ Followers",
      rating: 5,
      hasImage: true,
      image: "/images/clients/Ansh.jpg",
      color: "from-blue-500 to-purple-500"
    },
    {
      quote: "Working with Aditya transformed our brand presence. His high-impact reels and marketing content drove incredible engagement for our startup.",
      author: "PeerHub Team",
      position: "Marketing Lead",
      company: "PeerHub Startup",
      rating: 4.5,
      hasImage: true,
      image: "/images/clients/peerhub.jpg",
      color: "from-orange-500 to-red-500"
    },
    {
      quote: "Aditya's AI-focused health content editing perfectly captured our brand vision. His aesthetic reels helped us reach our target audience effectively.",
      author: "Femora AI",
      position: "Marketing Director",
      company: "Femora AI",
      rating: 5,
      hasImage: true,
      image: "/images/clients/femora%20ai.jpg",
      color: "from-purple-500 to-pink-500"
    },
    {
      quote: "Aditya's documentary editing brought our NGO's story to life. His emotional storytelling and interview editing created powerful impact.",
      author: "Drishti NGO",
      position: "Project Director",
      company: "Drishti NGO",
      rating: 5,
      hasImage: true,
      image: "/images/clients/Dristi_NGO.png",
      color: "from-green-500 to-teal-500"
    },
    {
      quote: "Fast, professional, and creative. Aditya's news content editing with perfect text overlays keeps our audience engaged across all platforms.",
      author: "F1 Fastline News",
      position: "Content Manager",
      company: "F1 Fastline News",
      rating: 4.5,
      hasImage: true,
      image: "/images/clients/f1-fastline-logo.jpg",
      color: "from-gray-600 to-gray-800"
    }
  ]

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="testimonials-header"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="testimonials-title"
          >
            CLIENT TESTIMONIALS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="testimonials-subtitle"
          >
            Don't just take my word for it. Here's what my clients have to say
            about working with me and the results we've achieved together.
          </motion.p>
        </motion.div>

        {/* Testimonials Scrolling Container */}
        <div className="testimonials-scroll-container">
          <div className="testimonials-scroll-track">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`first-${testimonial.author}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="testimonial-scroll-card"
              >
                <div className="testimonial-quote-icon">
                  <span className="quote-mark">"</span>
                </div>

                <div className="testimonial-quote">
                  {testimonial.quote}
                </div>

                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.hasImage ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '50%'
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div
                      className={`avatar-placeholder bg-gradient-to-br ${testimonial.color}`}
                      style={{ display: testimonial.hasImage ? 'none' : 'flex' }}
                    >
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                    <p className="testimonial-company">{testimonial.company}</p>
                  </div>
                </div>

                <div className="testimonial-rating">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <span className="star half-star">☆</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Duplicate set for seamless scrolling */}
            {testimonials.map((testimonial) => (
              <div
                key={`second-${testimonial.author}`}
                className="testimonial-scroll-card"
              >
                <div className="testimonial-quote-icon">
                  <span className="quote-mark">"</span>
                </div>

                <div className="testimonial-quote">
                  {testimonial.quote}
                </div>

                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.hasImage ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '50%'
                        }}
                      />
                    ) : null}
                    <div
                      className={`avatar-placeholder bg-gradient-to-br ${testimonial.color}`}
                      style={{ display: testimonial.hasImage ? 'none' : 'flex' }}
                    >
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                    <p className="testimonial-company">{testimonial.company}</p>
                  </div>
                </div>

                <div className="testimonial-rating">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <span className="star half-star">☆</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
