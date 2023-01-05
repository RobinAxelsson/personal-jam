export default function Technologies({technologies}) {
const { headers, rows } = technologies;
  return (
    <div className="card-general hero-section" key={Technologies}>
    <div className="hero-section-content">
            <h2>Technologies</h2>
            <table>
            {(
                <tr key={headers.technology}>
                      <th key={"technology"}>{headers.technology}</th>
                      <th key="professional" >{headers.professional}</th>
                      <th key="examined" >{headers.examined}</th>
                      <th key="private">{headers.private}</th>
                      <th key="grade"></th>
                </tr>)}
            {rows.map(tech => (
                <tr key={tech.technology}>
                      <td key={tech.technology}>{tech.technology}</td>
                      <td key="professional" >{convertBin(tech.professional)}</td>
                      <td key="tech.examined" >{convertBin(tech.examined)}</td>
                      <td key="private">{convertBin(tech.private)}</td>
                      <td key="tech.grade">{convertStars(tech.grade)}</td>
                </tr>))}
            </table>
      </div>
      </div>
  );
}

const convertBin = (number) => number == '1' ? '✔️' : '❌';
const convertStars = (number) => '★'.repeat(number) + '☆'.repeat(5 - number);