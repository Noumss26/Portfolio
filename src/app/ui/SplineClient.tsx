'use client';

import { useEffect, useState } from 'react';

export default function SplineClient() {
  const [Spline, setSpline] = useState<any>(null);

  useEffect(() => {
    const loadSpline = async () => {
      try {
        const splineModule = await import('@splinetool/react-spline');
        setSpline(() => splineModule.default || splineModule);
      } catch (error) {
        console.error('Error loading Spline:', error);
      }
    };

    loadSpline();
  }, []);

  if (!Spline) {
    return (
      <div className="w-[65vh] h-[60vh] flex items-center justify-center">
        <div>Loading 3D scene...</div>
      </div>
    );
  }

  return (
    <div className="w-[65vh] h-[60vh]">
      <Spline
        scene="https://prod.spline.design/qZHLZ0VE7hzeEUFc/scene.splinecode"
        onLoad={() => console.log("Spline loaded")}
        onError={(e: any) => console.error("Spline error:", e)}
      />
    </div>
  );
}