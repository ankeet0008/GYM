import { createContext, useContext, useRef, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const BAR_COUNT = 20;

interface TransitionContextType {
  navigateTo: (path: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

export const BarTransitionProvider = ({ children }: { children: ReactNode }) => {
  const barsRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = useCallback((path: string) => {
    if (isAnimating.current) return;
    if (path === location.pathname) return;
    isAnimating.current = true;

    const bars = barsRef.current?.querySelectorAll('.transition-bar');
    if (!bars || bars.length === 0) {
      navigate(path);
      isAnimating.current = false;
      return;
    }

    // Reset bars
    gsap.set(bars, { scaleY: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    // Bars slam shut (top to bottom)
    tl.to(bars, {
      scaleY: 1,
      duration: 0.35,
      ease: 'power3.inOut',
      stagger: 0.04,
      transformOrigin: 'top',
    })
    // Navigate in the blackout
    .call(() => {
      navigate(path);
      window.scrollTo(0, 0);
    })
    // Small pause while blacked out
    .to({}, { duration: 0.15 })
    // Bars open (bottom to top)
    .to(bars, {
      scaleY: 0,
      duration: 0.35,
      ease: 'power3.inOut',
      stagger: 0.03,
      transformOrigin: 'bottom',
    });
  }, [navigate, location.pathname]);

  // Intercept all <a> clicks that are internal links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Skip external links, hash links, and # links
      if (href.startsWith('http') || href === '#' || href.startsWith('mailto:')) return;

      // Skip if it's the same page
      if (href === location.pathname) return;

      e.preventDefault();
      navigateTo(href);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigateTo, location.pathname]);

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}
      {/* The bars overlay */}
      <div className="bar-transition-overlay" ref={barsRef}>
        {Array.from({ length: BAR_COUNT }).map((_, i) => (
          <div key={i} className="transition-bar" />
        ))}
      </div>
    </TransitionContext.Provider>
  );
};
