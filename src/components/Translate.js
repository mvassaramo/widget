import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';


const options = [
  {
    label: 'Spanish',
    value: 'es'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
]

const Translate = () => {
  const [language, setLanguage] = useState(options[0])
  const [text, setText] = useState('')

  return(
    <div>
      <div className="ui form">
        <div className="field">
        <label>Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
      </div>
      <Dropdown 
        options={options}
        label="Select a Language" 
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr/>
        <h3 className="ui header">Output</h3>
        <Convert language={language} text={text}/>
    </div>
  )
}

export default Translate;