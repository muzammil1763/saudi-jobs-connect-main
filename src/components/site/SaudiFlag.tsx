export function SaudiFlag({ className = "h-6 w-9" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-sm bg-saudi-green text-white font-semibold ${className}`}
      aria-label="Flag of Saudi Arabia"
      title="Kingdom of Saudi Arabia"
    >
      <span className="text-[0.6rem] tracking-tight" style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}>
        ﻪﻠﻟا ﻝﻮﺳر ﺪﻤﺤﻣ ﻪﻠﻟا ﻻإ ﻪﻟإ ﻻ
      </span>
    </span>
  );
}