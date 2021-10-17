const inquirer = require('inquirer');
const { Manager, Engineer, Intern } = require('./role');

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

