import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import muayThaiImg from '../assets/muathai.png';
import fitnessImg from '../assets/fitness.jpg';
import mmaImg from '../assets/mma.jpg';
import boxingImg from '../assets/boxing.jpeg';
import recoveryImg from '../assets/recovery.jpeg';
import yogaImg from '../assets/yoga.jpg';
import trialTrainingImg from '../assets/tie.webp';
import lalaImg from '../assets/lala.webp';
import lala2Img from '../assets/lala2.webp';
import glovesImg from '../assets/gloves.png';

gsap.registerPlugin(ScrollTrigger);

const courses = [
  { title: "MUAY THAI", img: muayThaiImg, path: "/muay-thai" },
  { title: "FITNESS", img: fitnessImg, path: "/fitness" },
  { title: "MMA", img: mmaImg, path: "/mma" },
  { title: "YOGA", img: yogaImg, path: "/yoga" },
  { title: "RECOVERY", img: recoveryImg, path: "/recovery" },
  { title: "BOXING", img: boxingImg, path: "/boxing" },
];

const useReveal = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(el, 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        }
      }
    );
  }, []);
  return ref;
};

export const Classes = ({ showHeader = true }: { showHeader?: boolean }) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current.querySelectorAll('.class-card'),
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, 
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }
  }, []);

  return (
    <section className="classes-section" ref={sectionRef}>
      <div className="top-gradient-bar"></div>
      <div className="classes-container">
        {showHeader && (
          <div className="classes-header">
            <h2 className="classes-title">OUR CLASSES</h2>
            <p className="classes-desc">
              On over 1500 m², we offer you a broad spectrum of martial arts, fitness, and recovery. You decide for yourself whether it's Mixed Martial Arts, Muay Thai, Brazilian Jiu-Jitsu, boxing, or wrestling – at GYMME, you'll find everything a martial artist could wish for. Whether it's for a first trial training or as an ambitious competitor, we have the right course for you. For your active recovery, you can also attend our yoga classes or book a relaxing massage.
            </p>
          </div>
        )}
        <div className="classes-grid">
          {courses.map((course, idx) => (
            <div key={idx} className="class-card">
              <img src={course.img} alt={course.title} className="class-img" />
              <h3 className="class-name">{course.title}</h3>
              <Link to={course.path} className="class-learn-more">LEARN MORE</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TrialTraining = () => {
  return (
    <div className="trial-wrapper" id="trial-section-wrapper">
      <section className="trial-section">
        <div className="trial-content">
          <h2 className="trial-title">
            <span className="trial-title-gradient">TRIAL</span> TRAINING
          </h2>
          <div className="trial-text">
            <p>You want to try out a free training session with us? No problem! Just come by during our regular opening hours and talk to our team at the desk.</p>
            <p>There, we'll advise you, find a suitable date together, and give you a tour of the gym.</p>
            <p>Please note that due to high demand, we can rarely offer same-day appointments. For additional useful information about your trial training, please visit our <a href="#">Helpcenter</a>.</p>
          </div>
        </div>
        <div className="trial-img-container">
          <img src={trialTrainingImg} alt="Trial Training" className="clone clone-1" />
          <img src={trialTrainingImg} alt="Trial Training" className="clone clone-2" />
          <img src={trialTrainingImg} alt="Trial Training" className="clone clone-3" />
        </div>
      </section>
    </div>
  );
};

export const Divider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (containerRef.current && imgRef.current) {
        // Parallax effect via object-position to ensure the head stays visible
        gsap.fromTo(imgRef.current,
          { objectPosition: "50% 0%" },
          {
            objectPosition: "50% 50%",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      }
    });

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
        src={lalaImg} 
        alt="Divider Image" 
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.1)', position: 'absolute', top: 0, left: 0, zIndex: 1 }} 
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,26,26,1) 0%, rgba(26,26,26,0) 20%, rgba(26,26,26,0) 80%, rgba(26,26,26,1) 100%)', pointerEvents: 'none', zIndex: 2 }}></div>
    </section>
  );
};

