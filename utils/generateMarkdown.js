//import fetch from "node-fetch";
const fetch = require('node-fetch');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   //license= `${answer.license}` not required
   if(license)
   {

    return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')})
    `;
   }
   
   else 
    return "";

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var url= "https://api.github.com/licenses";
 // let data ="";
 var i;
  fetch(url) 
  .then(response => response.json())
  .then(data => {
    if(data[data.i]['spdx_id']== license)
      return data[data.i]['url'];
    else
      return "";
  })

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
/*function renderLicenseSection(license) {
} */

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses) {

  // Generate Contents  based on userResponses
  let draftAns = `## Table of Contents`;

  if (userResponses.installation !== '') { draftAns += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { draftAns += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { draftAns += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { draftAns += `
  * [Tests](#tests)` };


  // Generate markdown for README
  let finalResponse = 
  `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) 
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
   
  
  ${userResponses.description}
  `

  // Add Table of Contents
  finalResponse += draftAns;
 
  finalResponse += `
  * [License](#license) ${renderLicenseBadge(userResponses.license)} 
  * [License Link] (#link) ${renderLicenseLink(userResponses.license)}`;
  

  if (userResponses.installation !== '') {
  
  finalResponse +=
  `
  
  ## Installation
  
  *Steps required to install project and get environment running:*
  
  ${userResponses.installation}`
  };
  
  if (userResponses.usage !== '') {
  
  finalResponse +=
  
  `
  
  ## Usage 
  
  *Instructions for use:*
  
  ${userResponses.usage}`
  };
  
  
  if (userResponses.contributing !== '') {

  finalResponse +=
     

  `
  
  ## Contributing
  
  *Add contributuions.*
  
  ${userResponses.contributing}`
  };
  if (userResponses.tests !== '') {
  
  finalResponse +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userResponses.tests}`
  };


  // License section is required
  finalResponse +=
  `
  
  ## License
  
  ${userResponses.license}
  `;
  if (userResponses.email !== null) {
  finalResponse +=
  `
    ## For any questions, please contact me , given information : 
    GitHub: [@${userResponses.username}](${userResponses.repo})

  Email: ${userResponses.email}
  `};
  return finalResponse;
  
}

module.exports = generateMarkdown;


