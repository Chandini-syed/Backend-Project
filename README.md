# # Backend-Capstone-Project
# MongoDb Nodejs REST API

![Author](https://img.shields.io/badge/Author-Chandini%20Syed-blue).. ![GitHub repo size](https://img.shields.io/github/repo-size/Chandini-syed/Backend-Project)..   ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white).. ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white).. ![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white).. ![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
 

 REST API Development with Node.js, Express, and MongoDB

## Getting started

This project will run on **NodeJs** using **MongoDB** as database. I had tried to maintain the code structure easy as any beginner can also adopt the flow and start building an API. Project is open for suggestions, Bug reports and pull requests.

## Advertise for Job/Work Contract

I am open for a good job or work contract. You can contact me directly on my email ([habib.acz88@gmail.com](mailto:"habibacz88@gmail.com")).



## Features


-  **CRUD** operations.
- Validations added.
- Included API collection for Postman.
- Light-weight project.
- Test cases with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).
- Linting with [Eslint](https://eslint.org/).

## Software Requirements

- Node.js **8+**
- MongoDB **3.6+** (Recommended **4+**)

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/Chandini-syed/Backend-Project.git
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```
cd Backend-Project
npm install
npm i mongoose
```



## Project structure

```sh
.
├── app.js
├── package.json
├── bin
│   └── www

├── models
│   ├── subscribers.js
│   
-
│ 
├── src
│   ├──app.js 
│   ├──createDatabase.js 
│   └──data.js 
    └──index.js 


```

## How to run

```node src/createDatabase.js file to create database

```node src/index.js file to connect and start server
server will run  on http://localhost:3000
Run node src/createDatabase.js to create Database on local your local computer(Only works if you have MongoDB installed in local machine)
GET [http://localhost:3000/subscribers](http://localhost:3000/subscribers) Response with an array of subscribers(an Object)
GET [http://localhost:3000/subscribers/names](http://localhost:3000/subscribers/names) Response with an array of subscribers(an Object with only two fields name and subscribedChannel)
GET [http://localhost:3000/subscribers/:id](http://localhost:3000/subscribers/:id)

## Error Handling
Response with a subscriber*(an object)* with given id
Response with status code 400 and Error message({message: error.message}) if id does not match
```

You will know server is running by checking the output of the command `node src/index.js`

```cmd
Connected to database
App is running ...

Press CTRL + C to stop the process.
```




## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements. Pull requests are always welcome.

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.
## Follow link for more information

- [MongoDB Documentation](https://docs.mongodb.com/manual/)
- https://mongoosejs.com/docs/queries.html
- https://www.mongodb.com/docs/atlas/api/data-api/
- https://www.mongodb.com/products/compass
