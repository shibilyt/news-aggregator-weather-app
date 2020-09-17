# News and Weather APP

The app was bootstrapped with Create React App.

## material-ui

I've used material-ui to start developing the components quickly. I could've worked with another component library or CSS framework, but I'm already familiar with material-ui, so going with material makes sense.

## routing

Since this is a small app and doesn't require pages, I've deciced to not add routing. Instead, I've added the weather into a pop up box in the app.

## react-query

In the past whenever I worked on a project with a lot of API calls and async state management, things got pretty ugly quickly. Eversince I've seen react-query, it's one of the first dependency I add to the project if it has any API calls. It's very lightweight as well.

## APIs

I'm using gnews.io for fetching news and openweathermap.org/api for weather data.

## other libraries

axios - used to make http request.
date-fns - used the formatDistanceToNow method in the card to display relative time of the news published time.

## theming

theming and style system was set up in material theming system. Only a basic theme was added with custom colors, fonts and fontSize. Building up a style system like this would allow to handle style changes in future simpler and reliable.



--- Create React App info
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
