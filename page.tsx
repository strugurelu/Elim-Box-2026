import Countdown from "../components/Countdown"
import Participants from "../components/Participants"
import Logo from "../components/Logo"

export default function Page() {
  return (
    <main style={{ padding: 40 }}>
      <Logo />

      <h2 style={{ marginTop: 20 }}>ELIM 2026 BOX</h2>

      <Countdown />

      <button style={{
        marginTop: 20,
        padding: 12,
        background: "white",
        color: "black",
        borderRadius: 8
      }}>
        Inscribirme
      </button>

      <Participants />
    </main>
  )
}
