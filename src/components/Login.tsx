import { ScrambleText } from './ScrambleText';
import homeBg from '../assets/home page.webp';

export const LoginHero = () => {
  return (
    <section className="courses-hero">
      <div className="courses-bg">
        <img src={homeBg} alt="Login Background" />
        <div className="courses-overlay"></div>
      </div>
      <ScrambleText as="h1" text="MEMBER LOGIN" className="courses-title" />
    </section>
  );
};

export const LoginForm = () => {
  return (
    <section style={{ backgroundColor: '#121414', padding: '100px 20px', color: '#fff', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="about-title-new" data-text="WELCOME BACK" style={{ fontSize: '48px', marginBottom: '40px', color: '#fff', fontFamily: 'var(--font-display)', textAlign: 'center' }}>
          WELCOME BACK
        </h2>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ fontFamily: 'var(--font-label)', fontSize: '14px', letterSpacing: '0.1em' }}>EMAIL ADDRESS</label>
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              style={{ padding: '15px 20px', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '16px', outline: 'none' }} 
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ fontFamily: 'var(--font-label)', fontSize: '14px', letterSpacing: '0.1em' }}>PASSWORD</label>
            <input 
              type="password" 
              placeholder="ENTER YOUR PASSWORD" 
              style={{ padding: '15px 20px', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '16px', outline: 'none' }} 
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-10px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" style={{ accentColor: '#121414', width: '16px', height: '16px' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#ccc' }}>Remember me</span>
            </label>
            <a href="#" style={{ color: '#ccc', fontFamily: 'var(--font-body)', fontSize: '14px', textDecoration: 'underline' }}>Forgot Password?</a>
          </div>

          <button 
            className="btn-get-to-know" 
            style={{ width: '100%', backgroundColor: '#fff', color: '#121414', padding: '20px', fontSize: '16px', marginTop: '10px', textAlign: 'center' }}
          >
            LOGIN
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'var(--font-body)', color: '#ccc', fontSize: '14px' }}>
          Not a member yet? <a href="/pricing" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 600 }}>Join GYMME today</a>
        </p>
      </div>
    </section>
  );
};
