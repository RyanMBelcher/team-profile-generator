const { mainModule } = require('process');

function generateHTML(manager, engineer, intern) {
    // console.log('data in generate html', data);
    return `
    <!DOCTYPE html>
    <html lang='en'>
    
    <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' rel='stylesheet'
            integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3' crossorigin='anonymous'>
        <link rel='stylesheet' href='style.css'>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'
            integrity='sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=='
            crossorigin='anonymous' referrerpolicy='no-referrer' />
        <title>Team Awesome</title>
    </head>
    <body>
    <nav id='custom-nav' class='navbar navbar-light d-flex justify-content-center'>
        <h1>Team Awesome</h1>
    </nav>
    <div id='custom-div' class='row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center'>
    ${createMangerCard(manager)}
    ${createEngineerCards(engineer)}
    ${createInternCards(intern)}
    </div>
    </body>

    </html>
    `
}

function createMangerCard(manager) {
    console.log(manager)
    return `
    <div id='manager-card' class='row card text-dark bg-light m-3 shadow p-3 mb-5 bg-body rounded'
        style='max-width: 18rem;'>
        <div class='card-header custom-header'>
            Name: ${manager.name} <br>
            <i class='fa-solid fa-money-bill'></i> Position: Manager
        </div>
        <div class='card-body custom-body'>
            <p class='card-text'>
                ID: ${manager.id} <br>
                Email: ${manager.email} <br>
                Office Number: ${manager.officeNumber}
            </p>
        </div>
    `
}

function createEngineerCards(engineers) {
    console.log(engineers);
    let cards = ''
    engineers.forEach(engineer => {
        cards += `
        <div id='engineer-card' class='row card text-dark bg-light m-3 shadow p-3 mb-5 bg-body rounded'
        style='max-width: 18rem;'>
        <div class='card-header custom-header'>
            Name: ${engineer.name} <br>
            <i class='fa-solid fa-code'></i> Position: Engineer
        </div>
        <div class='card-body custom-body'>
            <p class='card-text'>
                ID: ${engineer.id} <br>
                Email: ${engineer.email} <br>
                GitHub: ${engineer.github}
            </p>
        </div>
    </div>
        `
    });
    return cards;
}

function createInternCards(interns) {
    let cards = ''
    interns.forEach(intern => {
        cards += `
        <div id='engineer-card' class='row card text-dark bg-light m-3 shadow p-3 mb-5 bg-body rounded'
        style='max-width: 18rem;'>
        <div class='card-header custom-header'>
            Name: ${intern.name} <br>
            <i class='fa-solid fa-code'></i> Position: Engineer
        </div>
        <div class='card-body custom-body'>
            <p class='card-text'>
                ID: ${intern.id} <br>
                Email: ${intern.email} <br>
                GitHub: ${intern.school}
            </p>
        </div>
    </div>
        `
    });
    return cards;
}

module.exports = generateHTML;