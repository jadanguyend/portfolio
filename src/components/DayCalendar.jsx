import { useEffect, useRef, useState } from "react";

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const HOUR_WIDTH = 120;

function timeToDecimal(time) {
  const [h, m] = time.split(":").map(Number);
  return h + m / 60;
}

function format24(time) {
  const [h, m] = time.split(":").map(Number);
  const hh = Math.min(h, 24);
  return `${String(hh).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export default function DayCalendar() {
  const containerRef = useRef(null);

  const [nowX, setNowX] = useState(0);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const TOOLTIP_OFFSET = 28;

  const events = [
    { title: "Sleep", description: "Full rest and recovery", start: "00:00", end: "06:00" },
    { title: "Watch F1 Race Livestream + Get Ready", description: "Morning routine + Formula 1 highlights", start: "06:00", end: "08:00" },
    { title: "Dim Sum", description: "Breakfast at local spot", start: "08:30", end: "09:00" },
    { title: "Bac Siu @ Aroom", description: "Coffee + checking emails", start: "09:15", end: "10:00" },
    { title: "Visit Japanese Garden", description: "Walk + reset mind", start: "10:30", end: "11:30" },
    { title: "Perfume Workshop", description: "Creative scent mixing", start: "12:00", end: "13:00" },
    { title: "Banh Mi", description: "Quick lunch stop", start: "13:30", end: "14:00" },
    { title: "Matcha @ HeyTea", description: "Afternoon recharge", start: "14:00", end: "14:30" },
    { title: "Play Pickleball at Greenlake", description: "Light sport session", start: "14:45", end: "16:15" },
    { title: "Shower + Nap", description: "Much needed recharge time", start: "16:30", end: "18:00" },
    { title: "Ramen @ Ramen Danbo", description: "Dinner outing", start: "18:15", end: "19:15" },
    { title: "Watch the Sunset", description: "Golden hour walk", start: "19:30", end: "20:15" },
    { title: "Scooter Home", description: "Vroom vroom", start: "20:15", end: "20:45" },
    { title: "Movie Night + LEGO Building", description: "Relax session", start: "20:45", end: "22:45" },
    { title: "Skincare", description: "Night routine", start: "23:00", end: "23:30" },
    { title: "Read", description: "Finish reading Project Hail Mary by Andy Weir", start: "23:30", end: "24:00" },
  ];

  /* ================= NOW LINE ================= */
  useEffect(() => {
    const updateNow = () => {
      const now = new Date();
      const decimal = now.getHours() + now.getMinutes() / 60;
      setNowX(decimal * HOUR_WIDTH);
    };

    updateNow();
    const interval = setInterval(updateNow, 60000);
    return () => clearInterval(interval);
  }, []);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    if (!containerRef.current) return;

    const now = new Date();
    const decimal = now.getHours() + now.getMinutes() / 60;

    containerRef.current.scrollTo({
      left: decimal * HOUR_WIDTH - window.innerWidth / 2,
      behavior: "smooth",
    });
  }, []);

  /* ================= HOVER POSITION ================= */
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    setHoverPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative w-full">

      {/* TOOLTIP */}
      {hoveredEvent && (
        <div
          className="absolute z-50 pointer-events-none px-3 py-2 rounded-lg border bg-grayLight-10 dark:bg-grayDark-10 shadow-lg text-xs max-w-[220px]"
          style={{
            left: hoverPos.x + TOOLTIP_OFFSET,
            top: hoverPos.y + TOOLTIP_OFFSET,
          }}
        >
          <div className="font-semibold text-sm text-grayLight-900 dark:text-grayDark-900">
            {hoveredEvent.title}
          </div>

          <div className="mt-1 text-[11px] text-gray-600 dark:text-gray-400 leading-snug">
            {hoveredEvent.description}
          </div>
        </div>
      )}

      {/* SCROLL AREA */}
      <div ref={containerRef} className="w-full overflow-x-auto relative">
        <div className="relative h-40" style={{ width: HOURS.length * HOUR_WIDTH }}>

          {/* HOURS (24h) */}
          {HOURS.map((hour) => (
            <div
              key={hour}
              className="absolute top-0 bottom-0 border-l border-gray-200 dark:border-gray-700"
              style={{ left: hour * HOUR_WIDTH }}
            >
              <span className="absolute top-2 left-2 text-xs text-gray-400 dark:text-gray-500">
                {String(hour).padStart(2, "0")}:00
              </span>
            </div>
          ))}

          {/* NOW LINE */}
          <div className="absolute top-0 bottom-0 z-30" style={{ left: nowX }}>
            <div className="h-full w-[2px] bg-red-400 opacity-80" />
            <div className="absolute -top-6 -left-6 text-[10px] text-red-400">
              NOW
            </div>
          </div>

          {/* EVENTS (ALL BLUE) */}
          {events.map((event, i) => {
            const start = timeToDecimal(event.start);
            const end = timeToDecimal(event.end);

            return (
              <div
                key={i}
                    className="
                    absolute top-10 h-20 rounded-md px-2 py-1 text-xs  cursor-pointer
                    bg-accentSoft text-accent 
                    hover:bg-accent hover:text-white
                    transition-colors duration-150
                    "
                style={{
                  left: start * HOUR_WIDTH + 2,
                  width: (end - start) * HOUR_WIDTH - 4,
                }}
                onMouseEnter={() => setHoveredEvent(event)}
                onMouseMove={(e) => {
                  setHoveredEvent(event);
                  handleMouseMove(e);
                }}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                <div className="font-semibold line-clamp-2 leading-snug">
                  {event.title}
                </div>

                <div className="opacity-70 text-[10px]">
                  {format24(event.start)} – {format24(event.end)}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}