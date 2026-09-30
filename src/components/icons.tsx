type IconProps = { size?: number };

const STROKE = "#1a2d4d";
const FLAG = "#b8232b";

export function PasteIcon({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="9" y="7" width="19" height="26" rx="2" stroke={STROKE} strokeWidth="1.8" />
      <path d="M15 6.5h7a2 2 0 0 1 2 2v1.5h-11V8.5a2 2 0 0 1 2-2Z" fill={STROKE} />
      <path d="M13 16h13M13 21h13M13 26h8" stroke={STROKE} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function FlagLineIcon({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="7" y="9" width="26" height="22" rx="2" stroke={STROKE} strokeWidth="1.8" />
      <path d="M12 15h16" stroke={STROKE} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 20.5h16" stroke={FLAG} strokeWidth="2" strokeLinecap="round" />
      <path d="M12 26h10" stroke={STROKE} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="31" cy="20.5" r="4.5" fill={FLAG} />
      <path d="M31 18.3v2.6M31 22.6v.1" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function AskIcon({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M8 12a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H17l-6 5v-5h-0a3 3 0 0 1-3-3V12Z"
        stroke={STROKE}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M17 15.5c0-1.4 1.2-2.5 3-2.5s3 1 3 2.3c0 1.1-.7 1.6-1.6 2.2-.8.5-1.4 1-1.4 2"
        stroke={FLAG}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="20" cy="23" r="1.1" fill={FLAG} />
    </svg>
  );
}

export function QuoteCheckIcon({ size = 44 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="8" y="6" width="24" height="30" rx="2" stroke={STROKE} strokeWidth="1.8" />
      <path d="M13 13h14M13 18h14M13 23h9" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      <rect x="12" y="27.5" width="16" height="4.5" rx="1" fill="#f8f7f5" stroke={FLAG} strokeWidth="1.4" />
      <circle cx="32" cy="30" r="8" fill="#1a2d4d" />
      <path d="M28.2 30.2l2.4 2.4 5-5.2" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function NoFabricationIcon({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="13" stroke={STROKE} strokeWidth="1.8" />
      <path d="M20 13v8" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="20" cy="25.5" r="1.3" fill={STROKE} />
    </svg>
  );
}

export function RedLinesIcon({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M12 9v22" stroke={FLAG} strokeWidth="2" strokeLinecap="round" />
      <path d="M12 9h13a4 4 0 0 1 0 8H12" stroke={STROKE} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function HeroDocument() {
  return (
    <svg
      viewBox="0 0 360 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", maxWidth: 380 }}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="352" height="312" rx="10" fill="#f8f7f5" />
      <rect x="58" y="34" width="204" height="252" rx="6" fill="#ffffff" stroke="#d4d4d4" />
      <rect x="80" y="60" width="120" height="10" rx="2" fill="#1a2d4d" />
      <rect x="80" y="86" width="160" height="7" rx="2" fill="#d4d4d4" />
      <rect x="80" y="100" width="150" height="7" rx="2" fill="#d4d4d4" />
      <rect x="80" y="114" width="160" height="7" rx="2" fill="#d4d4d4" />

      <rect x="80" y="140" width="160" height="22" rx="3" fill="#fbeceb" stroke="#b8232b" strokeWidth="1.4" />
      <rect x="88" y="147" width="130" height="8" rx="2" fill="#b8232b" opacity="0.55" />

      <rect x="80" y="172" width="150" height="7" rx="2" fill="#d4d4d4" />
      <rect x="80" y="186" width="130" height="7" rx="2" fill="#d4d4d4" />

      <rect x="80" y="208" width="160" height="22" rx="3" fill="#faf3e8" stroke="#9b7d47" strokeWidth="1.4" />
      <rect x="88" y="215" width="110" height="8" rx="2" fill="#9b7d47" opacity="0.6" />

      <rect x="80" y="242" width="140" height="7" rx="2" fill="#d4d4d4" />

      <g transform="translate(232,232)">
        <circle cx="30" cy="30" r="30" fill="#1a2d4d" />
        <path
          d="M18 31l8 8 16.5-17.5"
          stroke="#ffffff"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
