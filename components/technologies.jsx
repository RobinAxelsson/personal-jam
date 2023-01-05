export default function Technologies({ technologies }) {
  return (
    <div className="card-general hero-section" key={Technologies}>
    <div className="hero-section-content">
            <h2>Technologies</h2>
            <table>
            {technologies.map(tech => (
                <tr key={tech.technology}>
                      <td key={tech.technology}>{tech.technology}</td>
                      <td key="professional" >{tech.professional}</td>
                      <td key="tech.examined" >{tech.examined}</td>
                      <td key="private">{tech.private}</td>
                      <td key="tech.grade">{tech.grade}</td>
                </tr>))}
            </table>
      </div>
      </div>
  );
}
