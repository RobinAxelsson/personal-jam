export default function TechTable({ technologies }) {
  const { headers, rows } = technologies;
  return (
    <div className="tech-table-container">
    <h2 className="tech-table__title">Technologies</h2>
    <table className="tech-table">
      {
        <tr
          className="tech-table__row tech-table__row--header"
          key={headers.technology}
        >
          <th className="tech-table__cell" key="technology">
          </th>
          <th className="tech-table__cell" key="professional">
            {headers.professional}
          </th>
          <th className="tech-table__cell" key="examined">
            {headers.examined}
          </th>
          <th className="tech-table__cell" key="private">
            {headers.private}
          </th>
          <th className="tech-table__cell" key="grade"></th>
        </tr>
      }
      {rows.map((tech) => (
        <tr className="tech-table__row" key={tech.technology}>
          <td className="tech-table__cell" key={tech.technology}>
            {tech.technology}
          </td>
          <td className="tech-table__cell tech-table__cell--checkable" key="professional">
            {convertBin(tech.professional)}
          </td>
          <td className="tech-table__cell tech-table__cell--checkable" key="tech.examined">
            {convertBin(tech.examined)}
          </td>
          <td className="tech-table__cell tech-table__cell--checkable" key="private">
            {convertBin(tech.private)}
          </td>
          <td className="tech-table__cell" key="tech.grade">
            {convertStars(tech.grade)}
          </td>
        </tr>
      ))}
    </table>
    </div>
  );
}

const convertBin = (number) => (number == "1" ? "✔️" : "❌");
const convertStars = (number) => "★".repeat(number) + "☆".repeat(5 - number);
