// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
/*function renderLicenseBadge(license) {
   //license= `${userResponses.license}`
   if(license == "None")
    return "";
   else 
   {
     return `![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)`
  
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var requestUrl= "https://api.github.com/licenses"
  var data ="";
  fetch(requestUrl) 
  .then(response => response.json())
  .then(data => {
    if(data[i]['spdx_id']== license)
      return data[i]['url'];
    else
      return "";
  })

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var requestUrl= "https://api.github.com/licenses";
  var data = "";
  fetch(requestUrl)
  .then(response => response.json())
  .then(data => {
    if(data[i]['spdx_id']== license)
      return data[i]['url'];
    else
      return "";
  })

}

// TODO: Create a function to generate markdown for README
*/
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
  let draftFinal = 
  `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) 
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
   
  
  ${userResponses.description}
  `

  // Add Table of Contents
  draftFinal += draftAns;
 
  draftFinal += `
  * [License](#license)`;
  

  if (userResponses.installation !== '') {
  
  draftFinal +=
  `
  
  ## Installation
  
  *Steps required to install project and get environment running:*
  
  ${userResponses.installation}`
  };
  
  if (userResponses.usage !== '') {
  
  draftFinal +=
  
  `
  
  ## Usage 
  
  *Instructions for use:*
  
  ${userResponses.usage}`
  };
  
  
  if (userResponses.contributing !== '') {

  draftFinal +=
     

  `
  
  ## Contributing
  
  *Add contributuions.*
  
  ${userResponses.contributing}`
  };
  if (userResponses.tests !== '') {
  
  draftFinal +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userResponses.tests}`
  };


  // License section is required
  draftFinal +=
  `
  
  ## License
  
  ${userResponses.license}
  `;
  if (userResponses.email !== null) {
  draftFinal +=
  `
    ## For any questions, please contact me , given information : 
    GitHub: [@${userResponses.username}](${userResponses.repo})

  Email: ${userResponses.email}
  `};
  return draftFinal;
  
}

module.exports = generateMarkdown;



//module.exports = generateMarkdown;
