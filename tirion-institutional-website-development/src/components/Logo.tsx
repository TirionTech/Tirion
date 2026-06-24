type LogoProps = {
  className?: string;
  /** fill of the arch body */
  archFill?: string;
  /** stroke/outline color (purple) */
  stroke?: string;
  /** orange dots fill */
  dotFill?: string;
};

/**
 * TIRION logomark — faithful recreation of the brand icon:
 * a stylized ancient arch / temple gate with a large orange "sun"
 * dot on top, two side knobs and three orange dots at the base.
 */
export default function Logo({
  className = "",
  archFill = "#ece2fb",
  stroke = "#b07fe8",
  dotFill = "#cf7a33",
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Logomarca TIRION"
      fill="none"
    >
      {/* side knobs */}
      <rect x="11" y="38" width="6.5" height="10" rx="3.25" fill={archFill} stroke={stroke} strokeWidth="2" />
      <rect x="82.5" y="38" width="6.5" height="10" rx="3.25" fill={archFill} stroke={stroke} strokeWidth="2" />

      {/* arch body (two legs + top arch, open at the bottom) */}
      <path
        d="M17 76
           L17 33
           Q17 29 21 29
           C32 14 68 14 79 29
           Q83 29 83 33
           L83 76
           L69 76
           L69 41
           C69 29 31 29 31 41
           L31 76
           Z"
        fill={archFill}
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* top sun dot */}
      <circle cx="50" cy="16" r="10" fill={dotFill} stroke={stroke} strokeWidth="2" />

      {/* three base dots */}
      <circle cx="29" cy="88" r="5.5" fill={dotFill} stroke={stroke} strokeWidth="2" />
      <circle cx="50" cy="88" r="5.5" fill={dotFill} stroke={stroke} strokeWidth="2" />
      <circle cx="71" cy="88" r="5.5" fill={dotFill} stroke={stroke} strokeWidth="2" />
    </svg>
  );
}
