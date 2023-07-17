## Location Finder App
This is a small TypeScript application used to practice and learn more about TypeScript. The app allows users to search for locations and displays them on a map using the Google Maps API.

![App Image](https://github.com/ireckless03/Share-Location/blob/main/images/Screenshot%202023-07-17%20at%203.57.04%20PM.png)

![Other examples](https://github.com/ireckless03/Share-Location/blob/main/images/Screenshot%202023-07-17%20at%204.04.33%20PM.png)


# Installation
To run this app locally, please follow these steps:

1. Clone the repository.

2. Install the dependencies by running the following command:

`npm install`

3. Obtain a Google Maps API key from the Google Cloud Console.

4. Create a .env file in the project root directory and add your Google Maps API key in the following format:

`GOOGLE_API_KEY=YOUR_API_KEY_HERE`

5. Start the development server by running the following command: "npm start"

6. Open your browser and navigate to:

`http://localhost:8080` 

# Features

- User can enter an address and search for its location on the map.
- The app uses the Google Maps API to geocode the address and display it on the map.
- A marker is placed on the map to indicate the searched location.

# Libraries and Packages Used

- **axios**: A promise-based HTTP client for making API requests. In this project, axios was used to send HTTP requests to the Google Geocoding API to retrieve location coordinates based on the entered address.

- **@types/google.maps**: TypeScript type definitions for the Google Maps API. It provided type information and autocomplete support for using the Google Maps API in TypeScript. This allowed for better type safety and improved development experience when working with Google Maps functionality in the project.

- **ts-loader**: Webpack loader for compiling TypeScript files. ts-loader was used to transpile TypeScript code into JavaScript, enabling the project to be executed in the browser.

- **typescript**:  A superset of JavaScript that adds static typing to the language. TypeScript was the primary programming language used in this project. It provided static typing, type checking, and other advanced language features, making the code more robust and maintainable.

- **webpack**:  A module bundler used to bundle the JavaScript and other assets. Webpack was used to bundle all the project's dependencies and assets, such as JavaScript files, CSS stylesheets, and images. It helped optimize the project's performance and facilitated easy deployment.

- **webpack-cli**: Command-line interface for webpack. webpack-cli provided a command-line interface to interact with webpack. It allowed for running build commands, configuring webpack, and managing the project's bundling process.

- **webpack-dev-server**: Development server that provides live reloading and other features for efficient development. webpack-dev-server was used during development to serve the project locally. It enabled live reloading, meaning that any changes made in the code were automatically reflected in the browser without needing to manually refresh the page. This greatly improved the development workflow and productivity.

# Future Improvements

In the future, this app will be expanded to serve as a fishing app. The planned enhancements include:

- Logging catches, including location, gear used, time of day, and weather conditions.
- Additional features for managing and analyzing fishing data.
- Improved user interface and user experience.

Stay tuned for updates and improvements to the app!