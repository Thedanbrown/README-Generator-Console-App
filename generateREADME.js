function generateBadge(license) {
    if (license === apache) {
        return [![License]("https://img.shields.io/badge/License-Apache_2.0-blue.svg")]("https://opensource.org/licenses/Apache-2.0");
    } else if (license === GPL) {
        return [![License]("https://img.shields.io/badge/License-GPLv3-blue.svg")]("https://www.gnu.org/licenses/gpl-3.0");
    } else if (license === unlicense) {
        return [![License]("https://img.shields.io/badge/license-Unlicense-blue.svg")]("http://unlicense.org/");
    } else {
        return " ";
    }
}
function generateREADME(data) {
    return `
## ${data.title}

${generateBadge(data.license)}

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