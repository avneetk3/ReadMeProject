// TODO: Include packages needed for this application
//new code :
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer prompts for userResponses
const questions = [
    {
        type: 'input',
        message: 'Enter the Title of your project: ',
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Describe the steps required to install your project.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions for your project in use.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines contributing to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Provide tests cases for your application.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'None'],
        name: 'license'
    },
    {
        
        type: 'input',
         message: "What is your GitHub username? (@  not required)",
        name: 'username',
        default: 'connietran-dev',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repository?",
        name: 'repo',
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter your e-mail id: ',
        name: 'email'
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

const writeFile = util.promisify(writeToFile);


// Main function
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // Pass Inquirer userResponse to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses)//, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        await writeFile('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

init();
