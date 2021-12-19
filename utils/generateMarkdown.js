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
/*function generateMarkdown(data) { //adding my code after return `# ${data.title}
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage Information](#usage-information)
  * [License Information](#license-information)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [Questions](#questions)
  ## Installation
  To install the necessary dependencies for this project, run the following command:
  \`\`\`  ${data.install}  \`\`\`
  ## Usage Information
  ${data.usage}
  ## License Information
  This project is licensed under ${data.license}.
  ## Contribution Guidelines
  ${data.contribution}
  ## Test Instructions
  \`\`\` ${data.test} \`\`\`
  ## Questions
  Please contact me via GitHub or e-mail with any questions, comments, or concerns about this project. Thanks!
  GitHub: [${data.username}](https://github.com/${data.username})
  E-mail: [${data.email}](mailto:${data.email})

`;
}*/


function generateMarkdown(userResponses) {

  // Generate Table of Contents conditionally based on userResponses
  let draftToC = `## Table of Contents`;

  if (userResponses.installation !== '') { draftToC += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { draftToC += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { draftToC += `
  * [Tests](#tests)` };


  // Generate markdown for the top required portions of the README
  let draftMarkdown = 
  `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) 
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
   
  
  ${userResponses.description}
  `

  // Add Table of Contents to markdown
  draftMarkdown += draftToC;
 
  // Add License section since License is required to Table of Contents
  draftMarkdown += `
  * [License](#license)`;
  

  // Optional Installation section
  if (userResponses.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${userResponses.installation}`
  };
  

  // Optional Usage section
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`
  };
  
  
  // Optional Contributing section
  if (userResponses.contributing !== '') {

  draftMarkdown +=
    
  `
  
  ## Contributing
  
  *Add contributuions.*
  
  ${userResponses.contributing}`
  };
  

  // Optional Tests section
  if (userResponses.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userResponses.tests}`
  };


  // License section is required
  draftMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;

  // If GitHub email is not null, add to Developer section
  if (userResponses.email !== null) {
  
  //let draftDev  = `##`;
  //draftDev+=
  draftMarkdown +=
  `
    ## For any questions, please contact me , given information : 
    GitHub: [@${userResponses.username}](${userResponses.repo})

  Email: ${userResponses.email}
  `};

  // Add developer section to markdown
  //draftMarkdown += draftDev;

  // Return markdown
  return draftMarkdown;
  
}

module.exports = generateMarkdown;



//module.exports = generateMarkdown;
