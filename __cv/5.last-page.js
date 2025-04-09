export function generateLastPage(eng){
    console.log('generating last page');
    return eng? 
    `<div class="page">
        <div class="section-content">
            <h3>Ludo V2 Online - .NET multiplayer SignalR Game Engine and Platform - Teknikhögskolan</h3>
            <p>Responsible for building a Fullstack ASP.NET Web, Ludo Board Game Platform. Implementations: SQL
                server with Entity Framework for user and game data, email login, email game invitations, SignalR
                interactive gaming, token and cookie identification, multiple game rooms, AI players and server side
                logic. To enable multiple game rooms every game room has its own instance of an game engine IOC
                container. The project was developed in a two man team.
                <br><br>C#, ASP.NET, SignalR, Entity-Framework, JWT, Cookies, Html, JavaScript, CSS, GitHub,
                Microsoft Dependency Injection<br><br>
        </div>
        </p>
        <section>
            <h2 class="section-header">Education</h2>
            <div class="section-content">
                <p><strong>.NET Developer Voccational Degree (see <a
                            href="/Kursplan-.NET-utvecklare-2020-Teknikhögskolan.pdf">courses</a>)</strong> -
                    Teknikhögskolan, 2020 - 2022</p>
                <p><strong>CAD-Engineer - Mechanical Design Voccational Degree</strong> - YRGO Lindholmen, 2017 - 2019
                </p>
                <p><strong>Psychologist: Sports Programme</strong> - Umeå University, 2012 - 2013</p>
                <p><strong>Basics of Psychology</strong> - Gothenburg University, 2011 - 2012</p>
                <p><strong>High School Diploma in Science & Sail Racing</strong> Lerums Gymnasium 2007 - 2011</p>
            </div>
        </section>

        <section>
            <h2 class="section-header">Contact</h2>
            <div class="section-content">
                <table>
                    <tr>
                        <td>LinkedIn:</td>
                        <td><a href="https://linkedin.com/in/axelsson-robin/">linkedin.com/in/axelsson-robin</a></td>
                    </tr>
                    <tr>
                        <td>GitHub:</td>
                        <td><a href="https://github.com/RobinAxelsson/">github.com/robinaxelsson</a> (demo on request)
                        </td>
                    </tr>
                    <tr>
                        <td>Site:</td>
                        <td><a href="https://salihaxelsson.com/">salihaxelsson.com</a></td>
                    </tr>
                    <tr>
                        <td>Latest CV:</td>
                        <td><a href="https://salihaxelsson.com/cv">salihaxelsson.com/cv</a></td>
                    </tr>
                </table>
            </div>
        </section>
    </div>`:
    `    <div class="page">
        <div class="section-content">
            <h3>BoostApp PX - ASP.NET omvänt Proxy REST API för företagets tidrapporter - Nexer Group</h3>
            <p>
                BoostApp är en microservice app med syfte att främja fysisk aktivitet (och tidrapportering) hos Nexers anställda
                genom starpoints.
                BoostApp PX var en ASP.NET mikrotjänst som skulle skicka en förfrågan till ett annat internt API (DWData) för att se vilka konsulter som
                tidrapporterat i tid och uppdatera deras starpoints därefter. Från början hade tjänsten intern state via en starpointstabell
                vilket gjorde att det var svårt att hålla det synkat med den faktiska starpoint mikro tjänsten. Jag designa om tjänsten
                så att den inte längre hade en egen databas utan uppdaterade starpointdatabasen direkt efter att först synka med DWData.
                Tjänsten fungerade fortfarande som ett REST api för frontend så att den kan visa den anställdes starpoints i mobilappen via GraphQL.

                <br><br>C#, ASP.NET Web API, Microsoft Identity Server, Azure DevOps, Docker, HttpClient, Postman, GraphQL,
                Microsoft Dependency Injection, Jason Web Token
            </p>
            <h3>Ludo V2 Online - .NET multiplayer SignalR Spelmotor och Spelplattform - Teknikhögskolan</h3>
            <p>
                Detta var slutprojektet i Backendkursen på Teknikhögskolan. Tillsammans med en klasskamrat byggde
                vi en spelmotor och en spelplattform med krypterad login och olika spelrum. Det gick att bjuda in vänner till
                sitt spelrum och spelet var full duplex med SignalR. Det gick att chatta med spelarna och AI-spelare kunde också delta.
                Vi identifierade spelarna med cookies och all logik sker på servern. För att hantera
                interna beroenden har varje spelrum en egen DI container som enkapsulerar allt som behövs för enskilt spel.

                <br><br>C#, ASP.NET, SignalR, Entity-Framework, JWT, Cookies, Html, JavaScript, CSS, GitHub,
                Microsoft Dependency Injection<br><br>
        </div>
        </p>
        <section>
            <h2 class="section-header">Utildning</h2>
            <div class="section-content">
                <p><strong>.NET Utvecklare Yrkesehögskoleexamen (se <a href="/Kursplan-.NET-utvecklare-2020-Teknikhögskolan.pdf">kurser</a>)</strong> - Teknikhögskolan, 2020 - 2022</p>
                <p><strong>CAD-Engineer - Mechanical Design yrkeshögskoleexamen</strong> - YRGO Lindholmen, 2017 - 2019
                </p>
                <p><strong>Psykologprogrammet: idrottsinriktning</strong> - Umeå universitet, 2012 - 2013</p>
                <p><strong>Studentexamen Natur/Kappsegling</strong> Lerums gymnasium 2007 - 2011</p>
            </div>
        </section>

        <section>
            <h2 class="section-header">Kontakt</h2>
            <div class="section-content">
                <table>
                    <tr>
                        <td>LinkedIn:</td>
                        <td><a href="https://linkedin.com/in/axelsson-robin/">linkedin.com/in/axelsson-robin</a></td>
                    </tr>
                    <tr>
                        <td>GitHub:</td>
                        <td><a href="https://github.com/RobinAxelsson/">github.com/robinaxelsson</a> (demo on request)
                        </td>
                    </tr>
                    <tr>
                        <td>Site:</td>
                        <td><a href="https://salihaxelsson.com/">salihaxelsson.com</a></td>
                    </tr>
                    <tr>
                        <td>Senaste CV:</td>
                        <td><a href="https://salihaxelsson.com/cv-se">salihaxelsson.com/cv-se</a></td>
                    </tr>
                </table>
            </div>
        </section>
    </div>`;
}