import { ScrambleText } from './ScrambleText';
import gym1Img from '../assets/gym1.jpg';
import gym2Img from '../assets/gym2.jpg';
import gym3Img from '../assets/gym3.jpg';
import gym4Img from '../assets/gym4.jpg';
import fitnessImg from '../assets/fitness.jpg';
import mmaImg from '../assets/mma.jpg';

export const FacilitiesHero = () => {
  return (
    <section className="courses-hero">
      <div className="courses-bg">
        <img src={gym2Img} alt="Facilities Background" />
        <div className="courses-overlay"></div>
      </div>
      <ScrambleText as="h1" text="FACILITIES" className="courses-title" />
    </section>
  );
};

export const FacilitiesGallery = () => {
  const images = [
    { src: gym1Img, title: "MAIN MAT AREA" },
    { src: gym3Img, title: "HEAVY BAG STATION" },
    { src: fitnessImg, title: "STRENGTH & CONDITIONING" },
    { src: gym4Img, title: "BOXING RING" },
    { src: gym2Img, title: "RECOVERY ZONE" },
    { src: mmaImg, title: "OCTAGON" }
  ];

  return (
    <section style={{ backgroundColor: '#121414', padding: '100px 20px', color: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="about-title-new" data-text="OUR SPACE" style={{ fontSize: '48px', marginBottom: '20px', color: '#fff', fontFamily: 'var(--font-display)' }}>OUR SPACE</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px', lineHeight: '1.6', color: '#ccc' }}>
            Explore our state-of-the-art training areas. Every inch of our 1500sqm facility has been optimized for performance, technique, and brutal conditioning.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '30px' 
        }}>
          {images.map((img, idx) => (
            <div key={idx} style={{ position: 'relative', overflow: 'hidden', height: '400px' }} className="facility-card">
              <img 
                src={img.src} 
                alt={img.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  filter: 'grayscale(100%)',
                  transition: 'all 0.5s ease'
                }} 
                onMouseOver={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                backgroundColor: '#121414',
                padding: '10px 20px',
                border: '1px solid #333'
              }}>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-label)', fontSize: '14px', letterSpacing: '0.1em' }}>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
