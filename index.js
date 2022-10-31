// all requirement pulls
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./generateREADME');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of your project?',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'GitHub Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project and technologies used',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide all instructions on how to use the project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['apache', 'GPL', 'unlicense', 'no license']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Were there any contributors on the project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'any tests availble or provided for the app?',
    }
];

//writes user README file
const writeReadme = readmeContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./userData/user-README.md', readmeContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'README created!'
            });
        });
    });
};

// function to start questions
const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// function call to start app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateReadme(readmeData);
})
.then(readme => {
    return writeReadme(readme);
})
.then(writeReadmeResponse => {
    console.log(writeReadmeResponse.message);
})
.catch(err => {
    console.log(err);
})

