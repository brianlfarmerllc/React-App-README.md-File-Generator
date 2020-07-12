function generateMarkdown(data) {
  return `
  # ${data.title}

  [![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)](${data.repo})
  
  ## Description

  ${data.description}

  ## Table of Contents
  
  * [Installation](#Installation)
  * [Test](#Test)
  * [Usage](#Usage)
  * [Technologies](#Technologies)
  * [License](#License)
  * [Contributions](#Contributions)
  
  ## Installation

  ${data.install}

  ## Test

  ${data.test}

  ## Usage

  The following image demonstrates the application functionality:

  ![Add Description !!!!!!](${data.usage})

  ## Technologies

  The following technologies were used in the developement of the application

  ${data.tech}

  ## License

  This application is licensed under the ${data.license} license

  ## Contributors

  Contributor information and commit history can be seen here!
  <a href="https://github.com/${data.repo}/graphs/contributors">
    <img src="https://contributors-img.web.app/image?repo=${data.name}/${data.title}" />
  </a>

  Made with [contributors-img](https://contributors-img.web.app).

  ## Questions

  If you have any questions about the application you can contact ${data.name} directly @ ${data.email}
  `;
}

module.exports = generateMarkdown;
