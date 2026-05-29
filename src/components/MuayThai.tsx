import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import heroImg from '../assets/maithai2.webp'; // Using this for hero
import cloneImg from '../assets/muathai5.png'; // Woman kicking for triple clone
import basicsImg from '../assets/muathai.png';
import intermediateImg from '../assets/muathai3.webp';
import advancedImg from '../assets/muathai4.jpg';

gsap.registerPlugin(ScrollTrigger);

export const MuayThaiHero = () => {
  return (
    <section className="mt-hero-section">
      <div className="mt-hero-bg">
        <img src={heroImg} alt="Muay Thai Hero" />
        <div className="mt-hero-overlay"></div>
      </div>
      <div className="mt-hero-content">
        <h1 className="mt-hero-title">KARDIA<br/>MUAY THAI</h1>
      </div>
    </section>
  );
};

export const MuayThaiIntro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // We can add simple animations if needed
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-intro-section" ref={containerRef}>
      <div className="mt-intro-left">
        <h2 className="mt-section-title">
          KARDIA MUAY THAI
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Welcome to Kardia Muay Thai, where we practice the ancient art of Muay Thai, also known as Thai Boxing or as the art of 8 limbs. Originating from Thailand, Muay Thai is a striking martial art renowned for its dynamic techniques and powerful kicks. Led by experienced instructors, our school is a welcoming space for enthusiasts of all levels, from beginners to seasoned practitioners. Whether you just want to get in shape while having fun or learn Muay Thai to test yourselves against others in a competitive setting, Kardia Muay Thai is the place for you.
        </p>
        <button className="btn-mt-discover">DISCOVER ALL CLASSES</button>
      </div>
      <div className="mt-intro-right">
        <div className="mt-clone-container">
          <img src={cloneImg} alt="Kicking" className="mt-clone mt-clone-1" />
          <img src={cloneImg} alt="Kicking" className="mt-clone mt-clone-2" />
          <img src={cloneImg} alt="Kicking" className="mt-clone mt-clone-3" />
        </div>
      </div>
    </section>
  );
};

export const MuayThaiBasics = () => {
  return (
    <section className="mt-alternating-section">
      <div className="mt-alt-image">
        <img src={basicsImg} alt="Muay Thai Basics" />
      </div>
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          MUAY THAI BASICS
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Embark on your Muay Thai journey with Kardia Muay Thai's basics classes, especially designed for beginners. These sessions concentrate on establishing a solid foundation through fundamental kicks, punches, defenses, and simple combinations. Our emphasis lies in cultivating good footwork and correct technique, ensuring a strong base for your Muay Thai practice. Engaging in pairs, we utilize pads and heavy bags, creating a dynamic and practical learning environment.
        </p>
      </div>
    </section>
  );
};

export const MuayThaiIntermediate = () => {
  return (
    <section className="mt-alternating-section reverse">
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          MUAY THAI INTERMEDIATE
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Advance your Muay Thai skills with Kardia Muay Thai's Intermediate Classes, tailored for practitioners with a minimum of 8 months of consistent training. These sessions emphasize complex footwork, and introduce more sophisticated combinations and dynamic techniques. Working closely with partners, the classes offer a platform to refine your skills through practical application before moving up into advanced classes and competitive settings.
        </p>
      </div>
      <div className="mt-alt-image">
        <img src={intermediateImg} alt="Muay Thai Intermediate" />
      </div>
    </section>
  );
};

export const MuayThaiAdvanced = () => {
  return (
    <section className="mt-alternating-section">
      <div className="mt-alt-image">
        <img src={advancedImg} alt="Muay Thai Advanced" />
      </div>
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          MUAY THAI ADVANCED
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Our Muay Thai advanced classes are designed for practitioners with a minimum of 1.5 years of consistent training. In these sessions, we delve into jumping techniques, sweeps, free sparring and highly complex combinations playing with rhythm and timing changes. Physically demanding, these classes not only refine your technique but also serve as excellent preparation for those eyeing competitions. These classes are for you if you want to push your limits and unlock the full potential of your Muay Thai skills.
        </p>
      </div>
    </section>
  );
};
