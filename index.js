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
    message: "Why did you build this project?",
    name: "projectPurpose",
  },
  {
    type: "input",
    message: "How is the app installed?",
    name: "installationInstructions",
  },
  {
    type: "input",
    message: "How is the app used?",
    name: "usageInstructions",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contributionGuidelines",
  },
  {
    type: "input",
    message: "How can the user test the app?",
    name: "testInstructions",
  },
  {
    type: "list",
    message: "Which liscence will you choose?",
    name: "projectLiscence",
    choices: [
     "MIT License",
     "GNU GPLv3 License"
    ],
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
  ${data.projectPurpose}
   

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage) 
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)

    
  ## Installation
  ${data.installationInstructions}
    
  ## Usage
  ${data.usageInstructions}
  //Screenshot or Video here

  ## License
  This project is licensed under the ${data.projectLiscence}.
    
  ## Contributing
  ${data.contributionGuidelines}
    
  ## Test
  ${data.testInstructions}
    
  ## Questions
  Do you want to know more? You can reach me at:
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
