# Getting started

Click [the github page of this project](https://salmandaak.github.io/fcc-random-quote-machine/) to run the app.

## How To Use The App

- Press `New Quote` button to get a random new quote and it's author.
- Press the button with Twitter logo to share the quote into Twitter.
- To see whether this project is passing the freeCodeCamp test:
  - If the test suite box is hidden, click the hamburger menu on the corner top left of the page.
  - Select `Random Quote Machine` in the dropdown menu.
  - Then press Run Test button.

## About Project

This project is a simple random quote machine which was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This project is created as one of freeCodeCamp certification project, so there is a suite test included in the app.

## Features

### Main Features

1. Get a random quote with it's author when `New Quote` button is clicked.
2. The quote and it's author can be posted on Twitter via a share button.

### Extra Features

1. The color scheme also changes simultaneously when the quote is changing.
2. The color is quite soft to the eyes.
3. The random quote and the random color doesn't appear twice consecutively.
4. The Twitter intent is pre-filled with the quote, author and #quote hashtag.
5. The pre-filled Twitter intent doesn't exceed the maximum of Twitter post, so user doesn't have to edit the post.

## How To Run The App Locally (with VSCode)

### Prerequisite

Node.js installed. (I am using ver 16.17.0)

### Steps

1. Download or clone this repository to save the repository locally on your pc, then open it in VSCode
2. Open terminal, then run `npm install` to install dependencies.
3. If you get vulnerabilities warning from npm-audit, go to package.json, and made sure `react-scripts` is in `devDependencies`. Then in the terminal run `npm-audit --production`. Then the vulnerabilities warning should be fixed. (For more info about this vulnerabilities warning issue, see this [post](https://github.com/facebook/create-react-app/issues/11174#issue-935928547)).
4. To run the app, run `npm start` in the terminal. The app should be running in your browser at `http://localhost:3000/`
5. If you make some changes, then save those changes and you can see them in your browser as long as the `npm start` is running.
