import { useEffect, useRef } from "react";
import createGlobe from "cobe";

type GlobeProps = {
  className?: string;
  rotate?: boolean;
};

const BERGEN = [60.39299, 5.32415] as [number, number];
const TRONDHEIM = [63.4305, 10.3951] as [number, number];
const THETA = 0.57;
const ROTATION_SPEED = 0.003;

function hexToRgb01(hex: string): [number, number, number] {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16) / 255;
  const g = parseInt(value.slice(2, 4), 16) / 255;
  const b = parseInt(value.slice(4, 6), 16) / 255;
  return [r, g, b];
}

export default function Globe({ className, rotate = true }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rotateRef = useRef(rotate);

  useEffect(() => {
    rotateRef.current = rotate;
  }, [rotate]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = 0;
    let phi = 0;

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
      phi: 0,
      theta: THETA,
      mapSamples: 67000,
      mapBrightness: 5.2,
      mapBaseBrightness: 0,
      diffuse: 0.55,
      dark: 0,
      baseColor: hexToRgb01("#3c3c3c"),
      markerColor: hexToRgb01("#ffffff"),
      glowColor: hexToRgb01("#ffffff"),
      scale: 1.04,
      offset: [0.04, 0.04],
      opacity: 0.45,
      backgroundColor: hexToRgb01("#ffffff"),
      markers: [
        { location: BERGEN, size: 0.06 },
        { location: TRONDHEIM, size: 0.06 },
      ],
      onRender: (state) => {
        state.phi = phi;
        state.theta = THETA;
        state.width = canvas.width;
        state.height = canvas.height;

        if (rotateRef.current) {
          phi += ROTATION_SPEED;
        }
      },
    });

    return () => {
      window.removeEventListener("resize", resize);
      globe.destroy();
    };
  }, []);

  return (
    <div className={className}>
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
    </div>
  );
}
