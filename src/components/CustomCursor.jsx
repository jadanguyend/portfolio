import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[99999]
        hidden
        md:block
      "
      style={{
        transform: `translate(${position.x - 6}px, ${
          position.y - 6
        }px)`,
        mixBlendMode: "difference",
      }}
    >
      <div className="h-3 w-3 rounded-full bg-white" />
    </div>
  );
}