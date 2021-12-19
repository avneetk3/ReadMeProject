/*// TODO: Include packages needed for this application
const fs = require('fs');
//import fs from "fs";
const inquirer = require('inquirer');
//import inquirer from "inquirer";
const generateMarkdown = require('./utils/generateMarkdown')  //.default;
//import generateMarkdown from "./utils/generateMarkdown.js"deafult;
//const licenseLookup = require('./utils/licenseLookup');
//import licenseLookup from "./utils/licenseLookup.js";


console.log(generateMarkdown);
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the Title of your project: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a Description of your project: ',
        name: 'description',
    },
    {
        type: 'list',
        message: 'Select a license: ',
        name: 'license',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3 ", "None"  ]
        //choices: licenseLookup,
    },
    {
        type: 'input',
        message: 'Enter Installation Instructions for your project: ',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Enter Usage Instructions for your project: ',
        name:'usage',
    },
    {
        type: 'input',
        message: 'Enter any Contribution Guidelines for your project: ',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Enter any Test Instructions for your project: ',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username: ',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your e-mail address: ',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   // fs.writeFileAsync(fileName, generateMarkdown.generateMarkdown(data), (err) =>
   // err ? console.error(err) : console.log('Success!'))
   fs.writeFileAsync(fileName, generateMarkdown.generateMarkdown(data), (err) =>
   {if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
  });
}

// TODO: Create a function to initialize app
function init() {
        // Prompt user for input - pull prompts from 'questions' array
        inquirer    
        .prompt(questions)

        // Then 'generateMarkdown' & 'writeToFile'
        .then((answers) => {
            
            // Write to file
            writeToFile('gen-README.md', answers);

        })
}

// Function call to initialize app
init();*/


//new code :
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal modules
//const api = require('./utils/api.js');
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
                return console.log("A valid project title is required.");
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
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines contributing to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests cases for your application.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    {
        
        type: 'input',
         message: "What is your GitHub username? (No @ needed)",
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
        message: "What is the name of your GitHub repo?",
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
        message: 'Enter your e-mail address: ',
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

const writeFileAsync = util.promisify(writeToFile);


// Main function
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses)//, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

init();


