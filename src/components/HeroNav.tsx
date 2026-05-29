import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import homeBg from '../assets/home page.webp';

import { Link } from 'react-router-dom';
import { ScrambleText } from './ScrambleText';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">GYMME</Link>
      
      {/* Hamburger button - mobile only */}
      <button 
        className={`hamburger ${menuOpen ? 'active' : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Desktop nav links */}
      <div className="nav-links">
        <Link to="/courses" className="nav-link">COURSES</Link>
        <Link to="/pricing" className="nav-link">PRICING</Link>
        <Link to="/about" className="nav-link">ABOUT US</Link>
        <Link to="/contact" className="nav-link">CONTACT US</Link>
        <Link to="/login" className="nav-link">MEMBERS AREA</Link>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/courses" className="mobile-link" onClick={() => setMenuOpen(false)}>COURSES</Link>
        <Link to="/pricing" className="mobile-link" onClick={() => setMenuOpen(false)}>PRICING</Link>
        <Link to="/about" className="mobile-link" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
        <Link to="/contact" className="mobile-link" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
        <Link to="/login" className="mobile-link" onClick={() => setMenuOpen(false)}>MEMBERS AREA</Link>
      </div>
    </nav>
  );
};

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current.children, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background">
        <img src={homeBg} alt="Hero Background" className="hero-img" />
        <div className="hero-gradient"></div>
        <div className="hero-tint"></div>
      </div>
      <div className="hero-content">
        <ScrambleText 
          as="h1" 
          text={["MARTIAL ARTS.", "FROM BROOKLYN.", "WITH LOVE."]} 
          className="font-display-xl hero-title" 
        />
        <div ref={textRef}>
          <p className="font-body-lg hero-desc">
            Come by and train with us. A great community with experienced coaches awaits you.<br/>Together we'll bring out the best in you.
          </p>
          <div className="hero-cta">
            <button className="btn-white">DISCOVER CLASSES</button>
          </div>
        </div>
      </div>
    </section>
  );
};
