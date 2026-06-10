export default function Participants() {
  const list = ["Javi", "Nano", "Pitu", "El Chino"]

  return (
    <div style={{ marginTop: 30 }}>
      <h3>PARTICIPANTES</h3>
      <p>{list.length} / 12</p>

      <ul>
        {list.map((p, i) => (
          <li key={i}>{i + 1}. {p}</li>
        ))}
      </ul>
    </div>
  )
}
