export function generateFrontPage(eng){
    console.log('generating front page');
    return eng? 
        `<div class="page">
            <header>
                <div class="profile-picture">
                    <img src="CV-portrait.jpg" alt="Profile Picture">
                </div>
                <p></p>
                <h1>Robin Salih Axelsson</h1>
                <h2 class="occupation-header">System .NET Developer</h2>
            </header>
            <section>
                <h2 class="section-header">Profile</h2>
                <div class="section-content">
                    <table class="profile-table">
                        <tr>
                            <th>Location:</th>
                            <td>Gothenburg, Sweden</td>
                        </tr>
                        <tr>
                            <th>Job Status:</th>
                            <td>Open to work</td>
                        </tr>
                        <tr>
                            <th>Speciality:</th>
                            <td>Unit testing, Advanced C#, DevOps/Scripting</td>
                        </tr>
                        <tr>
                            <th>Tech Stack:</th>
                            <td>Azure, React, C# .NET, MS SQL Server</td>
                        </tr>
                        <tr>
                            <th>Education:</th>
                            <td>.NET Developer vocational degree, Teknikhögskolan (see <a
                                    href="Kursplan-.NET-utvecklare-2020-Teknikhögskolan.pdf">courses</a>)</td>
                        </tr>
                        <tr>
                            <th>Said about me:</th>
                            <td>&quot;He can solve any coding problem in this company&quot;</td>
                        </tr>
                        <tr>
                            <th>Hobbies:</th>
                            <td>Sail Racing, Gym, Coding, Brazilian Jiu Jitsu</td>
                        </tr>
                    </table>
                </div>
            </section>
            <section>
                <h2 class="section-header">Introduction</h2>
                <div class="section-content">
                    <p>I am a .NET developer from Gothenburg who never stops learning. Before the covid pandemic I worked as a Design
                        Engineer in the Gothenburg's automotive industry but when I discovered my talent and passion for
                        writing code I changed my career to fully commit to Software Engineering.</p>
                    
                    <p>I am a meticulous coder who values well-abstracted, simple code that is easy to test, maintain, and understand.
                    I always have a programming project in mind - idées and solutions come to me around the clock.
                    I actively seek knowledge from the necessary resources, including source code, decompiled code,
                    programming books, AI tools, the web, online courses, and more.</p>
                    
                    <p>I have developed a strong mental game through my years in competitive sailing, along with endless energy and stamina
                    for problem-solving. In a team setting, I work autonomously, take initiative, and am not afraid to ask questions
                    or learn from those around me.</p>
                </div>
            </section>
        </div>`:
        `<div class="page">
            <header>
                <div class="profile-picture">
                    <img src="CV-portrait.jpg" alt="Profile Picture">
                </div>
                <p></p>
                <h1>Robin Salih Axelsson</h1>
                <h2 class="occupation-header">.NET Utvecklare, Full-Stack</h2>
            </header>
            <section>
                <h2 class="section-header">Profil</h2>
                <div class="section-content">
                    <table class="profile-table">
                        <tr>
                            <th>Plats:</th>
                            <td>Göteborg</td>
                        </tr>
                        <tr>
                            <th>Arbetsstatus:</th>
                            <td>Öppen för ny utmaningar</td>
                        </tr>
                        <tr>
                            <th>Specialisering:</th>
                            <td>Enhetstestning, Avancerad C#, DevOps/Scripting</td>
                        </tr>
                        <tr>
                            <th>Tech Stack:</th>
                            <td>Azure, React, ASP.NET C#, MS SQL Server</td>
                        </tr>
                        <tr>
                            <th>Utbildning:</th>
                            <td>Teknikhögskolan .NET Utvecklare Yrkeshögskoleexamen (se <a
                                    href="Kursplan-.NET-utvecklare-2020-Teknikhögskolan.pdf">kurser</a>)</td>
                        </tr>
                        <tr>
                            <th>Sagt om mig:</th>
                            <td>&quot;Han kan lösa alla kodproblem i företaget&quot;</td>
                        </tr>
                        <tr>
                            <th>Hobbies:</th>
                            <td>Kappsegling, Gym, Programmering, Brazilian Jiu Jitsu</td>
                        </tr>
                    </table>
                </div>
            </section>
            <section>
                <h2 class="section-header">Introduktion</h2>
                <div class="section-content">
                    <p>Jag är en .NET utvecklare från Göteborg som aldrig slutar att utvecklas. Innan pandemin så jobbade jag
                        som designingenjör i fordonsindustrin i Göteborg men när jag upptäckte min talang och passion för programmering
                        bytte jag karriär, och sedan dess har jag fokuserat 100% på mjukvaruutveckling.</p>
    
                    <p>Jag är en noggrann kodare som gillar tydlig, väl abstraherad, enkel kod som är lätt att underhålla och
                        testa. Jag har alltid ett programmeringsprojekt på gång - idéer och lösningar dyker upp dygnet runt. 
                        Jag söker kunskap aktivt från de resurser som krävs, inklusive källkod, dekompilerad kod,
                        programmeringsböcker, AI-verktyg, webben, webbkurser m.fl.</p>
    
                    <p>Från mina år inom kappsegling på bl.a. juniorlandslagsnivå har jag utvecklat en stark mental förmåga,
                        framförallt när det gäller uthållighet, fokus och problemlösning. I ett team så är jag duktig på att
                        kommunicera, ta till mig feedback, söka upp information, jobba autonomt, ställa frågor och lära från
                        människorna omkring mig.</p>
                </div>
            </section>
        </div>`
};