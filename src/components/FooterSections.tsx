import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import boxImg from '../assets/box.webp';

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

export const FaqContact = () => {
  const ref = useReveal();
  return (
    <section className="faq-contact-new" ref={ref}>
      <div className="faq-content-new">
        <h2 className="faq-title-new">
          <span data-text="FAQ &">FAQ &</span><br />
          <span data-text="CONTACT">CONTACT</span>
        </h2>
        
        <div className="faq-text-new">
          <p>Do you have questions about the gym, the classes, the trial training, or your membership?</p>
          <p>Visit our <a href="#">Helpcenter</a>, browse through our FAQs, or let us assist you through our chat.</p>
          <br />
          <p>If your questions aren't answered in our Helpcenter, send us an E-Mail.</p>
          <br />
          <p>For business related questions, workshop or other collaborations, click on the "Collaborations" button below.</p>
          <br />
          <p>We are happy to help!</p>
        </div>

        <div className="faq-buttons-new">
          <button className="btn-faq">HELPCENTER</button>
          <button className="btn-faq">E-MAIL US</button>
          <button className="btn-faq">COLLABORATIONS</button>
        </div>
      </div>
      <div className="faq-map-new">
        <img 
          src={boxImg} 
          alt="Contact/Boxing" 
        />
      </div>
    </section>
  );
};

export const Shop = () => {
  const ref = useReveal();
  const products = [
    { cat: "T-SHIRT", name: "Fenriz Classic Tee", price: "29,00 €" },
    { cat: "HOODIE", name: "Fenriz Logo Hoodie", price: "59,00 €" },
    { cat: "CAP", name: "Organic Dad Hat", price: "25,00 €" },
    { cat: "BAG", name: "Gym Duffle Bag", price: "45,00 €" }
  ];

  return (
    <div className="shop-section-bg">
      <section className="container" ref={ref}>
        <div className="shop-header">
          <div>
            <h2 className="font-display-lg font-headline-lg-mobile md:text-headline-lg uppercase mb-2">shop</h2>
            <p className="font-body-md" style={{color: 'var(--color-secondary)'}}>Fenriz, Kardia oder Gracie Merch gefällig?</p>
          </div>
          <button className="btn-primary">ZUM SHOP</button>
        </div>
        <div className="shop-grid">
          {products.map((p, i) => (
            <div key={i} className="shop-item">
              <div className="shop-img-box">
                <div className="shop-img-inner">{p.cat}</div>
              </div>
              <h4>{p.name}</h4>
              <p>{p.price}</p>
              <button>Jetzt bestellen</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="footer-new">
      <div className="footer-logo-new">
        <span data-text="GYMME">GYMME</span>
      </div>
      
      <div className="footer-cols-new">
        <div className="footer-col-new">
          <h5>ADDRESS</h5>
          <p>Gymme Gym<br/>Lobeckstraße 36<br/>10969 Berlin</p>
        </div>
        <div className="footer-col-new">
          <h5>OPENING HOURS:*</h5>
          <div className="hours-grid">
            <span>Mo-Fr</span><span>07 AM - 10 PM</span>
            <span>Saturday</span><span>10 AM - 4 PM</span>
            <span>Sunday</span><span>10 AM - 5 PM</span>
          </div>
          <p className="hours-note">* Opening hours can vary<br/>due to holidays or events</p>
        </div>
        <div className="footer-col-new">
          <h5>FOLLOW US:</h5>
          <div className="footer-social-new">
            <a href="#">IG</a>
            <a href="#">FB</a>
            <a href="#">YT</a>
          </div>
        </div>
      </div>

      <div className="footer-links-main">
        <a href="/courses" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 900, letterSpacing: '1px' }}>COURSES</a>
        <a href="#">PRICING</a>
        <a href="#">ABOUT US</a>
        <a href="#">COURSE PLAN</a>
        <a href="#">MEMBER AREA</a>
      </div>

      <div className="footer-links-sub">
        <a href="#">DATA PRIVACY</a>
        <a href="#">IMPRINT</a>
      </div>

      <div className="footer-copyright">
        Copyright Gymme Trainingszentrum GmbH 2025
      </div>
    </footer>
  );
};
