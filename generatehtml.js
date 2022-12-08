const { mainModule } = require('process');

function generateHTML(manager, engineer, intern) {
    console.log('data in generate html', data);
    return `
  
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

function createInternCards(card) {

}

module.exports = generateHTML;