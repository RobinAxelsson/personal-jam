import fs from 'fs';
import { generateFrontPage } from './1.frontpage.js';
import { generateSkillAssesmentPage } from './2.skill-assesment.js';
import { generateExperiencePage } from './3.experience.js';
import { generateHighlightedProjectsPage } from './4.highlighted-projects.js';
import { generateLastPage } from './5.last-page.js';

console.log('starting program');
const generateCv = (eng) => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Robin Salih Axelsson CV</title>
    <link rel="stylesheet" href="cv.css">
</head>
<body>
    ${generateFrontPage(eng)}
    ${generateSkillAssesmentPage(eng)}
    ${generateExperiencePage(eng)}
    ${generateHighlightedProjectsPage(eng)}
    ${generateLastPage(eng)}
</body>

</html>`;

const eng = true;
const swe = !eng;

fs.writeFileSync('./public/CV-se.html', generateCv(swe)), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    }
};

fs.writeFileSync('./public/CV.html', generateCv(eng)), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    }
};