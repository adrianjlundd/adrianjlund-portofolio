import { useEffect, useRef } from "react";
import createGlobe from "cobe";

type GlobeProps = {
  className?: string;
};

const BERGEN = [60.39299, 5.32415] as [number, number];
const TRONDHEIM = [63.4305, 10.3951] as [number, number];

export default function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = 0;
    let phi = -0.15; // Center view on Norway (around longitude 5-10°E)

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.offsetWidth;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = width * dpr;
    };

    resize();
    window.addEventListener("resize", resize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: canvas.width,
      height: canvas.height,
      phi: -Math.PI / 6, // Initial view centered on Norway
      theta: 0.25, // Slightly tilted for better view of Scandinavia
      dark: 1,
      diffuse: 1.2,
      scale: 1.5,
      mapSamples: 16000,
      mapBrightness: 1.1,
      baseColor: [0.12, 0.16, 0.22],
      glowColor: [0.5, 0.6, 0.9],
      markerColor: [0.9, 0.95, 1],
      markers: [
        { location: BERGEN, size: 0.07 },
        { location: TRONDHEIM, size: 0.07 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.002;
        state.width = canvas.width;
        state.height = canvas.height;
      },
    });

    return () => {
      window.removeEventListener("resize", resize);
      globe.destroy();
    };
  }, []);

  return (
    <div className={className}>
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}
