# shorten_url

This project is basic URL shortner application built in node JS and it is using DB as mongoDB.

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|CORS           | Cors accepted values            | "*"      |
|PORT           | API server port                 | 3000     |
|DB_CONNECTION  | MongoDB Connection              |mongodb://localhost:27017/shorten_url |

## Getting Started
To get you started you can simply clone the repository:

```
git clone https://github.com/anurag-nair/shorten_url.git
```
and install the dependencies
```
npm install
```

### Prerequisites
You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

A number of node.js tools is necessary to initialize and test the project. You must have node.js and its package manager (npm) installed. You can get them from  [http://nodejs.org/](http://nodejs.org/). The tools/modules used in this project are listed in package.json and include express, mongodb and mongoose.

#### MongoDB
The project uses MongoDB as a database. If you are on Mac and using Homebrew package manager the installation is as simple as `brew install mongodb`.

### Start the MongoDB server
First we need to create the `db` directory where the database files will live in. In your terminal navigate to the `root` of your system by doing `cd ..` until you reach the top directory. You can create the directory by running `sudo mkdir -p /data/db`. Now open a different tab in your terminal and run `mongod` to start the Mongo server.

### Run the Application

The project is preconfigured with a simple development web server. The simplest way to start this server is:
```
npm start
```
Navigate to the public folder
```
cd public
```
Run index.html in browser

### Project Structure

The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **controllers**                 | contains the logic to shorten URLs  |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **models**                  | Contains schema for collection          |
| **public**        | contains static assets  
| **routes**           | Contain all express routes, separated by area of application |
| package.json             | Contains npm dependencies as well as run scripts |