const inquirer = require('inquirer');
const { Manager, Engineer, Intern } = require('./role');
const pageGenerator = require('./pageGenerator');

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

function queryTeammate(team, role, questions, roleQuestions) {
    questions[3] = roleQuestions[role];
    
    inquirer
        .prompt(questions)
        .then(answers => {
            addTeammate(team, role, answers);

            nextQuery(answers, team);
        });
}

function nextQuery(answers, team) {
    if (answers.next === 'Finished adding') {
        console.log(team);
        pageGenerator.generatePage(team);
    } else {
        queryTeammate(team, answers.next, questions, roleQuestions);
    }
}

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

function init() {
    queryTeammate({}, 'manager', questions, roleQuestions);
}

init();

module.exports = { queryTeammate, nextQuery, addTeammate, questions, roleQuestions };