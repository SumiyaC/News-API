import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config'; // Import config.js file

const App = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apiKey: config.apiKey // Use API key from config.js
          }
        });
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: searchQuery,
          apiKey: config.apiKey // Use API key from config.js
        }
      });
      setNews(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error searching news:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>News App</h1>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search news"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
