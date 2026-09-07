import { useEffect, useRef, useState } from 'react'

type Props = { onClose: () => void }

export default function DinoGame({ onClose }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)
  const [hint, setHint] = useState('ESPAÇO ou toque para começar')

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return
    let animation = 0, running = false, frame = 0, points = 0
    let dino = { y: 134, velocity: 0 }
    let obstacles: { x: number; w: number; h: number }[] = []

    const startOrJump = () => {
      if (!running) { running = true; frame = 0; points = 0; obstacles = []; dino = { y: 134, velocity: 0 }; setScore(0); setHint('Desvie dos obstáculos') }
      if (dino.y >= 134) dino.velocity = -13
    }
    const draw = () => {
      frame += 1
      context.fillStyle = '#080a10'; context.fillRect(0, 0, canvas.width, canvas.height)
      context.strokeStyle = '#8ff7dd'; context.globalAlpha = .2; context.lineWidth = 1
      for (let x = 0; x < canvas.width; x += 24) { context.beginPath(); context.moveTo(x, 0); context.lineTo(x, canvas.height); context.stroke() }
      context.globalAlpha = 1; context.strokeStyle = '#e8ff5a'; context.setLineDash([9, 12]); context.beginPath(); context.moveTo(0, 171); context.lineTo(canvas.width, 171); context.stroke(); context.setLineDash([])
      if (running) {
        dino.velocity += .78; dino.y = Math.min(134, dino.y + dino.velocity)
        if (frame % 72 === 0) obstacles.push({ x: canvas.width + 14, w: 16, h: 24 + Math.floor(Math.random() * 18) })
        obstacles.forEach((item) => item.x -= 5.7 + points / 90)
        obstacles = obstacles.filter((item) => item.x > -25)
        if (frame % 5 === 0) { points += 1; setScore(points) }
      }
      context.fillStyle = '#e8ff5a'; context.fillRect(54, dino.y, 28, 32); context.fillStyle = '#090b12'; context.fillRect(73, dino.y + 8, 5, 5); context.fillRect(47, dino.y + 25, 10, 7)
      obstacles.forEach((item) => { context.fillStyle = '#ff5a8c'; context.fillRect(item.x, 171 - item.h, item.w, item.h); context.fillStyle = '#ffa2bd'; context.fillRect(item.x + 4, 171 - item.h + 5, 4, 4) })
      const hit = obstacles.some((item) => 54 < item.x + item.w && 82 > item.x && dino.y + 32 > 171 - item.h + 4)
      if (hit) { running = false; setHint('Sinal interrompido, toque para reiniciar') }
      animation = requestAnimationFrame(draw)
    }
    const keyHandler = (event: KeyboardEvent) => { if (event.code === 'Space') { event.preventDefault(); startOrJump() } if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', keyHandler); canvas.addEventListener('pointerdown', startOrJump); draw()
    return () => { cancelAnimationFrame(animation); window.removeEventListener('keydown', keyHandler); canvas.removeEventListener('pointerdown', startOrJump) }
  }, [onClose])

  return <div className="game-modal" role="dialog" aria-modal="true" aria-label="Jogo do dinossauro"><div className="game-panel"><button className="close" onClick={onClose}>FECHAR ×</button><p className="eyebrow">SIMULAÇÃO 01, ARCADE DE SOBREVIVÊNCIA</p><h2>FUGA DO LABORATÓRIO</h2><div className="game-score">PONTOS <b>{score}</b></div><canvas ref={canvasRef} width="620" height="205" /><p className="game-hint">{hint}</p></div></div>
}
