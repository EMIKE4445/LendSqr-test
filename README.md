# Lendsqr Front-end Engineering Assessment Documentation

This is a documentation of the Lendsqr Front-end Engineering Assessment Michael Emmanuel.

## Table of Contents

- [Introduction](#introduction)
- [Project Setup](#project-setup)
- [Project Structure](#project-structure)
- [Project Features](#project-features)
- [Project Dependencies](#project-dependencies)
- [Project Mode of Operation](#project-mode-operation)
- [Differences between implementation and design](#differences-between-implmentaton-and-design)


## Introduction
This is a documentation of the Lendsqr Front-end Engineering Assessment by Michael Emmanuel. The assessment was to build a dashboard page displaying all usrers with sorting and filtering functionality, and a user details page.

This is a React project that was bootstrapped with create-react-app. It is a web application that contains a login page, a user dashboard page that displays a list of users and a user details page to view a specific user details. It also has a filter feature that allows users to filter for a specific user.

## Project Setup

To setup this project, you need to have Node.js installed on your computer. You can download Node.js from [here](https://nodejs.org/en/download/).

After installing Node.js, you can clone this project by running the following command in your terminal: `git clone https://github.com/EMIKE4445/LendSqr-test.git`

After cloning the project, you can install the project dependencies by running the following command in your terminal: `npm install`

After installing the project, you can run and start the project by running the following command in your terminal: `npm run start`

## Project Structure

The file strcture in the src directory contains:

- `components` - This folder contains the components of the project.
- `context` - This folder contains the react context API file project.
- `pages` - This folder contains the pages of the project.
- `assets\sass\mixins` - This folder contains the scss mixins used to for responsove design

Certain common css style rules are defined in index.scss. Note that these vaiables change at different viewports.

Every component that requires custom icons have a separate icon export file in parent folder


## Project Features and Technologies

The project features are as follows:

- The project is fully responsive
- No route is protected
- The project uses [Dexie.js](https://dexie.org/) a indexDb wrapper to store the user details data locally


## Project Dependencies

The project dependencies are as follows:

- [Loadash](https://lodash.com/)
- [Dexie.js](https://dexie.org/)
- [Material-UI](https://mui.com/)
- [filter-object-array](https://www.npmjs.com/package/filter-object-array)
- [React](https://www.npmjs.com/package/react)
- [React DOM](https://www.npmjs.com/package/react-dom)


## Project Mode of Operation

The project mode of operation is as follows:

- The project by default opens up on 404 component page
- Login page can be visited at /login
- To visit users page, navigate to /users
- The user can choose to filter the Users Table by clicking the filter button and filling the form.
- The user can also choose to sort the users table by clicking the piramid icon in the table header row
- To view the User details, the user has to click view details link that appear on hovering the 'Kebab' menu icon


## Differences between implementation and design

Some functionality and components were not added to the user interface because of API limitations, for example:

- There is not functionality in the User interface to activate or blacklst user
- user's account teir were not added to the user details page
- a simple custom 404 page is returned insted of and empty page
