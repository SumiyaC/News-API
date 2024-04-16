import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import config from './config';
import './App.css';

const App = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false); 
  const articlesPerPage = 8;
  const searchContainerRef = useRef(null); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowAutocomplete(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        let url;
        if (searchQuery === '') {
          url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.apiKey}&pageSize=${articlesPerPage}&page=${currentPage}`;
        } else {
          url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${config.apiKey}&pageSize=${articlesPerPage}&page=${currentPage}`;
        }
        const response = await axios.get(url);
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [currentPage, searchQuery]);

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === 'prev' && prevPage > 1) {
        return prevPage - 1;
      } else if (direction === 'next' && news.length === articlesPerPage) {
        return prevPage + 1;
      } else {
        return prevPage;
      }
    });
  };

  const handleInputChange = async (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    if (value.trim() !== '') {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: value,
            apiKey: config.apiKey,
            pageSize: 5
          }
        });
        const results = response.data.articles.map(article => article.title);
        setAutocompleteResults(results);
        setShowAutocomplete(true);
      } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
      }
    } else {
      setAutocompleteResults([]);
      setShowAutocomplete(false); 
    }
  };

  const handleAutocompleteClick = (value) => {
    setSearchQuery(value);
    setAutocompleteResults([]);
    setShowAutocomplete(false); 
  };

  return (
    <div className="container">
      <h1 className="title">News App</h1>
      <div className="search-container" ref={searchContainerRef}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="search-input"
          placeholder="Search news"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
        {showAutocomplete && autocompleteResults.length > 0 && (
          <ul className="autocomplete-results">
            {autocompleteResults.map((result, index) => (
              <li key={index} onClick={() => handleAutocompleteClick(result)}>{result}</li>
            ))}
          </ul>
        )}
      </div>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <ul className="news-list">
            {news.map((article, index) => (
              <li key={index} className="news-item">
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
                  <div className="news-box">
                    <h3 className="news-title">{article.title}</h3>
                    <p className="news-description">{article.description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div className="pagination">
            <button
              onClick={() => handlePageChange('prev')}
              className={`page-button ${currentPage === 1 ? 'disabled' : ''}`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
              onClick={() => handlePageChange('next')}
              className={`page-button ${news.length < articlesPerPage ? 'disabled' : ''}`}
              disabled={news.length < articlesPerPage}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;


