export default function FanChart() {
  return (
    <svg
      viewBox="0 0 400 260"
      className="h-auto w-full max-w-md"
      role="img"
      aria-label="Illustrative fan chart of simulated outcomes widening over time"
    >
      {/* 5th-95th percentile band */}
      <path
        d="M20,150 C120,140 260,90 380,20 L380,240 C260,220 120,215 20,210 Z"
        fill="#2D5BFF"
        opacity="0.12"
      />
      {/* 25th-75th percentile band */}
      <path
        d="M20,150 C120,145 260,120 380,80 L380,190 C260,180 120,172 20,168 Z"
        fill="#2D5BFF"
        opacity="0.25"
      />
      {/* median line */}
      <path
        d="M20,150 C120,145 260,120 380,95"
        fill="none"
        stroke="#16181D"
        strokeWidth="2"
      />
      {/* starting value dashed line */}
      <line
        x1="20"
        y1="150"
        x2="380"
        y2="150"
        stroke="#8A8A82"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      {/* axis */}
      <line x1="20" y1="10" x2="20" y2="240" stroke="#16181D" strokeWidth="1" opacity="0.3" />
      <line x1="20" y1="240" x2="390" y2="240" stroke="#16181D" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
