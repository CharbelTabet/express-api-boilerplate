# Rest api boilerplate

- Boilerplate for restful backend api built with express.js
- Ready to connect to mongo.db database
- Can handle basic CRUD actions

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

 - mongo.db clust, offered for free by mongod.db [here](https://www.mongodb.com/cloud/atlas).

### Installing

Install dependencies
```
$ npm install
```

## Deploy to heroky

### Download heroku
- macOS
```
$ brew tap heroku/brew && brew install heroku
```

- Ubuntu 16+ 
```
$ sudo snap install --classic heroku
```

- Windows, Get heroku for free [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

### Deployment
```
$ git init
$ heroky create
$ git add .
$ git commit -m "Deploying to heroku"
$ git push heroku master
```

## Contributing

Pull requests are welcomed