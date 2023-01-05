import fs from 'fs';

export default function getTechnologies() {
    const rows = readValidRows();
    const headers = createValidHeaders(rows);
    const rowObjects = createValidRowObjects(rows);

    return {
      headers,
      rows: rowObjects
    };
  }

function readValidRows() {
    const fileContent = fs.readFileSync('resume/technologies.csv', 'utf8');
    const rows = fileContent.trim().split('\n').filter(x => x !== "");
    if (rows.length < 2 || rows.some(row => row === ''))
        throw new Error("Rows should not be white space and be at least one header and one value row. Got: " + JSON.stringify(rows));
    return rows;
}

function createValidRowObjects(rows) {
    const rowObjects = rows.slice(1, rows.length - 1).map(x => {
        const techColumns = x.split(';');

        if (techColumns.length !== 5) {
            throw new Error("Columns must be exactly 5, got:" + JSON.stringify(techColumns));
        }

        techColumns.forEach(x => {
            if (x === undefined || x === null || x === "")
                throw new Error("Invalid value, got: ", x);
        });

        let technologies = techColumns[0];
        let professional = techColumns[1] * 1;
        let examined = techColumns[2] * 1;
        let privateUse = techColumns[3] * 1;

        [professional, examined, privateUse].forEach(x => {
            if (x !== 0 && x !== 1) {
                throw new Error("Boolvalue must be 0 or 1, got:" + professional);
            }
        });

        let grade = techColumns[4];
        if (grade * 1 === NaN || grade > 5 || grade < 1) {
            throw new Error("Grade must be a number between 1 and 5, got: " + grade);
        }


        return {
            technology: technologies,
            professional,
            examined,
            private: privateUse,
            grade
        };
    });

    return rowObjects.sort((a,b) => (a.technology < b.technology) ? -1 : 0);
}

function ensureValidString(stringValue){
    if(stringValue === undefined || stringValue === null || stringValue === "")
    throw new Error("Invalid string value, got: ", stringValue);
}

function createValidHeaders(rows) {
    let headerRow = rows[0].split(';');
    headerRow.forEach(x => ensureValidString(x));

    const headers = {
        technology: headerRow[0],
        professional: headerRow[1],
        examined: headerRow[2],
        private: headerRow[3],
        grade: headerRow[4]
    };
    return headers;
}
