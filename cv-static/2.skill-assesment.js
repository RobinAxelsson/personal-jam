export function generateSkillAssesmentPage(eng){
    console.log('generating skill assesment page');
    return `<div class="page">
        <h2 class="section-header">${eng? 'Skill Assessment' : 'Färdigheter'}</h2>
        <div class="skills-container">
            <div class="skills-left">
                <table class="skills-table">
                    <thead>
                        <th>${eng? 'Programming Languages' : 'Programspråk'}</th>
                    </thead>
                    <tbody>
                        <tr><td>Bash</td></tr>
                        <tr><td>C</td></tr>
                        <tr><td>C#</td></tr>
                        <tr><td>JavaScript</td></tr>
                        <tr><td>PowerShell</td></tr>
                        <tr><td>Python</td></tr>
                        <tr><td>TypeScript</td></tr>
                        <tr><td>x86-64 Assembly Nasm</td></tr>
                    </tbody>
                </table>
                
                <table class="skills-table">
                    <thead>
                        <th>Backend</th>
                    </thead>
                    <tbody>
                        <tr><td>ASP.NET</td></tr>
                        <tr><td>Entity Framework</td></tr>
                        <tr><td>Express.js</td></tr>
                        <tr><td>Microsoft Dependency Injection</td></tr>
                        <tr><td>Microsoft Identity Server</td></tr>
                        <tr><td>NHibernate</td></tr>
                        <tr><td>Node.js</td></tr>
                        <tr><td>SignalR</td></tr>
                    </tbody>
                </table>          
                
                <table class="skills-table">
                    <thead>
                        <th>DevOps</th>
                    </thead>
                    <tbody>
                        <tr><td>Azure Devops/Pipelines</td></tr>
                        <tr><td>Docker</td></tr>
                        <tr><td>Git</td></tr>
                        <tr><td>GitHub Actions</td></tr>
                        <tr><td>NuGet packaging</td></tr>
                    </tbody>
                </table>
            
                <table class="skills-table">
                    <thead>
                        <th>Frontend/UI</th>
                    </thead>
                    <tbody>
                        <tr><td>Microsoft WPF</td></tr>
                        <tr><td>Next.js</td></tr>
                        <tr><td>React.js</td></tr>
                        <tr><td>Razor Pages</td></tr>
                        <tr><td>CSS/SASS/Tailwind</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="skills-right">
                <table class="skills-table">
                    <thead>
                        <th>${eng? 'Database' : 'Databas'}</th>
                    </thead>
                    <tbody>
                        <tr><td>Azure CosmosDB</td></tr>
                        <tr><td>Microsoft SQL Server</td></tr>
                        <tr><td>SQLite</td></tr>
                        <tr><td>SystemWeaver</td></tr>
                    </tbody>
                </table>
                <table class="skills-table">
                    <thead>
                        <th>Cloud Tech</th>
                    </thead>
                    <tbody>
                        <tr><td>Azure App Service</td></tr>
                        <tr><td>Azure Application Insights</td></tr>
                        <tr><td>Azure Blob Storage</td></tr>
                        <tr><td>Azure Cosmos DB</td></tr>
                        <tr><td>Azure Functions</td></tr>
                        <tr><td>Azure Logic Apps</td></tr>
                        <tr><td>Azure Table Storage</td></tr>
                    </tbody>
                </table>
                <table class="skills-table">
                    <thead>
                        <th>Test</th>
                    </thead>
                    <tbody>
                        <tr><td>Burp Suite</td></tr>
                        <tr><td>MS-Test</td></tr>
                        <tr><td>Newman</td></tr>
                        <tr><td>NUnit</td></tr>
                        <tr><td>Playwright</td></tr>
                        <tr><td>Postman</td></tr>
                        <tr><td>XUnit</td></tr>
                    </tbody>
                </table>
            
                <table class="skills-table">
                    <thead>
                        <th>${eng? 'Miscellaneous' : 'Övrigt'}</th>
                    </thead>
                    <tbody>
                        <tr><td>Adobe Photoshop</td></tr>
                        <tr><td>Catia V5</td></tr>
                        <tr><td>Linux</td></tr>
                        <tr><td>Microsoft WSL 2</td></tr>
                        <tr><td>Siemens Teamcenter</td></tr>
                        <tr><td>Jira</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>`;
}