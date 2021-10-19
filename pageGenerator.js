const fs = require('fs');

// Generate HTML file page from generated cards and main template
function generatePage(team) {
    let cards = '';
    // Add cards for any included roles on team
    cards += team.manager ? generateCards(team, 'manager') : '';
    cards += team.engineer ? generateCards(team, 'engineer') : '';
    cards += team.intern ? generateCards(team, 'intern') : '';

    const html = generateHTML(cards);
 
    console.log('\nTeam page created!');
    
    return fs.writeFileSync('index.html', html);
}

// Generate cards of employees from role array in team object
function generateCards(team, role) {
    let roleCards = '';
    
    team[role].forEach(teammate => {
        let details = '';
        const list = `                    <li class="list-group-item px-2">`;
        details += teammate.id ? list + `Employee ID: ${teammate.id}</li> \n` : '';
        details += teammate.email ? list + `Email: <a href="mailto: ${teammate.email}">${teammate.email}</a></li> \n` : '';
        details += teammate.office ? list + `Office No.: ${teammate.office}</li> \n` : '';
        details += teammate.gitHub ? list + `GitHub: <a target=_blank href="https://github.com/${teammate.gitHub}">${teammate.gitHub}</a></li> \n` : '';
        details += teammate.school ? list + `School: ${teammate.school}</li> \n` : '';

        const card = `
            <article class="card col-3 m-2 bg-info text-light shadow">
                <section class='card-body mb-1 pt-4 p-1 text-center'>
                    <h3>${teammate.name}</h3>
                    <h4>${teammate.role}</h4>
                </section>
                <ul class="list-group list-group-flush text-dark mb-3">
${details}
                </ul>
            </article> \n`;

        roleCards += card;
    });
    return roleCards;
}

// Main page template
function generateHTML(cards) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">

    <title>Team Page</title>
</head>

<body class="d-flex flex-column align-items-center">
    <header class="bg-info text-light text-center w-100 mb-5 py-2"><h1>Team Page</h1></header>

    <main class="row d-flex flex-row justify-content-center w-100">
        <section class="d-flex flex-row flex-wrap justify-content-center col-10">
            
${cards}
            
        </section>
    </main>
</body>

</html>`
}

module.exports = { generatePage, generateCards, generateHTML }