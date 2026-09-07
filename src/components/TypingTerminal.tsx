import { useEffect, useState } from 'react'

const lines = [
  '_SYS.CONFIG',
  '> lógica',
  '> criatividade',
  '> estratégia',
  '> resultado',
]

export default function TypingTerminal() {
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (currentLine >= lines.length) {
      const timer = setTimeout(() => {
        setVisibleLines([])
        setCurrentLine(0)
        setCurrentText('')
        setFinished(false)
      }, 3500)

      return () => clearTimeout(timer)
    }

    const target = lines[currentLine]

    if (currentText.length < target.length) {
      const timer = setTimeout(() => {
        setCurrentText(
          target.slice(0, currentText.length + 1)
        )
      }, 55)

      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setVisibleLines(prev => [
        ...prev,
        currentText,
      ])

      setCurrentText('')
      setCurrentLine(prev => prev + 1)
    }, 500)

    return () => clearTimeout(timer)
  }, [currentLine, currentText])

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
        {visibleLines.map((line, index) => (
          <div key={`${line}-${index}`}>
            {line}
          </div>
        ))}

        {!finished && currentLine < lines.length && (
          <div>
            {currentText}
            <b className="typing-cursor">_</b>
          </div>
        )}
      </div>
    </div>
  )
}
