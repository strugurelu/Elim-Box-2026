import { useEffect, useState } from "react"

function getTimeLeft() {
  const target = new Date("2026-06-26T00:00:00").getTime()
  const now = new Date().getTime()
  const diff = target - now

  return {
    days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor(diff / (1000 * 60 * 60)) % 24),
    minutes: Math.max(0, Math.floor(diff / (1000 * 60)) % 60),
    seconds: Math.max(0, Math.floor(diff / 1000) % 60)
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ marginTop: 20 }}>
      <h3>COMIENZA EN</h3>
      <p>{time.days} DÍAS</p>
      <p>{time.hours} HORAS</p>
      <p>{time.minutes} MINUTOS</p>
      <p>{time.seconds} SEGUNDOS</p>
    </div>
  )
}
