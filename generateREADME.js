
function generateREADME(data) {
    return `
## ${data.title}

[![License: ${data.license}]("https://img.shields.io/badge/license-" + ${data.license} + "-blue.svg")](https://opensource.org/licenses/${data.license})

## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## [Description](#table-of-contents)
    ${data.description}
## [Installation](#table-of-contents)
    ${data.installation}
## [Usage](#table-of-contents)
    ${data.usage}
## [License](#table-of-contents)
    Available license for this project: ${data.license}
## [Contributing](#table-of-contents)
    ${data.contributors}
## [Tests](#table-of-contents)    
    ${data.test}
## [Questions](#table-of-contents)

You can contact me using the following links:

[GitHub](https://github.com/${data.githubUsername})

[Email: ${data.email}](mailto:${data.email})
`;
}
module.exports = generateREADME;