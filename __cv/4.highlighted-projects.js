export function generateHighlightedProjectsPage(eng){
    console.log('generating highlighted project page');
    return eng?
        `<div class="page">
            <section>
                <h2 class="section-header">Highlighted Projects</h2>
                <div class="section-content">
                    <div class="projects">
                        <h3>Exchange Rates Fetcher SOAP to REST - Bokio</h3>
                        <p>Bokio is a bookkeeping web app targeting big and small companies on the Swedish market.
                            Bokio has some banking features that rely on having up-to-date exchange rates from the Swedish
                            currency.
                            The problem was that our current implimentation SOAP was soon end of life and will be replaced
                            by a
                            REST API (that was not mapped one to one).
                            I wrote a custom http client integration that fetched exchange rate data on a given time every
                            day
                            to sync it to a SQL database.
                            I also implemented the endpoints for the frontend and a fallback to directly call the Web API
                            directly if the server sync was down.
                            <br><br>C#, Azure, ASP.NET, Entity Framework, T-SQL, DefaultHttpClientFactory,
                            SocketsHttpHandler
                        </p>
                        <h3>Timer and Worker Module in Cendot by Iver 1998-Present - Iver Sverige</h3>
                        <p>Cendot is a monolithic desktop app that is distributed on Citrix servers to the Iver Employees.
                            Cendots architecture is of MVVM design and is all written in C#. The core domain logic is also
                            used
                            in company owned apps as dll:s or nugets in web apps, worker services and REST API:s. As a
                            diverse
                            IT-Service company with its own self made business eco-system (Cendot) and its own development
                            appartment, Iver process owners have an intimate connection with our developer team. Together we
                            design and discuss new features that automate processes, simplifys time reporting, pricing and
                            invoicing. We also enable new pricing models and business concepts.
                            <br><br>C#, Microsoft WPF, T-SQL, NHibernate, Citrix, Rest-API, Azure DevOps, Azure Application
                            Insights
                        </p>
                        <h3>Software Update Management System (SUMS) - Data Summery Service - Volvo Cars</h3>
                        <p>This applications purpose is to generate Software Update Management System (SUMS) traceability
                            documents for car variant certification. This is to be able to oblige with stricter EU and other
                            regulations for modern cars. With the Software-PLM platform SystemWeaver as source for data we
                            designed a core app that integrates with the SystemWeaver nuget API and collects the relevant
                            data
                            following a preprogrammed set of extensive business rules (and outputs a different readable
                            documents).
                            <br><br>My main contribution was development of the applications testing projects (integration
                            and
                            unit test), dependency management, driving code refactoring and code design.
                            <br><br>C#, X-Unit, Microsoft Dependency Injection, ASP.NET Web API, PowerShell, AzureDevOps,
                            SystemWeaver, Jira, SQL-lite
                        </p>
                        <h3>BoostApp PX - ASP.NET Reverse Proxy REST API for company time reports - Nexer Group</h3>
                        <p>Responsible for building a reverse Proxy API (ASP.NET) in a micro service architecture within a
                            inhouse SCRUM Team. Further responsible for implementing OAuth 2.0 (Microsoft Identity Platform,
                            AD), CI/CD with Azure DevOps and Docker, integration testing and scripting with Postman.
                            <br><br>C#, ASP.NET Web API, Microsoft Identity Server, Azure DevOps, Docker, HttpClient,
                            Postman,
                            Microsoft Dependency Injection
                        </p>
                    </div>
                </div>
            </section>
        </div>` : 
        ` <div class="page">
        <section>
            <h2 class="section-header">Utvalda Projekt</h2>
            <div class="section-content">
                <div class="projects">
                    <h3>Valutakurs klient SOAP till REST - Bokio</h3>
                    <p>
                        Bokio är en bokförings-webbapp för den svenska marknaden och har några bankfunktioner som förenklas
                        av att användaren alltid har senaste valutakurserna tillgängliga. Problemet var att Riksbankens SOAP API
                        som användes var snart end of life och skulle ersättas av REST. Eftersom mappningen inte var 1:1 så
                        fick jag skriva om den gamla klienten helt och förutom inhämtningen av data så implementerade jag
                        ett uppbackningsystem med Azure Logic Apps som backade upp valutakurserna dagligen i bokios databas
                        för att undvika beroendet till Riksbankens tillgänglighet.
                        <br><br>C#, Azure, ASP.NET, Entity Framework, T-SQL, DefaultHttpClientFactory,
                        SocketsHttpHandler, Azure Application Insights
                    </p>
                    <h3>Funktionsdesign: Prissättningsmodeller - Iver Sverige</h3>
                    <p>
                        Iver är i första hand ett konsult- och supportbolag som hjälper företag i deras digitaliseringsprocess.
                        Deras huvudsakliga affärssystem är den gigantiska, egenutvecklade, monolitiska WPF appen Cendot - som är
                        helt skriven i C#. Som ett internt system så hade mitt Team Time & People ett nära samarbete
                        med användare och processägare. Tillsammans så designade vi och utvecklade vi olika prissättningsmodeller
                        för konsulttimmar som jag sedan implementerade i affärssystemet.
                        <br><br>C#, Microsoft WPF, T-SQL, NHibernate, Citrix, Rest-API, Azure DevOps, Azure Application
                        Insights
                    </p>
                    <h3>Software Update Management System (SUMS), Enhetstest infrastruktur - Volvo Cars</h3>
                    <p>
                        För att kunna visa på en spårbarhet inom mjukvarukrav, ECU:er och annan mjukvara för en viss variant
                        krävs mycket data. Volvo använder sig av 3:e parts IT-PLM-systemet SystemWeaver som är en mycket flexibel
                        databas där användaren kan definiera sina egna typer/tabeller.
                        Vårt teams uppgift var att sammanställa en variants krav i ett dokument via SystemWeaver:s nuget API.
                        Applikationen var helt ny från scratch så vi hade ingen grund för enhetstester så jag implementerade
                        fixturer för dependency injection, sqlite, in-memory databas och dev databas i x-unit samt ett test-bibliotek.
                        
                        <br><br>C#, X-Unit, Microsoft Dependency Injection, ASP.NET Web API, PowerShell, AzureDevOps,
                        SystemWeaver, Jira, SQL-lite
                    </p>
                </div>
            </div>
        </section>
    </div>`;
}