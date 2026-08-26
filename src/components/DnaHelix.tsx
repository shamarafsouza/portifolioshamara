import React from 'react'

export default function DnaHelix() {
  const rows = 24

  return (
    <div className="dna-helix" aria-hidden="true">
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className={`dna-dot-row ${
            index % 2 === 0 ? 'dna-dot-left' : 'dna-dot-right'
          }`}
          style={
            { animationDelay: `${(index / rows) * 1.6}s` } as React.CSSProperties
          }
        >
          <span className="dna-dot a" />
          <span className="dna-dot b" />
        </div>
      ))}
    </div>
  )
}
