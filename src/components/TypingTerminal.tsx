import { useEffect, useState } from 'react'

const lines = [
  '_SYS.CONFIG',
  '> lógica',
  '> criatividade',
  '> estratégia',
  '> resultado',
]

export default function TypingTerminal() {
  const [lineIndex, setLineIndex] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    const currentLine = lines[lineIndex]

    if (text.length < currentLine.length) {
      const timer = setTimeout(() => {
        setText(currentLine.slice(0, text.length + 1))
      }, 55)

      return () => clearTimeout(timer)
    }

    const pause = setTimeout(() => {
      setText('')
      setLineIndex((prev) => (prev + 1) % lines.length)
    }, 1800)

    return () => clearTimeout(pause)
  }, [text, lineIndex])

  return (
    <div className="typing-terminal">
      <div className="typing-terminal-header">
        <span>_SYS.CONFIG</span>

        <div className="typing-terminal-dots">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="typing-terminal-body">
        <span>{text}</span>
        <b className="typing-cursor">_</b>
      </div>
    </div>
  )
}
