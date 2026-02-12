import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Play, X } from 'lucide-react'

// VideoPlayer component to handle both local videos and YouTube fallbacks
const VideoPlayer: React.FC<{
  videoUrl: string
  youtubeId?: string
  projectTitle: string
}> = ({ videoUrl, youtubeId, projectTitle }) => {
  const [videoError, setVideoError] = useState(false)
  const [showYoutube, setShowYoutube] = useState(false)

  const handleVideoError = () => {
    console.log('Local video failed to load:', videoUrl)
    setVideoError(true)
    if (youtubeId) {
      setShowYoutube(true)
    }
  }

  if (showYoutube && youtubeId) {
    return (
      <div style={{ width: '100%', maxWidth: '90vw', maxHeight: '80vh' }}>
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title={projectTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '10px' }}
        />
        <div style={{
          textAlign: 'center',
          marginTop: '10px',
          color: 'rgba(255,255,255,0.8)',
          fontSize: '0.9rem'
        }}>
          📺 Demo video (Add your own videos to /public/videos/)
        </div>
      </div>
    )
  }

  return (
    <div style={{ width: '100%', maxWidth: '90vw' }}>
      <video
        src={videoUrl}
        controls
        autoPlay
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '80vh',
          borderRadius: '10px'
        }}
        onError={handleVideoError}
      >
        Your browser does not support the video tag.
      </video>

      {videoError && (
        <div style={{
          textAlign: 'center',
          marginTop: '15px',
          padding: '15px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '10px',
          color: 'white'
        }}>
          <p>📁 Video file not found: {videoUrl}</p>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            💡 Add your video files to the /public/videos/ directory
          </p>
          {youtubeId && (
            <button
              onClick={() => setShowYoutube(true)}
              style={{
                background: '#ff0000',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              📺 Watch Demo on YouTube
            </button>
          )}
        </div>
      )}
    </div>
  )
}

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      title: 'Drishti Sharma - YouTube Content',
      description: 'YouTube vlog edits and cinematic montages for popular YouTuber with 600K+ subscribers, focusing on high retention and engagement.',
      tags: ['YouTube Editing', 'Vlogs', 'Cinematic'],
      image: '/api/placeholder/600/400',
      thumbnail: '/images/thumbnails/drishti-sharma-thumbnail.jpg', // Add your thumbnail here
      videoUrl: '/videos/drishti-sharma-sample.mp4', // Add your video file here
      youtubeId: 'dQw4w9WgXcQ', // Fallback YouTube video for demo
      client: {
        name: 'Drishti Sharma',
        title: 'YouTuber at 600K+ Subscribers',
        image: '/images/clients/Drishti%20Sharma.jpg',
        hasImage: true, // Image is now available
        initials: 'DS',
        color: 'from-red-500 to-pink-500'
      }
    },
    {
      title: 'Ansh Tripathi - Instagram Reels',
      description: 'Viral Instagram reels and transitions for 100K+ follower creator, specializing in voice-over timing and short-form content.',
      tags: ['Instagram Reels', 'Transitions', 'Viral Content'],
      image: '/api/placeholder/600/400',
      thumbnail: '/images/thumbnails/ansh-tripathi-thumbnail.jpg', // Add your thumbnail here
      videoUrl: '/videos/ansh-tripathi-sample.mp4', // Add your video file here
      client: {
        name: 'Ansh Tripathi',
        title: 'Content Creator at 100K+ Followers',
        image: '/images/clients/Ansh.jpg',
        hasImage: true, // Image is now available
        initials: 'AT',
        color: 'from-blue-500 to-purple-500'
      }
    },
    {
      title: 'PeerHub Startup - Brand Reels',
      description: 'High-impact branding reels and marketing campaigns for innovative startup, driving engagement and brand awareness.',
      tags: ['Startup Branding', 'Marketing', 'Reels'],
      image: '/api/placeholder/600/400',
      thumbnail: '/images/thumbnails/peerhub-thumbnail.jpg', // Add your thumbnail here
      videoUrl: '/videos/peerhub-sample.mp4', // Add your video file here
      client: {
        name: 'PeerHub Team',
        title: 'Marketing Lead at PeerHub Startup',
        image: '/images/clients/peerhub.jpg',
        hasImage: true, // Image is now available
        initials: 'PT',
        color: 'from-orange-500 to-red-500'
      }
    },
    {
      title: 'Femora AI - Health Content',
      description: 'AI-focused women\'s health content with aesthetic and educational reels for innovative health tech platform.',
      tags: ['Health Tech', 'AI Content', 'Educational'],
      image: '/api/placeholder/600/400',
      thumbnail: '/images/thumbnails/femora-ai-thumbnail.jpg', // Add your thumbnail here
      videoUrl: '/videos/femora-ai-sample.mp4', // Add your video file here
      client: {
        name: 'Femora AI',
        title: 'Health Tech Startup Founder',
        image: '/images/clients/femora%20ai.jpg',
        hasImage: true, // Image is now available
        initials: 'FA',
        color: 'from-purple-500 to-pink-500'
      }
    },
    {
      title: 'Drishti NGO - Documentary',
      description: 'Full-fledged documentary editing with storytelling, interviews, and emotional arcs for impactful NGO content.',
      tags: ['Documentary', 'NGO', 'Storytelling'],
      image: '/api/placeholder/600/400',
      thumbnail: '/images/thumbnails/drishti-ngo-thumbnail.jpg', // Add your thumbnail here
      videoUrl: '/videos/drishti-ngo-sample.mp4', // Add your video file here
      client: {
        name: 'Drishti NGO',
        title: 'NGO Director & Social Impact Leader',
        image: '/images/clients/Dristi_NGO.png',
        hasImage: true, // Image is now available
        initials: 'DN',
        color: 'from-green-500 to-teal-500'
      }
    },
    {
      title: 'F1 Fastline News - News Content',
      description: 'Dynamic news shorts with text overlays and cutdowns for Instagram and YouTube, maintaining fast-paced engagement.',
      tags: ['News Editing', 'Text Overlays', 'Social Media'],
      image: '/api/placeholder/600/400',
      thumbnail: '/images/thumbnails/f1-fastline-thumbnail.jpg', // Add your thumbnail here
      videoUrl: '/videos/f1-fastline-sample.mp4', // Add your video file here
      client: {
        name: 'F1 Fastline',
        title: 'Sports News Editor & Content Lead',
        image: '/images/clients/f1-fastline-logo.jpg',
        hasImage: true, // Image is now available
        initials: 'F1',
        color: 'from-gray-600 to-gray-800'
      }
    }
  ]

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="portfolio-header"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="portfolio-title"
          >
            MY PORTFOLIO
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="portfolio-subtitle"
          >
            A showcase of my recent work spanning 3D design, video production, 
            and creative storytelling across various industries and mediums.
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="portfolio-card"
            >
              <div className="portfolio-image">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: project.thumbnail ? `url(${project.thumbnail})` : 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: project.thumbnail ? '#000' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: 'white',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setSelectedVideo(project.videoUrl)
                    setSelectedProject(project)
                  }}
                >
                  {/* Play Button Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(0,0,0,0.3)',
                    borderRadius: '50%',
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(5px)',
                    opacity: '0.5'
                  }}
                  className="play-button-overlay"
                  >
                    <Play size={32} />
                  </div>

                  {/* Click to Play Label */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    background: 'rgba(0,0,0,0.8)',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    backdropFilter: 'blur(10px)'
                  }}>
                    Click to Play
                  </div>

                  {/* Thumbnail Loading Fallback */}
                  {project.thumbnail && (
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        zIndex: -1,
                        backgroundColor: '#000'
                      }}
                      onError={(e) => {
                        // Hide image if it fails to load, fallback to gradient
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                </div>
              </div>
              
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="portfolio-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="portfolio-tag">{tag}</span>
                  ))}
                </div>

                <div className="portfolio-footer">
                  <div className="client-showcase">
                    <div
                      className="client-avatar-large"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: project.client.hasImage ? '#fff' : undefined,
                        backgroundImage: project.client.hasImage ? `url(${project.client.image})` : `linear-gradient(135deg, #ff0066, #00ffff)`,
                        backgroundSize: project.client.hasImage ? 'contain' : 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        color: '#fff',
                        flexShrink: 0,
                        padding: project.client.hasImage ? '8px' : '0'
                      }}
                    >
                      {!project.client.hasImage && project.client.initials}
                    </div>
                    <div className="client-details">
                      <div className="client-name-large">{project.client.name}</div>
                      <div className="client-title-large">{project.client.title}</div>
                    </div>
                  </div>


                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && selectedProject && (
        <div
          className="video-modal-overlay"
          onClick={() => {
            setSelectedVideo(null)
            setSelectedProject(null)
          }}
        >
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close"
              onClick={() => {
                setSelectedVideo(null)
                setSelectedProject(null)
              }}
            >
              <X size={24} />
            </button>

            {/* Try to load local video first, fallback to YouTube */}
            <VideoPlayer
              videoUrl={selectedVideo}
              youtubeId={selectedProject.youtubeId}
              projectTitle={selectedProject.title}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
