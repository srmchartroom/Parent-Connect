# <img src="/public/assets/cornerBot.png" alt="Parent Connect" width="75"/> Parent-Connect

--------------------
![](https://img.shields.io/badge/Code-NodeJs-informational?style=flat&logo=nodejs&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Express-informational?style=flat&logo=expressjs&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-jQuery-informational?style=flat&logo=jquery&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Sequelize-informational?style=flat&logo=sequelize&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Passport-informational?style=flat&logo=passport&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-bCrypt-informational?style=flat&logo=bCrypt&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=html5&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Handlebars-informational?style=flat&logo=handlebars&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-CSS3-informational?style=flat&logo=css3&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Bootstrap-informational?style=flat&logo=bootstrap&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-TravisCI-informational?style=flat&logo=travis-ci&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-ESLint-informational?style=flat&logo=eslint&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Prettier-informational?style=flat&logo=prettier&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Tools-Microsoft_Visio-informational?style=flat&logo=microsoft-visio&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Design-Adobe_XD-informational?style=flat&logo=adobe-xd&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Design-Adobe_Illustrator-informational?style=flat&logo=adobe-illustrator&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Design-Adobe_Photoshop-informational?style=flat&logo=adobe-photoshop&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Tools-Nodemon-informational?style=flat&logo=nodemon&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Tools-Postman-informational?style=flat&logo=postman&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Tools-Github-informational?style=flat&logo=github&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Tools-Heroku-informational?style=flat&logo=heroku&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Data-mysql-informational?style=flat&logo=mysql&logoColor=white&color=2bbc8a)


## Description

Parent Connect is an application that supports parents of children attending school virtually due to distancing measures as a result of the 2020 Covid19 global pandemic. 

Many school systems were unprepared for the server loads and technical issues that come from shifting to 100% virtual elearning delivery by teachers and schools previously delivering from the classroom face-to-face. On the first day students started school virtually, the North Carolina statewide system for authentication and delivery crashed. Students and parents were previously instructed to contact teachers through the online platorm when technical issues arose.  This obviously created chaos and confusion for parents and students with no means to know what occurred or how to contact the schools to geet back online, nor whether the issues they experienced were limited to them or a result of the system as a whole going down.  Parents scrambled to contact others via Facebook groups, contact lists in their phones, or even driving-by neighbors who also have children in school. The system went down again 3 days later, and again the following week.  This was in addition to aall the confusion and individual technical challenges that arose from countless students attempting to learn synchronously while doing so from widely varying hardware, reliability of connection, and varying levels of comfort and acclimation on computer-accessed platforms for learning.

This application solves an issue of providing a secure environment for parents to contact each other, post and alert others to issues with the technical platforms used for virtual schooling, and provide support to each other within this challenging new learning (and parenting) environment. 

The application leaverages `node.js` and standard ES6 `JavaScript`, operates as a full CRUD application: pulls data from (READ), updates data in (UPDATE), adds new data to (CREATE), and deletes data (DELETE) from a secure mySQL database. The application is supported with `bCrypt` and `passport`-based authentication, and allows parents to login securely post, query, across a number of parameters from school, school system, grade level, and type of post such as "resources", "questions", "issues" and others.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)

## Installation

1. Download or clone this project and save it to your machine.
2. Create a `parents` database using the provided `schema.sql` file you can find in the repository's root directory.
3. Be sure to update the connection variables in the app.js file to those that are specific to you - including your host environment (most likely `localhost`), your db username (if run locally, most likely `root`), and of course your database password.
4. From Bash, Terminal, or whichever CLI you use, navigate to the directory where you've saved the application files.
5. Install the package.json with `npm install` or simply `npm i`.
6. Start the application from the command line by typing `node app.js`.

### <img src="/public/assets/cornerBot.png" alt="Parent Connect" width="30"/>  You can see a live/deployed version of this application at https://project-mcginnis.herokuapp.com/

## Usage

The below provides an overview of the Parent Connect application, the code involved and how it works, as well as a demo of the application in action.

[![OVERVIEW: THE PARENT CONNECT APP IN ACTION](https://chartroomcreative.com/gitassets/Parent-Connect-App.png)](https://chartroomcreative.com/gitassets/Parent-Connect-App.mp4)

## License

Copyright (c) 2020 Sean McGinnis, Chart Room Creative LLC.

This project is provided under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.
2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.

## Contributing

To contribute, please follow the [Contributor Covenant](https://www.contributor-covenant.org/).

## Tests

Be sure to test the application after installation and deploying it. No jest-based automated tests or otherwise have been developed for this particular project. But code formatting has been standardized with custom ESLint, Prettier, and TravisCI implementation. And successful execution can be quickly confirmed by simply running the application. To complete this, follow the installation instructions above. Additional context and instruction can be reviewed in the video provided above under [usage](#usage).

## Questions

For questions, please contact [sean@chartroomcreative.com](mailto:sean@chartroomcreative.com).

See srmchartroom(https://github.com/srmchartroom) for additional repositories and contact information.

## Credits

This project was developed with the help of [Mitchell Underwood](https://github.com/sassypigeon), [Paul Sloderbeck](https://github.com/paulsloderbeck), and [Travis Hill](https://github.com/TravisMH) as a collaborative product. If you'd also like to contribute to this project, please see the [contributing](#contributing) section above.
