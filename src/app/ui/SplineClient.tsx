'use client';

import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function SplineClient() {
  return (
    <div className="w-[65vh] h-[60vh]">
      <Spline
        scene="https://prod.spline.design/qZHLZ0VE7hzeEUFc/scene.splinecode"
        onLoad={() => console.log("Spline loaded")}
        onError={(e) => console.error("Spline error:", e)}
      />

      {/* <Spline scene="https://prod.spline.design/qZHLZ0VE7hzeEUFc/scene.splinecode" /> */}
    </div>
  );
}
