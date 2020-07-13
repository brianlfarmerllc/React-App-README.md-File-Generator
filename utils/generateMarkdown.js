function generateMarkdown(data) {
  return `
# ${data.title}

[![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)](${data.repo})
  
## Description

${data.description}

## Table of Contents
  
* [Installation](#Installation)
* [Usage](#Usage)
* [Technologies](#Technologies)
* [License](#License)
* [Contributions](#Contributions)
  
## Installation and Usage

${data.install}

The following image demonstrates the application functionality:

![Demo of ${data.title}!](${data.path})

## Technologies

The following technologies were used in the developement of the application

${data.tech}

## License

This application is licensed under the ${data.license} license

## Contributors

Contributor information and commit history can be seen here!
<a href="https://github.com/${data.repo}/graphs/contributors">
<img src="https://contributors-img.web.app/image?repo=${data.username}/${data.title}" />
</a>


## Questions

If you have any questions about the application you can contact ${data.username} directly @ ${data.email}
`;
}

module.exports = generateMarkdown;
