const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const pageGenerator = require('./pageGenerator');

// Prompt for input of employee info
function queryTeammate(team, role) {
    const questions = [
        {
            message: 'Enter name: ',
            name: 'name'
        },
        {
            message: 'Enter id: ',
            name: 'id'
        },
        {
            message: 'Enter email: ',
            name: 'email'
        },
        {},
        {
            type: 'list',
            loop: false,
            message: 'Add another teammate?',
            choices: ['engineer', 'intern', 'Finished adding'],
            name: 'next'
        }
    ];
    
    const roleQuestions = {
        manager: {
            message: 'Enter office: ',
            name: 'office'
        },
        engineer: {
            message: 'Enter GitHub username: ',
            name: 'gitHub'
        },
        intern: {
            message: 'Enter school: ',
            name: 'school',
        }
    }

    questions[3] = roleQuestions[role];
    
    inquirer
        .prompt(questions)
        .then(answers => {
            addTeammate(team, role, answers);

            nextQuery(answers, team);
        });
}

// Generate page if finished adding, or query next employee type chosen
function nextQuery(answers, team) {
    if (answers.next === 'Finished adding') {
        pageGenerator.generatePage(team);
    } else {
        if (answers.next === 'engineer') {
            console.log('---------------------\nAdd engineer details:\n---------------------');
        } else {
            console.log('-------------------\nAdd intern details:\n-------------------')
        }
        queryTeammate(team, answers.next);
    }
}

// Add teammate object to role array in team object
function addTeammate(team, role, answers) {
    let teammate;

    if (role === 'manager') {
        teammate = new Manager(answers.name, answers.id, answers.email, answers.office);
    } else if (role === 'engineer') {
        teammate = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
    } else if (role === 'intern') {
        teammate = new Intern(answers.name, answers.id, answers.email, answers.school);
    }
    
    // If role has an array, add teammate to array, otherwise make new array for role
    team[role] ? team[role].push(teammate) : team[role] = [teammate];
    return teammate;
}

// Run on start
function init() {
    console.log('--------------------\nAdd manager details:\n--------------------');
    queryTeammate({}, 'manager');
}

init();

module.exports = { queryTeammate, nextQuery, addTeammate };