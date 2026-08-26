import React from 'react'

export default function DnaHelix() {
  const rows = 30

  return (
    <div
      className="dna-helix"
      aria-hidden="true"
    >
      {Array.from({ length: rows }).map((_, index) => {
        const offset = rows === 1
          ? '0%'
          : `${(index / (rows - 1)) * 100}%`

        return (
          <div
            key={index}
            className={`dna-wave-row ${
              index % 2 === 0
                ? 'dna-wave-left'
                : 'dna-wave-right'
            }`}
            style={
              {
                '--dna-offset': offset,
                '--dna-delay': `${(index / rows) * 1.6}s`,
              } as React.CSSProperties
            }
          />
        )
      })}
    </div>
  )
}
