import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import tieImg from '../assets/ties.webp';
import lala3Img from '../assets/lala3.webp';

export const CoursesHero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(textRef.current, 
      { opacity: 0, scale: 0.9, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section className="courses-hero">
      <div className="courses-bg">
        <img src={tieImg} alt="Courses Background" />
        <div className="courses-overlay"></div>
      </div>
      <h1 ref={textRef} className="courses-title">COURSES</h1>
    </section>
  );
};



export const Divider3 = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        {
          objectPosition: "50% 0%",
        },
        {
          objectPosition: "50% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      className="divider-section" 
      ref={containerRef} 
      style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', padding: 0 }}
    >
      <img 
        ref={imgRef} 
        src={lala3Img} 
        alt="Divider Image" 
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.1)', position: 'absolute', top: 0, left: 0, zIndex: 1 }} 
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,26,26,1) 0%, rgba(26,26,26,0) 20%, rgba(26,26,26,0) 80%, rgba(26,26,26,1) 100%)', pointerEvents: 'none', zIndex: 2 }}></div>
    </section>
  );
};
