// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const { clear } = require('console');
const { generateMarkdown } = require('./utils/generateMarkdown.js');
let launched = false;

function launch () {
    launched = true;
    console.log(colors.green("  PLEASE MAKE FULL SCREEN!"));
    console.log(colors.green("  Loading in:"));
    console.log(colors.green(""));
    let count = 6;
    const timer = setInterval(function() {
    count--;
    console.log(colors.brightRed.bgBlack.bold(`  ${count} \x1b[1A `));
    
    if (count === 0) {
        clearInterval(timer);
        clear();
    }
    }, 1000);    
    setTimeout(() => {
        console.log(colors.green(""));
        console.log(colors.green("  WELCOME TO THE:"));
        console.log(colors.green(`
        /==========================================================================================================================================/
        ||                                                                                                                                        ||
        ||  ██████╗ ███████╗ █████╗ ██████╗ ███╗   ███╗███████╗     ██████╗ ███████╗███╗   ██╗███████╗██████╗  █████╗ ████████╗ ██████╗ ██████╗   ||
        ||  ██╔══██╗██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝    ██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗  ||
        ||  ██████╔╝█████╗  ███████║██║  ██║██╔████╔██║█████╗      ██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝███████║   ██║   ██║   ██║██████╔╝  ||
        ||  ██╔══██╗██╔══╝  ██╔══██║██║  ██║██║╚██╔╝██║██╔══╝      ██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██║   ██║██╔══██╗  ||
        ||  ██║  ██║███████╗██║  ██║██████╔╝██║ ╚═╝ ██║███████╗    ╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║  ██║   ██║   ╚██████╔╝██║  ██║  ||
        ||  ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝     ╚═╝╚══════╝     ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝  ||
        ||                                                                                                                                        ||
        /==========================================================================================================================================/`));
        console.log(colors.green(""));
    }, 6800);
}

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "Please input READme title:",
        type: "input"
    },
    {
        name: "description",
        message: "Please input READme description:",
        type: "input"
    },
    {
        name: "contents",
        message: "Please input READme table of contents:",
        type: "input"
    },
    {
        name: "installation",
        message: "Please input READme installation:",
        type: "input"
    },
    {
        name: "license",
        message: "Please select READme license:",
        type: "list",
        choices: [
            "None", 
            "Academic Free License v3.0", 
            "Apache license 2.0", 
            "Artistic license 2.0", 
            "Boost Software License 1.0", 
            "BSD 2-clause Simplified license",
            "BSD 3-clause New or Revised license",
            "BSD 3-clause Clear license",
            "BSD 4-clause Original or Old license",
            "BSD Zero-Clause license",
            "Creative Commons license family",
            "Creative Commons Zero v1.0 Universal",
            "Creative Commons Attribution 4.0",
            "Creative Commons Attribution ShareAlike 4.0",
            "Do What The F*ck You Want To Public License",
            "Educational Community License v2.0",
            "Eclipse Public License 1.0",
            "Eclipse Public License 2.0",
            "European Union Public License 1.1",
            "GNU Affero General Public License v3.0",
            "GNU General Public License family",
            "GNU General Public License v2.0",
            "GNU General Public License v3.0",
            "GNU Lesser General Public License family",
            "GNU Lesser General Public License v2.1",
            "GNU Lesser General Public License v3.0",
            "ISC",
            "LaTeX Project Public License v1.3c",
            "Microsoft Public License",
            "MIT",
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "PostgreSQL License",
            "SIL Open Font License 1.1",
            "University of Illinois/NCSA Open Source License",
            "The Unlicense",
            "zLib License",
        ]
    },
    {
        name: "contributing",
        message: "Please input READme contributing:",
        type: "input"
    },
    {
        name: "tests",
        message: "Please input READme tests:",
        type: "input"
    },
    {
        name: "questionsGitHub",
        message: "Input for READme questions, please input GitHub username:",
        type: "input"
    },
    {
        name: "questionsEmail",
        message: "Input for READme questions, please input email:",
        type: "input"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    launch();
    setTimeout(() => {
        inquirer.prompt(questions)
        .then(response => console.log(response))    
    }, 7500);
}

// Function call to initialize app
init();