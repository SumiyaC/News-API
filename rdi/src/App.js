// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from './config';
// import './App.css'; 

// const App = () => {
//   const [news, setNews] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNews = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('https://newsapi.org/v2/top-headlines', {
//           params: {
//             country: 'us',
//             apiKey: config.apiKey // Use API key from config.js
//           }
//         });
//         setNews(response.data.articles);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('https://newsapi.org/v2/everything', {
//         params: {
//           q: searchQuery,
//           apiKey: config.apiKey // Use API key from config.js
//         }
//       });
//       setNews(response.data.articles);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error searching news:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>News App</h1>
//       <div>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search news"
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {news.map((article, index) => (
//             <li key={index}>
//               <a href={article.url} target="_blank" rel="noopener noreferrer">
//                 {article.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default App;
//--------------------color--
// App.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from './config';
// import './App.css';

// const App = () => {
//   const [news, setNews] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNews = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('https://newsapi.org/v2/top-headlines', {
//           params: {
//             country: 'us',
//             apiKey: config.apiKey
//           }
//         });
//         setNews(response.data.articles);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('https://newsapi.org/v2/everything', {
//         params: {
//           q: searchQuery,
//           apiKey: config.apiKey
//         }
//       });
//       setNews(response.data.articles);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error searching news:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="title">News App</h1>
//       <div className="search-container">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//           placeholder="Search news"
//         />
//         <button onClick={handleSearch} className="search-button">Search</button>
//       </div>
//       {loading ? (
//         <p className="loading">Loading...</p>
//       ) : (
//         <ul className="news-list">
//           {news.map((article, index) => (
//             <li key={index} className="news-item">
//               <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
//                 <h3 className="news-title">{article.title}</h3>
//                 <p className="news-description">{article.description}</p>
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default App;

//-----------

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config';
import './App.css';

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
            apiKey: config.apiKey
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
          apiKey: config.apiKey
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
    <div className="container">
      <h1 className="title">News App</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          placeholder="Search news"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
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
      )}
    </div>
  );
};

export default App;
