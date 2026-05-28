import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import homeBg from '../assets/home page.webp';

import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">GYMME</Link>
      <div className="nav-links">
        <Link to="/courses" className="nav-link">COURSES</Link>
        <a href="#" className="nav-link">PRICING</a>
        <a href="#" className="nav-link">ABOUT US</a>
        <a href="#" className="nav-link">SCHEDULE</a>
        <a href="#" className="nav-link">MEMBERS AREA</a>
        <div className="lang-switcher">
          <span className="lang-muted">DE</span>
          <span className="lang-sep">|</span>
          <span className="lang-active">EN</span>
        </div>
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
      <div className="hero-content" ref={textRef}>
        <h1 className="font-display-xl hero-title">
          MARTIAL ARTS.<br/>FROM BROOKLYN.<br/>WITH LOVE.
        </h1>
        <p className="font-body-lg hero-desc">
          Come by and train with us. A great community with experienced coaches awaits you.<br/>Together we'll bring out the best in you.
        </p>
        <div className="hero-cta">
          <button className="btn-white">DISCOVER CLASSES</button>
        </div>
      </div>
    </section>
  );
};
