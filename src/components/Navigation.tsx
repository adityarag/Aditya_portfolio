import React from 'react'

const Navigation: React.FC = () => {

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className="modern-nav">
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          ADITYA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <a href="#contact" className="hidden md:block nav-cta">
          Let's Talk
        </a>


      </div>


    </nav>
  )
}

export default Navigation
