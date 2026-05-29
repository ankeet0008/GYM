import { useEffect, useState } from 'react';
import gsap from 'gsap';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface ScrambleTextProps {
  text: string | string[];
  className?: string;
  as?: React.ElementType;
}

export const ScrambleText = ({ text, className = "", as: Component = "div" }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState<string[]>([]);
  const lines = Array.isArray(text) ? text : [text];

  useEffect(() => {
    // Initial state before animation starts
    setDisplayText(lines.map(line => line.replace(/[^\s]/g, () => CHARS[Math.floor(Math.random() * CHARS.length)])));

    const obj = { progress: 0 };
    
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        progress: 1,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          const newLines = lines.map((line) => {
            return line.split("").map((char, index) => {
              if (char === " ") return " ";
              
              // We stagger the resolution of characters from left to right
              const charRevealThreshold = (index / line.length) * 0.7; 
              
              // If the overall progress passes the character's threshold, resolve it
              if (obj.progress > charRevealThreshold + 0.3) {
                return char;
              }
              // Otherwise, keep scrambling
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            }).join("");
          });
          setDisplayText(newLines);
        },
        onComplete: () => {
          setDisplayText(lines);
        }
      });
    });

    return () => ctx.revert();
  }, [text]);

  return (
    <Component className={className}>
      {displayText.map((line, i) => (
        <span key={i} style={{ display: 'block' }}>
          {line}
        </span>
      ))}
    </Component>
  );
};
