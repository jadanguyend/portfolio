// src/components/HeroCursorFlow.jsx
import { useEffect, useRef } from "react";

export default function HeroCursorFlow() {
  const canvasRef = useRef(null);
  const shaderRef = useRef(null);

  useEffect(() => {
    let destroyed = false;
    let observer = null;

    const getThemeColors = () => {
      const rootStyles = getComputedStyle(document.documentElement);

      return {
        accent:
          rootStyles.getPropertyValue("--accent-color").trim() || "#183ED8",
        accent2:
          rootStyles.getPropertyValue("--accent-color-2").trim() || "#728CFE",
      };
    };

    const updateShaderColors = () => {
      if (!shaderRef.current) return;

      const { accent, accent2 } = getThemeColors();

      shaderRef.current.update("heroChromaFlow", {
        baseColor: accent,
        leftColor: accent2,
        rightColor: accent,
        upColor: accent2,
        downColor: accent,
      });
    };

    async function initShader() {
      try {
        const { createShader } = await import("shaders/js");

        if (!canvasRef.current || destroyed) return;

        const { accent, accent2 } = getThemeColors();

        shaderRef.current = await createShader(canvasRef.current, {
          components: [
            {
              type: "ChromaFlow",
              id: "heroChromaFlow",
              props: {
                baseColor: accent,
                leftColor: accent2,
                rightColor: accent,
                upColor: accent2,
                downColor: accent,

                intensity: 0.8,
                momentum: 55,
                radius: 1.6,
              },
            },
            {
              type: "Ascii",
              id: "heroAscii",
              props: {
                alphaThreshold: 0.08,
                cellSize: 8,
                spacing: 1.5,
                characters: "..*",
              },
            },
          ],
        });

        requestAnimationFrame(updateShaderColors);

        observer = new MutationObserver(() => {
          requestAnimationFrame(updateShaderColors);
        });

        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ["class"],
        });
      } catch (error) {
        console.error("HeroCursorFlow failed to load:", error);
      }
    }

    initShader();

    return () => {
      destroyed = true;
      observer?.disconnect();
      shaderRef.current?.destroy?.();
      shaderRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-cursor-flow"
      data-engine="three.js shaders"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
      }}
      className="block h-full w-full pointer-events-auto"
      aria-hidden="true"
    />
  );
}