export default function DnaHelix() {
  const rows = 30

  return (
    <div
      className="dna-helix"
      aria-hidden="true"
      style={{
        '--dna-rows': rows,
      } as React.CSSProperties}
    >
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className={`dna-wave-row ${
            index % 2 === 0 ? 'dna-wave-left' : 'dna-wave-right'
          }`}
          style={{
            '--dna-index': index,
            '--dna-delay': `${(index / rows) * 1.6}s`,
          } as React.CSSProperties}
        >
          <img
            src="/dna-helix.png"
            alt=""
          />
        </div>
      ))}
    </div>
  )
}
