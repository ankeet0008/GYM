import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import heroImg from '../assets/fitness6.webp'; 
import cloneImg from '../assets/fitness7.webp'; 
import basicsImg from '../assets/fitness.jpg';
import intermediateImg from '../assets/fitness2.jpg';
import advancedImg from '../assets/fitness3.jpg';

gsap.registerPlugin(ScrollTrigger);

export const FitnessHero = () => {
  return (
    <section className="mt-hero-section">
      <div className="mt-hero-bg">
        <img src={heroImg} alt="Fitness Hero" />
        <div className="mt-hero-overlay"></div>
      </div>
      <div className="mt-hero-content">
        <h1 className="mt-hero-title">FITNESS</h1>
      </div>
    </section>
  );
};

export const FitnessIntro = () => {
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
          FITNESS
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Welcome to our Fitness classes, where we focus on strength, endurance, and overall well-being. Our fitness programs are designed to challenge you and push your limits in a supportive environment. Led by experienced coaches, our classes cater to all levels, from beginners looking to get in shape to advanced athletes aiming for peak performance. Join us to transform your body and elevate your fitness journey.
        </p>
        <button className="btn-mt-discover">DISCOVER ALL CLASSES</button>
      </div>
      <div className="mt-intro-right">
        <div className="mt-clone-container">
          <img src={cloneImg} alt="Fitness Clone" className="mt-clone mt-clone-1" />
          <img src={cloneImg} alt="Fitness Clone" className="mt-clone mt-clone-2" />
          <img src={cloneImg} alt="Fitness Clone" className="mt-clone mt-clone-3" />
        </div>
      </div>
    </section>
  );
};

export const FitnessBasics = () => {
  return (
    <section className="mt-alternating-section">
      <div className="mt-alt-image">
        <img src={basicsImg} alt="Fitness Basics" />
      </div>
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          FITNESS BASICS
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Embark on your fitness journey with our basic classes, specially designed for beginners. These sessions concentrate on establishing a solid foundation through fundamental movements, proper form, and core strength. Our emphasis lies in cultivating good habits and correct technique, ensuring a strong base for your continued progress.
        </p>
      </div>
    </section>
  );
};

export const FitnessIntermediate = () => {
  return (
    <section className="mt-alternating-section reverse">
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          FITNESS INTERMEDIATE
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Advance your skills with our Intermediate Classes, tailored for members with a minimum of a few months of consistent training. These sessions introduce more complex exercises, heavier weights, and increased intensity. Working closely with our coaches, the classes offer a platform to refine your technique and build upon your foundational strength.
        </p>
      </div>
      <div className="mt-alt-image">
        <img src={intermediateImg} alt="Fitness Intermediate" />
      </div>
    </section>
  );
};

export const FitnessAdvanced = () => {
  return (
    <section className="mt-alternating-section">
      <div className="mt-alt-image">
        <img src={advancedImg} alt="Fitness Advanced" />
      </div>
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          FITNESS ADVANCED
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Our advanced classes are designed for seasoned athletes who are ready to push their limits. In these sessions, we delve into high-intensity interval training, advanced lifting techniques, and extreme conditioning. Physically demanding, these classes are for you if you want to unlock your full potential and achieve peak physical condition.
        </p>
      </div>
    </section>
  );
};
