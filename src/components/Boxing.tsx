import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import heroImg from '../assets/boxing2.webp'; 
import cloneImg from '../assets/boxing3.webp'; 
import basicsImg from '../assets/boxing.jpeg';
import advancedImg from '../assets/boxing4.jpg';
import kidsImg from '../assets/boxing5.jpg';

gsap.registerPlugin(ScrollTrigger);

export const BoxingHero = () => {
  return (
    <section className="mt-hero-section">
      <div className="mt-hero-bg">
        <img src={heroImg} alt="Boxing Hero" />
        <div className="mt-hero-overlay"></div>
      </div>
      <div className="mt-hero-content">
        <h1 className="mt-hero-title">BOXING</h1>
      </div>
    </section>
  );
};

export const BoxingIntro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-intro-section" ref={containerRef}>
      <div className="mt-intro-left">
        <h2 className="mt-section-title">
          BOXING
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Welcome to our boxing classes, where the sweet science takes center stage. Dive into the fundamentals with our boxing basics classes or sharpen your skills in the advanced sessions. As one of the oldest sports in history, boxing offers more than just physical conditioning; it cultivates discipline, strategy, and mental agility. Join us for an enriching experience with boxing coach Luciano Robledo, where the art of boxing is embraced, from the basics to the complexities.
        </p>
        <button className="btn-mt-discover">DISCOVER ALL CLASSES</button>
      </div>
      <div className="mt-intro-right">
        <div className="mt-clone-container">
          <img src={cloneImg} alt="Boxing Clone" className="mt-clone mt-clone-1" />
          <img src={cloneImg} alt="Boxing Clone" className="mt-clone mt-clone-2" />
          <img src={cloneImg} alt="Boxing Clone" className="mt-clone mt-clone-3" />
        </div>
      </div>
    </section>
  );
};

export const BoxingBasics = () => {
  return (
    <section className="mt-alternating-section">
      <div className="mt-alt-image">
        <img src={basicsImg} alt="Boxing Basics" />
      </div>
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          BOXING BASICS
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Practice the important fundamentals of boxing in our boxing basics classes. Suitable for complete beginners, these sessions prioritize essential elements like good footwork and correct technique. Whether you're stepping on the mat for the first time or seeking to refine your foundation, our boxing basics classes offer a welcoming and instructive environment.
        </p>
      </div>
    </section>
  );
};

export const BoxingAdvanced = () => {
  return (
    <section className="mt-alternating-section reverse">
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          BOXING ADVANCED
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Elevate your boxing prowess with our boxing advanced classes. Designed for seasoned practitioners, these sessions focus on advanced techniques, strategic combinations, and nuanced footwork. Our advanced boxing classes offer the opportunity for participants to refine their skills and deepen their understanding of the sweet science. Led by our experienced instructor Luciano, these sessions are crafted to challenge and enhance your skills and get you ready to step into the ring.
        </p>
      </div>
      <div className="mt-alt-image">
        <img src={advancedImg} alt="Boxing Advanced" />
      </div>
    </section>
  );
};

export const BoxingKids = () => {
  return (
    <section className="mt-alternating-section">
      <div className="mt-alt-image">
        <img src={kidsImg} alt="Boxing Kids" />
      </div>
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          BOXING KIDS
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Nurture your child's growth and character development in our boxing classes for 12-15 year old kids. Boxing not only promotes physical fitness but also instills resilience, self-confidence, and a strong work ethic. Our program provides a structured and encouraging atmosphere, offering benefits such as improved focus, enhanced problem-solving skills, and a heightened sense of responsibility.
        </p>
      </div>
    </section>
  );
};
