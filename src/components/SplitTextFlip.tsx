import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SplitTextFlipProps {
  text: string | string[];
  className?: string;
  as?: React.ElementType;
}

export const SplitTextFlip = ({ text, className = "", as: Component = "div" }: SplitTextFlipProps) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const letters = containerRef.current.querySelectorAll('.char');
    
    gsap.fromTo(letters, 
      { rotationX: -90, opacity: 0, y: 20 },
      { 
        rotationX: 0, 
        opacity: 1, 
        y: 0,
        duration: 0.8, 
        stagger: 0.05, 
        ease: "back.out(1.7)",
        delay: 0.2
      }
    );
  }, []);

  const lines = Array.isArray(text) ? text : [text];

  return (
    <Component ref={containerRef} className={className} style={{ perspective: '1000px' }}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} style={{ display: 'block' }}>
          {line.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
              {word.split("").map((char, charIndex) => (
                <span 
                  key={charIndex} 
                  className="char" 
                  style={{ display: 'inline-block', transformOrigin: '50% 50% -20px' }}
                >
                  {char}
                </span>
              ))}
              {wordIndex !== line.split(" ").length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
};
