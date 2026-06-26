import { useEffect, useId, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import "./StickerPeel.css";

gsap.registerPlugin(Draggable);

export default function StickerPeel({
  imageSrc,
  alt = "",
  rotate = 0,
  peelBackHoverPct = 18,
  peelBackActivePct = 34,
  width =140,
  shadowIntensity = 0.12,
  lightingIntensity = 0.08,
  peelDirection = 0,
  isDraggable = false,
  boundsRef = null,
  className = "",
}) {
  const containerRef = useRef(null);
  const dragTargetRef = useRef(null);
  const pointLightFlippedRef = useRef(null);
  const draggableInstanceRef = useRef(null);

  const reactId = useId();
  const safeId = useMemo(() => reactId.replace(/:/g, ""), [reactId]);

  const pointLightFlippedId = `${safeId}-pointLightFlipped`;
  const dropShadowId = `${safeId}-dropShadow`;
  const expandAndFillId = `${safeId}-expandAndFill`;

  const defaultPadding = 10;

  useEffect(() => {
    if (!isDraggable) return;

    const target = dragTargetRef.current;
    const fallbackBoundsEl = target?.parentNode;
    const boundsEl = boundsRef?.current || fallbackBoundsEl;

    if (!target || !boundsEl) return;

    draggableInstanceRef.current = Draggable.create(target, {
      type: "x,y",
      bounds: boundsEl,
      inertia: false,
      onPress() {
        gsap.set(target, {
          zIndex: 50,
        });
      },
      onDrag() {
        const rot = gsap.utils.clamp(-18, 18, this.deltaX * 0.35);

        gsap.to(target, {
          rotation: rot,
          duration: 0.15,
          ease: "power1.out",
        });
      },
      onDragEnd() {
        gsap.to(target, {
          rotation: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      },
    })[0];

    const handleResize = () => {
      draggableInstanceRef.current?.update();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      draggableInstanceRef.current?.kill();
    };
  }, [isDraggable, boundsRef]);

  useEffect(() => {
    const updateLight = (event) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const normalizedAngle = Math.abs(peelDirection % 360);

      if (normalizedAngle !== 180) {
        gsap.set(pointLightFlippedRef.current, {
          attr: { x, y: rect.height - y },
        });
      } else {
        gsap.set(pointLightFlippedRef.current, {
          attr: { x: -1000, y: -1000 },
        });
      }
    };

    const container = containerRef.current;

    if (!container) return;

    container.addEventListener("mousemove", updateLight);

    return () => {
      container.removeEventListener("mousemove", updateLight);
    };
  }, [peelDirection]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleTouchStart = () => {
      container.classList.add("touch-active");
    };

    const handleTouchEnd = () => {
      container.classList.remove("touch-active");
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []);

  const cssVars = {
    "--sticker-rotate": `${rotate}deg`,
    "--sticker-p": `${defaultPadding}px`,
    "--sticker-peelback-hover": `${peelBackHoverPct}%`,
    "--sticker-peelback-active": `${peelBackActivePct}%`,
    "--sticker-width": `${width}px`,
    "--peel-direction": `${peelDirection}deg`,
  };

  return (
    <div
      ref={dragTargetRef}
      className={`
        sticker-peel
        ${isDraggable ? "sticker-peel--draggable" : ""}
        ${className}
      `}
      style={cssVars}
    >
      <svg width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <filter id={pointLightFlippedId}>
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity * 7}
              lightingColor="white"
            >
              <fePointLight
                ref={pointLightFlippedRef}
                x="100"
                y="100"
                z="300"
              />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id={dropShadowId}>
            <feDropShadow
              dx="1.5"
              dy="2.5"
              stdDeviation={2.5 * shadowIntensity}
              floodColor="black"
              floodOpacity={shadowIntensity}
            />
          </filter>

          <filter id={expandAndFillId}>
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shape" />
            <feFlood floodColor="rgb(190,190,190)" result="flood" />
            <feComposite operator="in" in="flood" in2="shape" />
          </filter>
        </defs>
      </svg>

      <div className="sticker-container" ref={containerRef}>
        <div
          className="sticker-main"
          style={{
            filter: `url(#${dropShadowId})`,
          }}
        >
          <div className="sticker-lighting">
            <img
              src={imageSrc}
              alt={alt}
              className="sticker-image"
              draggable="false"
              onContextMenu={(event) => event.preventDefault()}
            />
          </div>
        </div>

        <div className="flap">
          <div
            className="flap-lighting"
            style={{
              filter: `url(#${pointLightFlippedId})`,
            }}
          >
            <img
              src={imageSrc}
              alt=""
              aria-hidden="true"
              className="flap-image"
              draggable="false"
              style={{
                filter: `url(#${expandAndFillId})`,
              }}
              onContextMenu={(event) => event.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}