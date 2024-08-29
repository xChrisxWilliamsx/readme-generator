// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const { clear } = require('console');

function launch () {
    console.log(colors.green("PLEASE MAKE FULL SCREEN!"));
    console.log(colors.green(`Loading in`));
    let count = 11;
    const timer = setInterval(function() {
    count--;
    console.log(count);
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
        /==========================================================================================================================================/
        `));
    }, 12000);
}

launch();

return;

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
