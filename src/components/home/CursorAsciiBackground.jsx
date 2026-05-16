import { useEffect, useRef } from "react";

const CHARS = ["·", ".", ":", "-", "=", "+", "*", "#", "%", "@"];

export default function CursorAsciiBackground() {
  const canvasRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    hasMoved: false,
    isMoving: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let animationFrame;
    let grid = [];

    const cellSize = 7;
    const fontSize = 7;

    const fadeSpeed = 0.984;

    // Higher = catches up faster
    const smoothing = 0.65;

    const minMotion = 0.25;

    const getAccentColor = () => {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-color")
        .trim();

      return color || "#183ED8";
    };

    const resize = () => {
      const parent = canvas.parentElement;
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / cellSize);
      rows = Math.ceil(height / cellSize);

      grid = Array.from({ length: cols * rows }, () => 0);
    };

    const addTrailPoint = (x, y, intensity = 1) => {
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);

      // In between original and larger version
      const radius = Math.max(7, 10 * intensity);

      for (let yOffset = -radius; yOffset <= radius; yOffset++) {
        for (let xOffset = -radius; xOffset <= radius; xOffset++) {
          const currentCol = col + xOffset;
          const currentRow = row + yOffset;

          if (
            currentCol < 0 ||
            currentCol >= cols ||
            currentRow < 0 ||
            currentRow >= rows
          ) {
            continue;
          }

          const distance = Math.sqrt(xOffset * xOffset + yOffset * yOffset);
          if (distance > radius) continue;

          const index = currentRow * cols + currentCol;
          const force = Math.pow(1 - distance / radius, 1.35);

          grid[index] = Math.min(1, grid[index] + force * intensity * 0.72);
        }
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();

      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      if (
        currentX < 0 ||
        currentX > width ||
        currentY < 0 ||
        currentY > height
      ) {
        mouse.current.hasMoved = false;
        mouse.current.isMoving = false;
        return;
      }

      if (!mouse.current.hasMoved) {
        mouse.current = {
          x: currentX,
          y: currentY,
          targetX: currentX,
          targetY: currentY,
          hasMoved: true,
          isMoving: false,
        };
        return;
      }

      const dx = currentX - mouse.current.targetX;
      const dy = currentY - mouse.current.targetY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      mouse.current.targetX = currentX;
      mouse.current.targetY = currentY;
      mouse.current.isMoving = distance > minMotion;
    };

    const drawTrail = () => {
      if (!mouse.current.hasMoved) return;

      const previousX = mouse.current.x;
      const previousY = mouse.current.y;

      mouse.current.x += (mouse.current.targetX - mouse.current.x) * smoothing;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * smoothing;

      const dx = mouse.current.x - previousX;
      const dy = mouse.current.y - previousY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (!mouse.current.isMoving && distance < minMotion) return;

      const speed = Math.min(distance / 14, 2.2);
      const steps = Math.max(1, Math.floor(distance / 50));

      for (let i = 0; i <= steps; i++) {
        const t = i / steps;

        const trailX = previousX + dx * t;
        const trailY = previousY + dy * t;

        const intensity =
          Math.max(0.48, speed) * (0.5 + Math.sin(t * Math.PI) * 0.65);

        addTrailPoint(trailX, trailY, intensity);
      }

      mouse.current.isMoving = false;
    };

    const draw = () => {
      drawTrail();

      ctx.clearRect(0, 0, width, height);

      ctx.font = `${fontSize}px IBM Plex Mono, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = getAccentColor();

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const index = row * cols + col;
          const value = grid[index];

          if (value <= 0.005) continue;

          const charIndex = Math.min(
            CHARS.length - 1,
            Math.floor(value * (CHARS.length - 1))
          );

          ctx.globalAlpha = Math.min(value, 0.92);

          ctx.fillText(
            CHARS[charIndex],
            col * cellSize + cellSize / 2,
            row * cellSize + cellSize / 2
          );

          grid[index] *= fadeSpeed;
        }
      }

      ctx.globalAlpha = 1;
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}