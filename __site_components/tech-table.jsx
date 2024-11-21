import styles from './tech-table.module.scss'

export default function TechTable({ technologies }) {
  const { headers, rows } = technologies;
  return (
    <div className={styles.tech_table_container}>
    <h2 className={styles.tech_table__title}>Technologies</h2>
    <table className={styles.tech_table}>
      {
        <tr
          className={styles.tech_table__row}
          key={headers.technology}
        >
          <th className={styles.tech_table__cell} key="technology">
          </th>
          <th className={styles.tech_table__cell} key="professional">
            {headers.professional}
          </th>
          <th className={styles.tech_table__cell} key="examined">
            {headers.examined}
          </th>
          <th className={styles.tech_table__cell} key="private">
            {headers.private}
          </th>
          <th className={styles.tech_table__cell} key="grade"></th>
        </tr>
      }
      {rows.map((tech) => (
        <tr className={styles.tech_table__row} key={tech.technology}>
          <td className={styles.tech_table__cell} key={tech.technology}>
            {tech.technology}
          </td>
          <td className={styles.tech_table__cell + " " + styles['tech-table__cell--checkable']} key="professional">
            {convertBin(tech.professional)}
          </td>
          <td className={styles.tech_table__cell + " " + styles['tech-table__cell--checkable']} key="tech.examined">
            {convertBin(tech.examined)}
          </td>
          <td className={styles.tech_table__cell + " " + styles['tech-table__cell--checkable']} key="private">
            {convertBin(tech.private)}
          </td>
          <td className={styles.tech_table__cell}  key="tech.grade">
            {convertStars(tech.grade)}
          </td>
        </tr>
      ))}
    </table>
    </div>
  );
}

const convertBin = (number) => (number == "1" ? "✓" : "");
const convertStars = (number) => "★".repeat(number) + "☆".repeat(5 - number);
