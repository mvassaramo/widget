import React, { useState } from 'react';
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

  return(
    <div>
      <Dropdown 
        options={options}
        placeholder='Select a Language' 
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  )
}

export default Translate;