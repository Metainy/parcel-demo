A quick step-by-step guide to start a simple front-end project with Parcel bundler.

## Table of Contents
* [Requirements](#requirements)
* [Installing Node](#installing-node)
* [Creating the Project](#creating-the-project)
* [Project Structure](#project-structure)
* [Install Sass](#install-sass)
* [Install Parcel](#install-parcel)
* [Install Prettier](#install-prettier)
* [Run Parcel](#run-parcel)

## Requirements
* Code Editor. ([VS Code](https://code.visualstudio.com/) is a good choice)
* NPM. (You can download the LTS version from [here](https://nodejs.org/en/))

## Installing Node
Before anything, you might want to check if you already have node installed and if so, which version we're currently running.

Run this command in your terminal
```
node -v  
```
You should see a Node version number if Node is already installed on your system, if not it means your have to   
install Node.

## Creating the Project
Now we want to create a new empty project and use the terminal to navigate to the project root directory, or preferably using the editor's built-in terminal.

Next we have to run this command in the terminal to initialize our project
```  
npm init —y  
```
This command create a `package.json` file with some metadata. The `-y` flag skip this process and set all the metadata attributes with a default value.

## Project Structure
Every front-end project serves a different purpose, and the project structure is highly dependable on the project purpose.   
So how you organize your project or following a certain pattern or convention is up to you but we're going with   
a simple structure for now.
```
├── src  
│   ├── assets  
│   │   ├── fonts  
│   │   ├── images  
│   │   └── styles  
│   │       └── master.scss  
│   ├── js  
│   │   └── index.js  
│   ├── views  
│   └── index.html  
└── package.json  
```

## Install Sass
Sass is a CSS extension it enables us to use variables, mixins, function and more, but we have to eventually convert it to CSS, so the browser can understand it.

Let's start by installing Sass using this command
```  
npm install sass --save-dev
```  
Sass can compile our input SCSS file to a single CSS output file. So we can tell Sass to compile our   
`src/assets/style/master.scss` file to `dist/main.css` using this command
```
sass src/assets/styles/master.scss dist/main.css
```  
Sass can also keep a watch on our SCSS files and auto compile on any changes, which what you should be using in development.
```
sass --watch src/assets/styles/master.scss dist/main.css  
```
You can check the documentation [here](https://sass-lang.com/documentation) for more options.

We won't go any further in Sass configuration since we're using Parcel, and it will handle the compiling and   
bundling part for us, so installing Sass is enough for now.

## Install Parcel
Parcel is a bundler. It takes all your files and turn them into a package that can be run in the browser.    
It also has a development server built in, which will automatically rebuild your app as you change files and supports hot module replacement for fast development.

We can install Parcel globally, and it will be available for any future projects, but we will go with the project based approach here.

Open the terminal and make sure you're in the project root directory and run this command
```  
npm install parcel-bundler --save-dev  
```  
Now after configuring Parcel it will keep track of any changes and provide us with a live preview.

## Install Prettier
Prettier is a code formatter. It's intended to sniff out when we're not following the mandated coding conventions.    
Use this command to install Prettier
```  
npm install prettier --save-dev  
```  
Then we have to create `.prettierrc.json` file for Prettier rules.  
We can also create a `.prettierignore` file to let the Prettier CLI and editors know which files to not format.

Now we can run the following command to start formatting all files under `src/` directory.
```  
npx prettier --write src  
```  
We can add this command as a task script that runs whenever we serve our project, or we can run it on any change and that's what we're going with.  
To do that we need to install a plugin that will enable Parcel to automatically start using the Prettier on any change.
```  
npm install parcel-plugin-prettier --save-dev
```  
We don't have to run any Prettier commands now. Parcel will take care of that for us.  
However, we should start configuring `.prettierrc.json` file with our preferred format options.

You can explore all the available options in [here](https://prettier.io/docs/en/index.html)

## Run Parcel
We are ready now to start our development server. All we have to do is point it to our entry file.
```  
npx parcel index.html
```  
We're not using Parcel globally, so we have to run Parcel command through npx or preferably we can create a task script in `package.json`.
```json
{
  "scripts": {
    "serve": "parcel src/index.html", 
    "build": "parcel build src/index.html"
  }
}
```