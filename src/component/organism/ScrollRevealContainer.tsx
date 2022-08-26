import { useRef, useEffect } from 'react';
import scrollReveal from 'scrollreveal';

export const ScrollRevealContainer: React.FC = ({ children }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 400,
        opacity: 0,
        distance: '40px',
        origin: 'left',
      });
  }, [sectionRef]);

  return <section ref={sectionRef}>{children}</section>;
};
