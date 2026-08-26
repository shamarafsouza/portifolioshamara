import React from 'react'

export default function DnaHelix() {
  const rows = 26

  return (
    <div
      className="dna-helix"
      aria-hidden="true"
    >
      {Array.from({ length: rows }).map((_, index) => {
        const delay = `${(index / rows) * 1.6}s`

        return (
          <div
            key={index}
            className={`dna-dot-row ${
              index % 2 === 0
                ? 'dna-dot-left'
                : 'dna-dot-right'
            }`}
            style={{
              animationDelay: delay,
            }}
          >
            <span className="dna-dot a" />
            <span className="dna-dot b" />
          </div>
        )
      })}
    </div>
  )
}
