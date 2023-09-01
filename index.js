// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "What was your motivation?",
    name: "projectMotivation",
  },
  {
    type: "input",
    message: "Why did you build this project?",
    name: "projectPurpose",
  },
  {
    type: "input",
    message: "What problem does it solve?",
    name: "problemSolved",
  },
  {
    type: "input",
    message: "What did you learn?",
    name: "lessonsLearned",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installationInstructions",
  },
  {
    type: "input",
    message: "What are the usage instructions?",
    name: "usageInstructions",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contributionGuidelines",
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "testInstructions",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readmeContent = `
    # ${data.projectTitle}
    
    ## Description
    ${data.projectMotivation}
    ${data.projectPurpose}
    ${data.problemSolved}
    ${data.lessonsLearned}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    
    ## Installation
    ${data.installationInstructions}
    
    ## Usage
    ${data.usageInstructions}
    //Screenshot or Video here

    ## License
    This project is licensed under the ${data.license} License.
    
    ## Contributing
    ${data.contributionGuidelines}
    
    ## Test
    ${data.testInstructions}
    
    ## Questions
    GitHub: https://github.com/${data.githubUsername}
    Email: ${data.email}
    `;

  fs.writeFile(fileName, readmeContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md created successfully.");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log(questions.length);

  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", data);
  });
}

// Function call to initialize app
init();
