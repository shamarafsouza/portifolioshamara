export default function DnaHelix() {
  const rungs = Array.from({ length: 14 })
  return (
    <svg className="dna-helix" viewBox="0 0 120 640" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="dnaFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--mint)" stopOpacity="0" />
          <stop offset="12%" stopColor="var(--mint)" stopOpacity=".9" />
          <stop offset="88%" stopColor="var(--mint)" stopOpacity=".9" />
          <stop offset="100%" stopColor="var(--mint)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M20 0 C60 40,60 80,20 120 C-20 160,-20 200,20 240 C60 280,60 320,20 360 C-20 400,-20 440,20 480 C60 520,60 560,20 600 C-20 630,-20 640,20 640" fill="none" stroke="url(#dnaFade)" strokeWidth="3" />
      <path d="M100 0 C60 40,60 80,100 120 C140 160,140 200,100 240 C60 280,60 320,100 360 C140 400,140 440,100 480 C60 520,60 560,100 600 C140 630,140 640,100 640" fill="none" stroke="url(#dnaFade)" strokeWidth="3" opacity=".55" />
      {rungs.map((_, i) => {
        const y = 24 + i * 44
        const phase = (i % 2 === 0) ? 20 : 100
        const otherPhase = phase === 20 ? 100 : 20
        return (
          <line key={i} x1={phase} y1={y} x2={otherPhase} y2={y} stroke="var(--acid)" strokeWidth="2" opacity=".5" />
        )
      })}
    </svg>
  )
}
