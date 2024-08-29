// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
    ${renderLicenseBadge(response.license)}

  ## Description:
  <p> ${response.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation:
  <p> ${response.installation}

  ## Usage:
  <p> ${response.usage}

  ## License:
    ${renderLicenseSection}

  ## Contributing:
  <p> ${response.contributing}

  ## Test: 
  <p> ${response.test}

  ## Questions:
  <p> Feel free to reach out with any questions using the links below
  <p> ${response.questionsGitHub}
  <p> ${response.questionsEmail}`;
}

module.exports = generateMarkdown;
