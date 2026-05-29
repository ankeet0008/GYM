import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import heroImg from '../assets/yoga2.webp'; 
import cloneImg from '../assets/yoga3-removebg-preview.png'; 
import basicsImg from '../assets/yoga.jpg';
import intermediateImg from '../assets/yoga4.jpg';
import advancedImg from '../assets/yoga5.jpg';

gsap.registerPlugin(ScrollTrigger);

export const YogaHero = () => {
  return (
    <section className="mt-hero-section">
      <div className="mt-hero-bg">
        <img src={heroImg} alt="Yoga Hero" />
        <div className="mt-hero-overlay"></div>
      </div>
      <div className="mt-hero-content">
        <h1 className="mt-hero-title">YOGA</h1>
      </div>
    </section>
  );
};

export const YogaIntro = () => {
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
          YOGA
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Welcome to our Yoga classes, where mindfulness meets movement. Whether you want to improve your flexibility, build core strength, or find a moment of peace in your day, our classes offer a sanctuary for both body and mind. Perfect as an active recovery method for martial artists or as a standalone practice, our experienced instructors will guide you towards better alignment, balance, and inner calm.
        </p>
        <button className="btn-mt-discover">DISCOVER COURSES</button>
      </div>
      <div className="mt-intro-right">
        <div className="mt-clone-container">
          <img src={cloneImg} alt="Yoga Clone" className="mt-clone mt-clone-1" />
          <img src={cloneImg} alt="Yoga Clone" className="mt-clone mt-clone-2" />
          <img src={cloneImg} alt="Yoga Clone" className="mt-clone mt-clone-3" />
        </div>
      </div>
    </section>
  );
};

export const YogaBasics = () => {
  return (
    <section className="mt-alternating-section">
      <div className="mt-alt-image">
        <img src={basicsImg} alt="Yoga Basics" />
      </div>
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          YOGA BASICS
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Start your journey with our Yoga Basics classes. Perfect for beginners and those looking to refine their technique, these sessions focus on fundamental poses, proper alignment, and breath awareness. You'll build a strong, safe foundation in a supportive and deeply calming environment, learning how to connect your breath with mindful movement.
        </p>
      </div>
    </section>
  );
};

export const YogaFlow = () => {
  return (
    <section className="mt-alternating-section reverse">
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          YOGA FLOW
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Elevate your practice with our dynamic Yoga Flow classes. Designed for those with some experience, these sessions link breath with movement through a continuous sequence of postures. You'll build internal heat, naturally increase flexibility, and challenge your physical balance while maintaining a meditative focus.
        </p>
      </div>
      <div className="mt-alt-image">
        <img src={intermediateImg} alt="Yoga Flow" />
      </div>
    </section>
  );
};

export const PowerYoga = () => {
  return (
    <section className="mt-alternating-section">
      <div className="mt-alt-image">
        <img src={advancedImg} alt="Power Yoga" />
      </div>
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          POWER YOGA
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          For seasoned practitioners and athletes, our Power Yoga classes offer an intense and invigorating practice. These highly physical sessions focus on advanced asanas, core strength, and stamina. Push your physical limits and discover the true strength of your body and mind as you move through challenging sequences designed to build resilience.
        </p>
      </div>
    </section>
  );
};
