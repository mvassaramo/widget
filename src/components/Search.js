import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('')

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