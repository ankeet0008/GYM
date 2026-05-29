import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import heroImg from '../assets/recovery2.webp'; 
import cloneImg from '../assets/recovery3.jpg'; 
import basicsImg from '../assets/recovery.jpeg';
import intermediateImg from '../assets/recovery4.jpg';
import advancedImg from '../assets/recovery5.jpg';

gsap.registerPlugin(ScrollTrigger);

export const RecoveryHero = () => {
  return (
    <section className="mt-hero-section">
      <div className="mt-hero-bg">
        <img src={heroImg} alt="Recovery Hero" />
        <div className="mt-hero-overlay"></div>
      </div>
      <div className="mt-hero-content">
        <h1 className="mt-hero-title">RECOVERY</h1>
      </div>
    </section>
  );
};

export const RecoveryIntro = () => {
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
          RECOVERY
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Through our network we can offer personalized recovery sessions in our massage and recovery room. The 1:1 services that we can arrange include massages, physical therapy, specialized back training, and recovery training. While these services are not part of our memberships, they can easily be booked by getting you in touch with our network of experts. For more details and contact information, please consult our staff or refer to our FAQs.
        </p>
        <button className="btn-mt-discover">DISCOVER COURSES</button>
      </div>
      <div className="mt-intro-right">
        <img 
          src={cloneImg} 
          alt="Recovery" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', objectPosition: 'center' }} 
        />
      </div>
    </section>
  );
};

export const RecoveryMassages = () => {
  return (
    <section className="mt-alternating-section">
      <div className="mt-alt-image">
        <img src={basicsImg} alt="Massages" />
      </div>
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          MASSAGES
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Beyond the immediate relief of tension and stress, regular massages contribute to improved flexibility, muscle recovery, and overall well-being. For martial artists, this translates to enhanced agility, reduced risk of injury, and optimized performance on the training mat. Our skilled massagists tailor each session to target specific needs, promoting circulation, and alleviating muscle soreness.
        </p>
      </div>
    </section>
  );
};

export const RecoveryPhysicalTherapy = () => {
  return (
    <section className="mt-alternating-section reverse">
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          PHYSICAL THERAPY
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          We can get you in touch with experienced therapists who will employ targeted interventions to address injuries, enhance mobility, and optimize overall performance. Through personalized rehabilitation plans, they aim to alleviate pain, improve strength, and restore functionality, allowing martial artists to overcome physical challenges and excel in their practice. Whether you're recovering from an injury or seeking preventative care, the physical therapists in our network support your martial arts journey with precision and expertise.
        </p>
      </div>
      <div className="mt-alt-image">
        <img src={intermediateImg} alt="Physical Therapy" />
      </div>
    </section>
  );
};

export const RecoveryTraining = () => {
  return (
    <section className="mt-alternating-section">
      <div className="mt-alt-image">
        <img src={advancedImg} alt="Recovery Training" />
      </div>
      <div className="mt-alt-content">
        <h2 className="mt-section-title">
          RECOVERY TRAINING
          <div className="mt-gradient-bar"></div>
        </h2>
        <p className="mt-desc">
          Recovery training is a crucial step in the journey back to peak performance after an injury. This recovery training focuses on targeted exercises to address potential injuries or weakness resulting from prolonged breaks. Gradually rebuilding muscle strength, flexibility, and stability, ensures a safer and more sustainable return to martial arts practice. This thoughtful recovery process allows you to regain confidence before stepping back onto the training mat.
        </p>
      </div>
    </section>
  );
};
