import { useEffect, useRef } from "react";

export default function AsciiBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const chars = "··.:-=+*#%@";
    const charSize = 14;

    let width = 0;
    let height = 0;

    const getColors = () => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.className = "text-grayLight-500 dark:text-grayDark-500";
      const style = getComputedStyle(div);
      const color = style.color;
      document.body.removeChild(div);
      return color;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      ctx.font = `${charSize}px monospace`;
      ctx.textBaseline = "top";
    };

    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: -9999, y: -9999 };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const color = getColors();
      const hoverRadius = 100;

      const rect = canvas.getBoundingClientRect();
      const mx = mouse.x - rect.left;
      const my = mouse.y - rect.top;

      for (let y = 0; y < height; y += charSize) {
        const verticalFade = 1 - y / height;

        for (let x = 0; x < width; x += charSize) {
          const dx = mx - x;
          const dy = my - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const hoverIntensity = Math.max(0, 1 - dist / hoverRadius);
          const baseOpacity = 0.06;
          const opacity = baseOpacity + hoverIntensity * 0.35 + verticalFade * 0.12;

          const charIndex = Math.min(
            chars.length - 1,
            Math.floor(hoverIntensity * chars.length)
          );

          ctx.fillStyle = color;
          ctx.globalAlpha = opacity;
          ctx.fillText(chars[charIndex], x, y);
        }
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
