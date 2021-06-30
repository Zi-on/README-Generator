// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your projects name?",
        name: "title",
      },
      {
        type: "input",
        message: "Give a description of your project.",
        name: "description",
      },
      {
        type: "input",
        message: "How can someone install this project?",
        name: "installation",
      },
      {
        type: "input",
        message: "How does the user use this project?",
        name: "usage",
      },
      {
        type: "input",
        message: "Who contributed to this project?",
        name: "contribution",
      },
      {
        type: "input",
        message: "What tests were ran?",
        name: "test",
      },
      {
        type: "list",
        message: "What license would you like to use?",
        name: "license",
        choices: ['MIT', 'Apache', 'Boost', 'Mozilla']
      },
      {
        type: "input",
        message: "What is your github username",
        name: "github",
      },
      {
        type: "input",
        message: "What is your email address",
        name: "email",
      },

]
 
// TODO: Create a function to write README file
const writeToFile = (answers) => 
`# ${answers.title}
    
## Description 
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Contact Me](#contact-me)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Tests
${answers.test}

## License
${answers.license}

## Contact Me
GitHub: https://github.com/${answers.github}

Email: ${answers.email}`;

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = writeToFile(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md'))

    })
    
}

// Function call to initialize app
init();
