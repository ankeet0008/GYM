import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrambleText } from './ScrambleText';
import tie3Img from '../assets/ties3.jpg';

const plans = [
  {
    name: "GYMME S",
    basePrice: 2500,
    classesPerMonth: 4,
    badge: null
  },
  {
    name: "GYMME M",
    basePrice: 3500,
    classesPerMonth: 8,
    badge: null
  },
  {
    name: "GYMME L",
    basePrice: 4500,
    classesPerMonth: 12,
    badge: "BEST SELLER"
  },
  {
    name: "GYMME FLAT",
    basePrice: 5500,
    classesPerMonth: "Unlimited",
    badge: null
  }
];

export const PricingHero = () => {
  const [duration, setDuration] = useState<3 | 6 | 12 | 24>(3);
  const [isStudent, setIsStudent] = useState(false);

  const getPrice = (basePrice: number) => {
    let price = basePrice;
    if (duration === 6) price -= 300;
    if (duration === 12) price -= 600;
    if (duration === 24) price -= 900;
    if (isStudent) price -= 200;
    return price;
  };

  return (
    <>
      <section className="courses-hero">
        <div className="courses-bg">
          <img src={tie3Img} alt="Pricing Background" />
          <div className="courses-overlay"></div>
        </div>
        <ScrambleText as="h1" text="PRICING" className="courses-title" />
      </section>

      <section className="pricing-section">
        <div className="container">
          <h2 className="pricing-title split-text" data-text="MEMBERSHIPS">MEMBERSHIPS</h2>
          
          <div className="pricing-controls">
            <div className="duration-tabs">
              {[3, 6, 12, 24].map((m) => (
                <button 
                  key={m} 
                  className={`duration-btn ${duration === m ? 'active' : ''}`}
                  onClick={() => setDuration(m as 3 | 6 | 12 | 24)}
                >
                  {m} MONTHS
                </button>
              ))}
            </div>
            
            <div className="student-toggle-wrapper">
              <span className="student-label">PUPILS/STUDENTS</span>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={isStudent} 
                  onChange={(e) => setIsStudent(e.target.checked)} 
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          <div className="pricing-grid">
            {plans.map((plan, idx) => (
              <div key={idx} className="pricing-card">
                <div className="pricing-card-header">
                  {plan.badge && <div className="badge">{plan.badge}</div>}
                  <h3 className="plan-name split-text" data-text={plan.name}>{plan.name}</h3>
                  <div className="plan-price">
                    <span className="currency">₹</span>
                    <span className="amount">{getPrice(plan.basePrice)}</span>
                    <span className="period">/ month</span>
                  </div>
                </div>
                
                <div className="pricing-card-body">
                  <div className="feature-row">
                    <span className="feature-label">Minimum contract duration:</span>
                    <span className="feature-value">{duration} months</span>
                  </div>
                  <div className="feature-row">
                    <span className="feature-label">Registration fee:</span>
                    <span className="feature-value">₹999</span>
                  </div>
                  <div className="feature-row">
                    <span className="feature-label">Extension:</span>
                    <span className="feature-value">None</span>
                  </div>
                  <div className="feature-row">
                    <span className="feature-label">Notice period:</span>
                    <span className="feature-value">None</span>
                  </div>
                  <div className="feature-row highlight">
                    <span className="feature-label">Course participations per month</span>
                    <span className="feature-value">{plan.classesPerMonth}</span>
                  </div>
                  <div className="feature-row">
                    <span className="feature-label">Independent training:</span>
                    <span className="feature-value">Unlimited</span>
                  </div>
                  <Link 
                    to="/login" 
                    className="btn-get-to-know" 
                    style={{ display: 'block', textAlign: 'center', marginTop: '20px', textDecoration: 'none' }}
                  >
                    REGISTER
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
