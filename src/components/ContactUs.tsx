import { ScrambleText } from './ScrambleText';
import { Link } from 'react-router-dom';
import homeBg from '../assets/home page.webp';

export const ContactHero = () => {
  return (
    <section className="courses-hero">
      <div className="courses-bg">
        <img src={homeBg} alt="Contact Background" />
        <div className="courses-overlay"></div>
      </div>
      <ScrambleText as="h1" text="CONTACT" className="courses-title" />
    </section>
  );
};

export const ContactForm = () => {
  return (
    <section style={{ backgroundColor: '#121414', padding: '100px 20px', color: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
        
        <div style={{ flex: '1 1 400px' }}>
          <h2 className="about-title-new" data-text="GET IN TOUCH" style={{ fontSize: '48px', marginBottom: '30px', color: '#fff', fontFamily: 'var(--font-display)' }}>
            GET IN TOUCH
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#ccc', marginBottom: '40px' }}>
            Have questions about our classes, pricing, or want to drop in for a trial? Fill out the form or reach out to us directly. We are always here to help you get started on your martial arts journey.
          </p>
          
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '14px', fontFamily: 'var(--font-label)', letterSpacing: '0.1em', marginBottom: '5px' }}>ADDRESS</h4>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#ccc' }}>Moritzplatz, 10969 Berlin, Germany</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '14px', fontFamily: 'var(--font-label)', letterSpacing: '0.1em', marginBottom: '5px' }}>EMAIL</h4>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#ccc' }}>info@gymme.com</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h4 style={{ fontSize: '14px', fontFamily: 'var(--font-label)', letterSpacing: '0.1em', marginBottom: '5px' }}>PHONE</h4>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#ccc' }}>+49 30 12345678</p>
          </div>

          <div>
            <h4 style={{ fontSize: '14px', fontFamily: 'var(--font-label)', letterSpacing: '0.1em', marginBottom: '15px' }}>READY TO JOIN?</h4>
            <Link 
              to="/login" 
              className="btn-get-to-know" 
              style={{ display: 'inline-block', textDecoration: 'none', backgroundColor: 'transparent', border: '1px solid #fff', color: '#fff' }}
            >
              REGISTER NOW
            </Link>
          </div>
        </div>

        <div style={{ flex: '1 1 400px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="YOUR NAME" 
              style={{ padding: '15px 20px', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '16px', outline: 'none' }} 
            />
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              style={{ padding: '15px 20px', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '16px', outline: 'none' }} 
            />
            <select style={{ padding: '15px 20px', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '16px', outline: 'none', appearance: 'none' }}>
              <option value="">HOW CAN WE HELP?</option>
              <option value="trial">Trial Training</option>
              <option value="membership">Membership Info</option>
              <option value="other">Other</option>
            </select>
            <textarea 
              placeholder="YOUR MESSAGE" 
              rows={5}
              style={{ padding: '15px 20px', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '16px', outline: 'none', resize: 'none' }} 
            />
            <button 
              className="btn-get-to-know" 
              style={{ alignSelf: 'flex-start', marginTop: '10px', backgroundColor: '#fff', color: '#121414', padding: '15px 40px' }}
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
