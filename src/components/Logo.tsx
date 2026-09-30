type LogoProps = {
  size?: number;
  showWordmark?: boolean;
  className?: string;
};

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7" fill="#1a2d4d" />
      <path
        d="M8 16L13 21"
        stroke="#b8232b"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M13 21L24 9"
        stroke="#ffffff"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({ size = 28, showWordmark = true, className }: LogoProps) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <LogoMark size={size} />
      {showWordmark && (
        <span
          style={{
            fontFamily:
              "-apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: size * 0.62,
            letterSpacing: "-0.01em",
            color: "#1a2d4d",
          }}
        >
          ReviewIt
        </span>
      )}
    </span>
  );
}
