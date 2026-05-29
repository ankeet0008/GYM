import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import heroImg from '../assets/mma2.webp'; 
import cloneImg from '../assets/mma3.webp'; 
import basicsImg from '../assets/mma.jpg';
import intermediateImg from '../assets/mma4.jpg';
import advancedImg from '../assets/mma5.jpg';

gsap.registerPlugin(ScrollTrigger);

export const MmaHero = () => {
  return (
    <section className="mt-hero-section">
      <div className="mt-hero-bg">
        <img src={heroImg} alt="MMA Hero" />
        <div className="mt-hero-overlay"></div>
      </div>
      <div className="mt-hero-content">
        <h1 className="mt-hero-title">MIXED<br/>MARTIAL ARTS</h1>
      </div>
    </section>
  );
};

export const MmaIntro = () => {
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
          MMA
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Welcome to our Mixed Martial Arts classes. MMA is a dynamic, full-contact combat sport that allows a wide variety of fighting techniques, combining striking and grappling. Whether you want to learn self-defense, improve your fitness, or prepare for competition, our expert instructors provide comprehensive training in a supportive environment.
        </p>
        <button className="btn-mt-discover">DISCOVER ALL CLASSES</button>
      </div>
      <div className="mt-intro-right">
        <div className="mt-clone-container">
          <img src={cloneImg} alt="MMA Clone" className="mt-clone mt-clone-1" />
          <img src={cloneImg} alt="MMA Clone" className="mt-clone mt-clone-2" />
          <img src={cloneImg} alt="MMA Clone" className="mt-clone mt-clone-3" />
        </div>
      </div>
    </section>
  );
};

export const MmaBasics = () => {
  return (
    <section className="mt-alternating-section">
      <div className="mt-alt-image">
        <img src={basicsImg} alt="MMA Basics" />
      </div>
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          MMA BASICS
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Embark on your MMA journey with our basics classes, designed for beginners. These sessions focus on building a strong foundation in both striking and grappling. You'll learn fundamental techniques, proper stance, basic submissions, and escapes. Our emphasis is on safety, correct form, and gradual progression.
        </p>
      </div>
    </section>
  );
};

export const MmaIntermediate = () => {
  return (
    <section className="mt-alternating-section reverse">
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          MMA INTERMEDIATE
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Advance your skills with our Intermediate Classes. These sessions involve more complex combinations, transitions between striking and grappling, and light sparring drills. You'll work closely with partners to refine your technique, timing, and defensive awareness.
        </p>
      </div>
      <div className="mt-alt-image">
        <img src={intermediateImg} alt="MMA Intermediate" />
      </div>
    </section>
  );
};

export const MmaAdvanced = () => {
  return (
    <section className="mt-alternating-section">
      <div className="mt-alt-image">
        <img src={advancedImg} alt="MMA Advanced" />
      </div>
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          MMA ADVANCED
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Our advanced classes are for experienced practitioners and competitors. In these sessions, we focus on high-level strategies, advanced submissions, intense sparring, and competition preparation. Push your limits and test your skills in a challenging and competitive environment.
        </p>
      </div>
    </section>
  );
};
