'use client';

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA?: any;
  }
}

interface VantaProps {
  theme: 'light' | 'dark';
  children: React.ReactNode;
}

const VantaTopologyBackground: React.FC<VantaProps> = ({ theme, children }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null); // useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.head.appendChild(script);
      });
    };

    const initVanta = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.topology.min.js');

        if (window.VANTA && vantaRef.current) {
          if (vantaEffect.current) {
            vantaEffect.current.destroy();
          }

          vantaEffect.current = window.VANTA.TOPOLOGY({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x89964e,
            backgroundColor: theme === 'dark' ? 0x2222 : 0xfafafa
          });
        }
      } catch (error) {
        console.error('Erreur lors du chargement de Vanta:', error);
      }
    };

    initVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [theme]); // Re-exécute si le thème change

  return (
    <div
      ref={vantaRef}
      className="relative w-full h-full min-h-screen"
      style={{ position: 'relative' }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VantaTopologyBackground;
