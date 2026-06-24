import { useMemo } from "react";

type StarFieldProps = {
  count?: number;
  className?: string;
};

/** Subtle animated star/ember particles for dark sections. */
export default function StarField({ count = 40, className = "" }: StarFieldProps) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2.5 + 0.6,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 3,
        orange: Math.random() > 0.7,
      })),
    [count]
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            background: s.orange ? "#e78b0a" : "#cbb8ff",
            boxShadow: s.orange
              ? "0 0 6px 1px rgba(231,139,10,0.6)"
              : "0 0 5px 1px rgba(203,184,255,0.5)",
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
