# News App

This is a simple React application for fetching and displaying news articles using the [News API](https://newsapi.org/). Users can search for news articles based on keywords and navigate through paginated results.

## Features

- **Search:** Users can search for news articles by entering keywords in the search input.
- **Autocomplete:** Autocomplete suggestions are provided as the user types in the search input.
- **Pagination:** Results are paginated, allowing users to navigate through multiple pages of news articles.
- **Responsive Design:** The app is responsive and works well on both desktop and mobile devices.

## Primary Languages and Technologies Used

- **JavaScript:** The main programming language used for writing the React application logic.
- **CSS:** Used for styling the user interface of the application.
- **HTML:** Used for creating the structure of the web pages.
- **Node.js:** The runtime environment for executing JavaScript code on the server-side, required for running the React development server and managing project dependencies with npm.
- **React:** A JavaScript library for building user interfaces, used as the frontend framework for developing the news application.
- **axios:** A promise-based HTTP client used for making API requests to the News API.
- **News API:** An external API used for fetching news articles.

## Getting Started

To run this application locally, you need to have Node.js installed on your computer. If you don't have it already, you can download it [here](https://nodejs.org/).

Follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Create a separate js (config.js in my case) e.g.
```javascript
    const config = {
        apiKey: 'API KEY' 
    };
    export default config;
``` 

file in the project root and keep your News API key there. Remember to import the file in your App.js and gitignore it to avoid publically exposing your API key.
5. Start the development server by running `npm start`.
6. Open your web browser and navigate to `http://localhost:3000` to view the app.
