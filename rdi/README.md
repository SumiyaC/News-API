# News App

This is a simple React application for fetching and displaying news articles using the [News API](https://newsapi.org/). Users can search for news articles based on keywords and navigate through paginated results.

## Features

- **Search:** Users can search for news articles by entering keywords in the search input.
- **Autocomplete:** Autocomplete suggestions are provided as the user types in the search input.
- **Pagination:** Results are paginated, allowing users to navigate through multiple pages of news articles.
- **Responsive Design:** The app is responsive and works well on both desktop and mobile devices.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **axios:** A promise-based HTTP client for making API requests.
- **CSS:** Styling is done using CSS to create a visually appealing user interface.
- **News API:** An API that provides access to news articles from various sources.

## Getting Started

To run this application locally, you need to have Node.js installed on your computer. If you don't have it already, you can download it [here](https://nodejs.org/).

Follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Create a separate js (config.js in my case e.g.
    const config = {
        apiKey: 'YOUR API KEY' 
    };
    export default config;) 
file in the project root and keep your News API key there. Remember to import the file in your App.js and gitignore it to avoid publically exposing your API key.
5. Start the development server by running `npm start`.
6. Open your web browser and navigate to `http://localhost:3000` to view the app.
