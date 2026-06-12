export default function HeroAsterisk() {
  return (
    <svg
      className="hero-asterisk"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <g fill="currentColor">
        <rect x="44" y="15" width="12" height="70" rx="6" />

        <rect
          x="44"
          y="15"
          width="12"
          height="70"
          rx="6"
          transform="rotate(60 50 50)"
        />

        <rect
          x="44"
          y="15"
          width="12"
          height="70"
          rx="6"
          transform="rotate(-60 50 50)"
        />
      </g>
    </svg>
  );
}