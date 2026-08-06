import { useEffect, useState } from 'react'

const LINES = [
  'INICIANDO PROTOCOLO DE IDENTIDADE...',
  'LENDO ARQUIVO 0027...',
  'COMPARANDO PADRÃO COM BASE DE DADOS...',
  'CORRESPONDÊNCIA ENCONTRADA: 99.98%',
  'DESIGNAÇÃO: SHAMARA FERREIRA DE SOUZA',
  'STATUS: ORIGINAL. NÃO É CÓPIA.',
  'ACESSO CONCEDIDO.'
]

export default function IntroBoot({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [typed, setTyped] = useState('')
  const [leaving, setLeaving] = useState(false)
  const [skip, setSkip] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      onDone()
      return
    }

    let cancelled = false
    let lineIndex = 0
    let charIndex = 0

    function typeNextChar() {
      if (cancelled) return
      const currentLine = LINES[lineIndex]
      if (charIndex <= currentLine.length) {
        setTyped(currentLine.slice(0, charIndex))
        charIndex++
        setTimeout(typeNextChar, 18 + Math.random() * 22)
      } else {
        setVisibleLines(prev => [...prev, currentLine])
        setTyped('')
        lineIndex++
        charIndex = 0
        if (lineIndex < LINES.length) {
          setTimeout(typeNextChar, 260)
        } else {
          setTimeout(() => {
            setLeaving(true)
            setTimeout(onDone, 600)
          }, 700)
        }
      }
    }

    const startTimer = setTimeout(typeNextChar, 400)
    return () => {
      cancelled = true
      clearTimeout(startTimer)
    }
  }, [onDone])

  function handleSkip() {
    if (skip) return
    setSkip(true)
    setLeaving(true)
    setTimeout(onDone, 400)
  }

  return (
    <div className={`intro-boot${leaving ? ' leaving' : ''}`} onClick={handleSkip} role="button" tabIndex={0} aria-label="Pular introdução">
      <div className="intro-boot-inner">
        {visibleLines.map((line, i) => (
          <p key={i} className="intro-line">
            <span className="intro-prompt">&gt;</span> {line}
          </p>
        ))}
        {typed && (
          <p className="intro-line">
            <span className="intro-prompt">&gt;</span> {typed}<span className="intro-cursor" />
          </p>
        )}
      </div>
      <p className="intro-skip">TOQUE PARA PULAR</p>
    </div>
  )
}
