export default function BlackSheepMark() {
  return (
    <svg className="sheep-mark" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="90" cy="120" rx="55" ry="38" fill="var(--paper)" opacity=".06" />
      <circle cx="60" cy="90" r="26" fill="var(--paper)" opacity=".06" />
      <circle cx="70" cy="80" r="7" fill="var(--acid)" opacity=".35" />
      <circle cx="52" cy="80" r="7" fill="var(--acid)" opacity=".35" />
      <path d="M40 130c-14 4-24 16-24 30M140 130c14 4 24 16 24 30" stroke="var(--paper)" strokeWidth="4" opacity=".06" fill="none" strokeLinecap="round" />
    </svg>
  )
}
