import { ScrambleText } from './ScrambleText';
import tie4Img from '../assets/ties4.jpg';
import teamImg from '../assets/team.jpg';
import gym1Img from '../assets/gym1.jpg';
import gym2Img from '../assets/gym2.jpg';
import gym3Img from '../assets/gym3.jpg';
import gym4Img from '../assets/gym4.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const AboutHero = () => {
  return (
    <section className="courses-hero">
      <div className="courses-bg">
        <img src={tie4Img} alt="About Us Background" />
        <div className="courses-overlay"></div>
      </div>
      <ScrambleText as="h1" text="ABOUT US" className="courses-title" />
    </section>
  );
};

export const OurCommunity = () => {
  return (
    <>
      <section className="about-section-new" style={{ backgroundColor: '#121414', color: '#fff' }}>
        <div className="about-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto', gap: '30px', padding: '100px 20px' }}>
          <h2 className="about-title-new" data-text="OUR COMMUNITY" style={{ fontSize: '64px', marginBottom: '10px', color: '#fff', fontFamily: 'var(--font-display)' }}>OUR COMMUNITY</h2>
          <div className="about-text-new">
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fff' }}>
              We are more than just a gym; we are a collective of passionate martial artists, fitness enthusiasts, and everyday warriors. From beginners taking their first steps on the mat to seasoned professionals preparing for their next bout, our community is built on mutual respect, relentless dedication, and the shared love of the sport.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', marginTop: '20px', color: '#fff' }}>
              When you train with us, you're not just a member—you're family. We push each other, we learn from each other, and most importantly, we grow together.
            </p>
          </div>
        </div>
      </section>

      <section style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <img 
          src={teamImg} 
          alt="Our Team" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            filter: 'grayscale(100%) contrast(1.2)' 
          }} 
        />
      </section>
    </>
  );
};

export const TheGymSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const gymImages = [gym1Img, gym2Img, gym3Img, gym4Img];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gymImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="the-gym-section" className="gloves-section" style={{ backgroundColor: '#f4f4f4', padding: '100px 20px' }}>
      <div className="gloves-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', gap: '50px', flexWrap: 'wrap' }}>
        
        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative', overflow: 'hidden', height: '500px', borderRadius: '8px' }}>
          {gymImages.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`Gym Facility ${index + 1}`} 
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                filter: 'grayscale(100%)',
                opacity: currentImageIndex === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }} 
            />
          ))}
        </div>
        
        <div className="gloves-content-wrapper" style={{ flex: '1 1 400px', textAlign: 'left' }}>
          <h2 className="about-title-new" data-text="THE GYM" style={{ fontSize: '48px', marginBottom: '20px', color: '#121414', fontFamily: 'var(--font-display)' }}>THE GYM</h2>
          
          <p className="gloves-text" style={{ marginBottom: '20px' }}>
            Spread across a massive 1500sqm facility, our gym is built to provide everything a martial artist or fitness enthusiast needs. We feature multiple sprawling mat areas for grappling, a full-sized boxing ring, and heavy bag stations.
          </p>
          <p className="gloves-text">
            For strength and conditioning, our fully-equipped lifting area includes squat racks, Olympic weights, kettlebells, and functional fitness rigs to help you reach your peak physical potential.
          </p>

          <Link to="/facilities" className="btn-get-to-know" style={{ marginTop: '30px', display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>
            VIEW FACILITIES
          </Link>
        </div>
        
      </div>
    </section>
  );
};
