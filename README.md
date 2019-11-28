# Final proyect

This repository contains the source code of the final proyect
of the Object Technology course of the System Engineering career
of the Universidad Nacional de San Agustin.

## Choosen option

I have choose to implement the three games mentioned in the 
classroom, Tic Tac Toe, Battleship, and Drunk Bottle (?), following
the requirements: Visual implementation, Object Oriented Programming,
SOLID principles, and at least 1 design pattern.

## Choosen environment and programming language.

Since this proyect needs a visual component, I have choosen to build it
in a web page. However, I won't use the typical web tools. For instance,
there will only be 1 html file with almost no html code, no CSS files.
All the drawing process will be done programatically using JavaScript.

The language itself won't be JavaScript, by the way. JavaScript features
at most classes, thus is not useful for building an OO program. Instead,
I will use TypeScript (https://www.typescriptlang.org/) which brings
OO features to JavaScript.

## Development setup

TypeScript requires an aditional step to compile source code to JS,
and it has to be done manually, file by file. Instead of doing that
I will setup a development evironment, consisting of:

- NPM modules (implies Nodejs)
- TypeScript
- Webpack

## Setup

- Install Nodejs
- Install Yarn (optional)
- Run `yarn install` if you installed Yarn, otherwise `npm install`
- To test the web page in a development server, run `yarn start` or `npm start`
- To build the TypeScript code to JS, run `yarn build` or `npm run build`



