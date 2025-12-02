import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './App.css'

// Smooth easing curve for buttery animations
const smoothEasing = [0.25, 0.1, 0.25, 1]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEasing
    }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: smoothEasing
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
}

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: smoothEasing
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: smoothEasing
    }
  }
}

// Video Background Component
function VideoBackground() {
  return (
    <div className="video-background">
      <video
        className="background-video"
        src="/Video_Generation_From_User_Input.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="video-overlay"></div>
    </div>
  )
}

// Navigation Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <a href="#" className="nav-logo">KOROKO</a>

      <ul className="nav-links">
        <li><a href="#about">À propos</a></li>
        <li><a href="#collections">Collections</a></li>
        <li><a href="#savoir-faire">Savoir-faire</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-social">
        <a href="https://www.instagram.com/koroko.sohaib/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
        <a href="#" aria-label="Facebook">FB</a>
      </div>

      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </motion.nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
      >
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Créateur Couture
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span>KOROKO</span>
          <span className="signature">L'art de la broderie main</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Pièces sur mesure & broderie main. Chaque création est une œuvre unique,
          façonnée avec passion par une ingénieure d'état basée en Algérie.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <a href="#collections" className="btn">Découvrir</a>
          <a href="#contact" className="btn" style={{ background: 'transparent' }}>
            Prendre Rendez-vous
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  )
}

// About Section
function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content-centered"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span className="section-label" variants={fadeInUp}>
            À Propos
          </motion.span>

          <motion.h2 className="about-title" variants={fadeInUp}>
            L'Excellence<br />
            <span className="gold-text">Artisanale</span>
          </motion.h2>

          <motion.div className="divider" variants={fadeIn}></motion.div>

          <motion.p className="about-text" variants={fadeInUp}>
            Bienvenue dans l'univers de <strong>KOROKO</strong>, où la tradition
            rencontre l'innovation. En tant qu'ingénieure d'état et créatrice passionnée,
            je fusionne la précision technique avec l'art ancestral de la broderie main.
          </motion.p>

          <motion.p className="about-text" variants={fadeInUp}>
            Chaque pièce est conçue avec une attention méticuleuse aux détails,
            utilisant des techniques traditionnelles algériennes enrichies d'une
            vision contemporaine. Du fil d'or aux perles les plus fines, chaque
            élément est sélectionné pour créer des œuvres intemporelles.
          </motion.p>

          <motion.div className="about-signature" variants={fadeInUp}>
            <span className="signature-text">Koroko</span>
            <div className="signature-line"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Collections Section
function Collections() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const collections = [
    {
      title: "Robes de Soirée",
      description: "Élégance raffinée pour vos moments d'exception, chaque robe est une œuvre unique conçue pour sublimer votre silhouette."
    },
    {
      title: "Caftans",
      description: "L'héritage algérien sublimé par la broderie dorée, alliant tradition ancestrale et modernité contemporaine."
    },
    {
      title: "Sur Mesure",
      description: "Votre vision, notre savoir-faire. Une création entièrement personnalisée selon vos désirs et vos mesures."
    }
  ]

  return (
    <section id="collections" className="collections" ref={ref}>
      <div className="container">
        <motion.div
          className="collections-content-centered"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span className="section-label" variants={fadeInUp}>
            Collections
          </motion.span>

          <motion.h2 variants={fadeInUp}>
            Des créations uniques pour des<br />
            <span className="gold-text">femmes d'exception</span>
          </motion.h2>

          <motion.div className="divider" variants={fadeIn}></motion.div>

          <div className="collections-features">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                className="collection-feature"
                variants={fadeInUp}
              >
                <div className="feature-content">
                  <h4>{collection.title}</h4>
                  <p>{collection.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Craftsmanship Section
function Craftsmanship() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      title: "Broderie Main",
      description: "Chaque point est réalisé à la main, perpétuant un savoir-faire ancestral transmis de génération en génération."
    },
    {
      title: "Matières Nobles",
      description: "Fils d'or, soies naturelles et perles sélectionnées pour leur qualité exceptionnelle."
    },
    {
      title: "Sur Mesure",
      description: "Une création unique, adaptée à vos mesures et vos désirs pour une silhouette parfaite."
    }
  ]

  return (
    <section id="savoir-faire" className="craftsmanship" ref={ref}>
      <div className="container">
        <motion.div
          className="craft-content-centered"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span className="section-label" variants={fadeInUp}>
            Savoir-Faire
          </motion.span>

          <motion.h2 variants={fadeInUp}>
            L'Art de la<br />
            <span className="gold-text">Broderie Dorée</span>
          </motion.h2>

          <motion.div className="divider" variants={fadeIn}></motion.div>

          <div className="craft-features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="craft-feature"
                variants={fadeInUp}
              >
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Testimonial Section
function Testimonial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="testimonial" ref={ref}>
      <div className="container">
        <motion.div
          className="testimonial-content"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span className="quote-mark" variants={fadeIn}>"</motion.span>

          <motion.p className="testimonial-text" variants={fadeInUp}>
            La mode passe, le style reste. Chaque création KOROKO est une
            déclaration d'élégance intemporelle, un hommage à l'artisanat
            et à la beauté qui transcende les tendances.
          </motion.p>

          <motion.div className="divider" variants={fadeIn}></motion.div>

          <motion.span className="testimonial-author" variants={fadeInUp}>
            — KOROKO
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappNumber = '213796219708'
    let message = `Bonjour KOROKO,

Nom: ${formData.name}
Téléphone: ${formData.phone}`
    if (formData.email) message += `\nEmail: ${formData.email}`
    if (formData.subject) message += `\nSujet: ${formData.subject}`
    if (formData.message) message += `\n\nMessage:\n${formData.message}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span className="section-label" variants={fadeInUp}>
              Contact
            </motion.span>

            <motion.h2 variants={fadeInUp}>
              Créons Ensemble<br />
              <span className="gold-text">Votre Rêve</span>
            </motion.h2>

            <motion.p className="contact-text" variants={fadeInUp}>
              Chaque création commence par une conversation. Partagez votre vision,
              vos inspirations, et laissez-nous transformer vos rêves en réalité brodée.
            </motion.p>

            <motion.div className="contact-details" variants={fadeInUp}>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <span className="contact-value">
                  <a href="mailto:contact@koroko.dz">contact@koroko.dz</a>
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Téléphone</span>
                <span className="contact-value">
                  <a href="tel:+213796219708">+213 796 21 97 08</a>
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Atelier</span>
                <span className="contact-value">Algérie</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Votre téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Sur mesure, robe de soirée..."
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Décrivez votre projet ou posez-nous vos questions..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-logo">KOROKO</div>
            <p className="footer-tagline">Créateur couture & broderie main</p>
          </div>

          <div className="footer-links">
            <a href="#about">À propos</a>
            <a href="#collections">Collections</a>
            <a href="#savoir-faire">Savoir-faire</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a href="https://www.instagram.com/koroko.sohaib/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Pinterest">PN</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 KOROKO. Tous droits réservés.
          </p>
          <div className="footer-location">
            <span>Basé en Algérie</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <>
      <VideoBackground />
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collections />
        <Craftsmanship />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
