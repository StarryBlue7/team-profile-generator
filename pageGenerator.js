const fs = require('fs');



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
        <section class="d-flex flex-row justify-content-center col-10">
            
${cards}
            
        </section>
    </main>
</body>

</html>`
}

module.exports = { generatePage, generateCards, generateHTML }