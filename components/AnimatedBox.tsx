import React, { useEffect, useState } from 'react';
import { useIntersectionObserver, getRandomAnimation } from '../hooks/useIntersectionObserver';

interface AnimatedBoxProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  randomDelay?: boolean;
  randomAnimation?: boolean;
  index?: number;
}

export const AnimatedBox = ({
  children,
  className = '',
  delay = 0,
  randomDelay = true,
  randomAnimation = true,
  index = 0,
}: AnimatedBoxProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  const [animationClass, setAnimationClass] = useState('');
  const [animationDelay, setAnimationDelay] = useState(0);

  useEffect(() => {
    if (randomAnimation) {
      setAnimationClass(getRandomAnimation(index));
    }

    if (randomDelay) {
      setAnimationDelay(Math.random() * 0.6);
    } else {
      setAnimationDelay(delay);
    }
  }, [randomAnimation, randomDelay, delay, index]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
      style={{
        animationDuration: '0.6s',
        animationDelay: `${animationDelay}s`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  );
};
