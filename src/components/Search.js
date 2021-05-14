import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('')
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
      if (query) {
        searchWiki()
      }
  }, [query])

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
    </div>
  )
}

export default Search;