export const About = () => {
  const ref = useReveal();
  return (
    <section className="gloves-section" id="about-section-wrapper" ref={ref}>
      <div className="gloves-container">
        
        <div className="gloves-image-wrapper">
          <div className="gloves-gradient-bar"></div>
          <img src={glovesImg} alt="Gym Gloves" className="gloves-image" />
        </div>
        
        <div className="gloves-content-wrapper">
          <p className="gloves-text">
            We founded the gym in 2010 and have been based at Moritzplatz ever since. Originally starting as a pure MMA gym, over time, we have evolved into a hub for various martial arts with a focus on MMA, BJJ, and Muay Thai.
          </p>
          <p className="gloves-text">
            Seven days a week, our team and community ensure a vast array of activities through over 140 classes. Our fitness area and spacious mat areas provide opportunities for independent strength and technique training or sparring sessions with friends.
          </p>

          <button 
            className="btn-get-to-know" 
            onClick={() => {
              const gymSection = document.getElementById('the-gym-section');
              if (gymSection) {
                gymSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            GET TO KNOW THE GYM
          </button>
        </div>
        
      </div>
    </section>
  );
};

export const Divider2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (containerRef.current && imgRef.current) {
        // Parallax effect via object-position to ensure the head stays visible
        gsap.fromTo(imgRef.current,
          { objectPosition: "50% 0%" },
          {
            objectPosition: "50% 50%",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      }
    });

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
        src={lala2Img} 
        alt="Divider Image 2" 
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.1)', position: 'absolute', top: 0, left: 0, zIndex: 1 }} 
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,26,26,1) 0%, rgba(26,26,26,0) 20%, rgba(26,26,26,0) 80%, rgba(26,26,26,1) 100%)', pointerEvents: 'none', zIndex: 2 }}></div>
    </section>
  );
};

export const Events = () => {
  const ref = useReveal();
  const events = [
    { date: "30.5.26", title: "Intro to Martial Arts for FLINTA*", desc: "Das Wochenendseminar von und für FLINTA*s zur Einführung in den Kampfsport.", img: "https://lh3.googleusercontent.com/aida/ADBb0uhBQ5a_mF4kAuD4tg0RMB7g74JS4TXMFQKiNp9etCj_OfKv1Ab_1iLFW9LROGcV1W2iSTXJXjsmrYO5I0wjOOWrtzsFn4gDeulnqn7zOECq2ajXiCjymlM1TweQd6CavtvPWYqxleK9CSAqZ_uuWd1oc9SyWA23nXtIVq51K9d_b5aMphP_SmpxY0LfFLHdRrIHzxcSI6JXWR679RTOqUz4btM0PrtGy1brtCpB8tdoFNIywVSTkaFiIu0" },
    { date: "Sonntags", title: "Gracie Academy Berlin: Open Mat", desc: "Open Mat für Grappling und BJJ im Herzen von Kreuzberg.", img: "https://lh3.googleusercontent.com/aida/ADBb0ui41Wr6Y3Ox_somKXFBkEESwWrlf6qlMwIOz4XkDrmgPM68lqGbZioEiaSNGuVAmHW8-RYypFKuYM8POXxAUCIgYRBvp6DUJNWTjFpMuahciuBAPZoq4W1QQ1lsvxea8HpkY5LvM7L-wW6ZLQqwI809AUYFkmZVA-8Ocnd_-xGPVLNSJJ6qfTd2ndlX8opV4jJgHBBfjEmvcKy9ksCrdzEHHyKYQq27zTfcG6hYgSxpTlwSbyCU6FQRGA" },
    { date: "31.8.26", title: "Kardia - Muay Thai Sparring", desc: "Fortgeschrittenes Muay Thai Sparring für ambitionierte Kämpfer.", img: "https://lh3.googleusercontent.com/aida/ADBb0ugo4WIJkFQz4r-T_GKnA8kH4cGtwMqYdwW7LLvUOV89d79zbfmQupA6AKbZCcT-OHKqmmW_nUy98i7B4R3zfFFYPboRMLDtfb5bqOTmVWDR0fjJHGHbXITaMM7ucVRcqQsOjt8CLPT19ouYEEovg80nIVIj9EZh4XQahRtVGUMnohVJfw5oMRbBuxFr6GJaCzVMFp654MSf7-s6ZMczCJ0OCI0JbykYSZiP2MCRvcco0C1bUE-FQdvwHQw" },
  ];

  return (
    <div className="events-section-bg">
      <section className="section container" ref={ref}>
        <div className="events-header">
          <h2 className="font-display-lg font-headline-lg-mobile md:text-headline-lg uppercase">events</h2>
          <a href="#" className="events-link">Alle Events</a>
        </div>
        <div className="events-grid">
          {events.map((ev, i) => (
            <div key={i} className="event-card">
              <div className="event-img-wrapper">
                <img src={ev.img} alt={ev.title} />
              </div>
              <span className="event-date">{ev.date}</span>
              <h3 className="font-headline-lg-mobile event-title" style={{fontSize: '24px'}}>{ev.title}</h3>
              <p className="font-body-md event-desc">{ev.desc}</p>
              <div className="event-more">
                mehr erfahren <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
