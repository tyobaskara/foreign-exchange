# foreign-exchange
MERN DOCKERIZE REACT WEBPACK SCSS

# MERN Boilerplate - MongoDB, Express, React, NodeJS

## Dependencies 

- NodeJS (9+ preferred)
- Docker (CE is fine, 17+ preferred)

## Features

- [X] Webpack 4
- [X] React 
- [X] Express
- [X] Sass
- [X] ES6 - Stage-0+
- [ ] Linting
- [ ] UI/Unit Tests

## Installation

1) `npm install`

2) Running the application
   - Development Mode (Client only): `npm run dev` then open `http://localhost:8080` in a browser
   - Production Bundle (Client only): `npm run build` then import the client code somewhere
   - Standalone (Client+Server): `npm start` then open `http://localhost:8080` in a browser
   - Dockerized /w MongoDB: `npm run start:docker`

## Assumptions

- You have all dependencies installed and are using NPM or Yarn
- This boilerplate was developed using linux mint (Ubuntu 14 - Xenial), it should be cross platform so please report any issues using the github issue tracker.
- If you run the 'npm run updateDeps' script, you will need to have npm-check-updates globally installed: `npm install -g npm-check-updates`   
- Your user account is part of the docker group for sudo access

## Transpiling/Bundling/Polyfills

We currently use babel configured with preset-env, preset-react and preset-stage-0. Eventually the polyfill.io cdn will be primarily used.

## Resources/Sources

### Lifecycle scripts

- npm start
- npm run dev
- npm run upgradeDeps
- npm run build
- npm test