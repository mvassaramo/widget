import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('programming')
  const [debouncedQuery, setDebouncedQuery] = useState(query)

  const [results, setResults] = useState([])

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query)
    }, 1000)

    return () => {
      clearTimeout(timerId)
    }
  }, [query])

  useEffect(() => {
    const searchWiki = async () => {
      const { data } = await(axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedQuery
        }
      }))
  
      setResults(data.query.search)
    }

    searchWiki()

  }, [debouncedQuery])

  const renderedResults = results.map(result => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right loaded content">
          <a className="ui button" target="_blank" rel="noreferrer" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
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