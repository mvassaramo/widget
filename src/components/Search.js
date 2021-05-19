import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('programming')
  const [results, setResults] = useState([])

  useEffect(() => {
    const searchWiki = async () => {
      const { data } = await(axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: query
        }
      }))

      setResults(data.query.search)
    }

    if (query & !results.length) {
      searchWiki()
    } else {
      const timeoutID = setTimeout(() => {
        if (query) {
          searchWiki()
        }
      }, 1000)
  
      return () => {
        clearInterval(timeoutID)
      }
    }

  }, [query])

  const renderedResults = results.map(result => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right loaded content">
          <a className="ui button" target="_blank" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
        </div>
      </div>)
  })

  return(
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="input" />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  )
}

export default Search;

// dangerouslySetInnerHTML can result in XSS attacks (cross-site scripting)