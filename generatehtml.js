const { mainModule } = require('process');

function generateHTML(manager, engineer, intern) {
    console.log('data in generate html', data);
    return `
    <!DOCTYPE html>
    <html lang='en'>
    
    <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' rel='stylesheet'
            integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3' crossorigin='anonymous'>
        <link rel='stylesheet' href='sandbox.css'>
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
    
    </div>
    </body>

    </html>
    `
}

function createMangerCard(manager) {
    return `
    <div id='manager-card' class='row card text-dark bg-light m-3 shadow p-3 mb-5 bg-body rounded'
        style='max-width: 18rem;'>
        <div class='card-header custom-header'>
            Name: ${manager.managerName} <br>
            <i class='fa-solid fa-money-bill'></i> Position: Manager
        </div>
        <div class='card-body custom-body'>
            <p class='card-text'>
                ID: ${manager.managerId} <br>
                Email: ${manager.managerEmail} <br>
                Office Number: ${manager.officeNumber}
            </p>
        </div>
    `
}

function createEngineerCards(engineer) {
    return `
    <div id='engineer-card' class='row card text-dark bg-light m-3 shadow p-3 mb-5 bg-body rounded'
    style='max-width: 18rem;'>
    <div class='card-header custom-header'>
        Name: ${engineer.engineerName} <br>
        <i class='fa-solid fa-code'></i> Position: Engineer
    </div>
    <div class='card-body custom-body'>
        <p class='card-text'>
            ID: ${engineer.engineerId} <br>
            Email: ${engineer.engineerEmail} <br>
            GitHub: ${engineer.github}
        </p>
    </div>
</div>
    `
}

function createInternCards(intern) {
    return `
    <div id='intern-card' class='row card text-dark bg-light m-3 shadow p-3 mb-5 bg-body rounded'
        style='max-width: 18rem;'>
        <div class='card-header custom-header'>
            Name: ${intern.internName} <br>
            <i class='fa-solid fa-mug-saucer'></i> Position: Intern
        </div>
        <div class='card-body custom-body'>
            <p class='card-text'>
                ID: ${intern.internId} <br>
                Email: ${intern.internEmail} <br>
                School:${intern.school}
            </p>
        </div>
    </div>
`
}

module.exports = generateHTML;