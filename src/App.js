import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
  {
    title: 'what is React?',
    content: 'React is a frontend JS framework'
  },
  {
    title: 'What is the App function?',
    content: 'The App function is a React Component. It is a react component because it is a plain JS function which returns some JSX.'
  },
  {
    title: 'What is JSX?',
    content: 'JSX are a set of instructions to tell React what content we want to show on the screen'
  }
]

const options = [
  {
    label: 'The Colour Red',
    value: 'red'
  },
  {
    label: 'The Colour Green',
    value: 'green'
  },
  {
    label: 'The Colour Blue',
    value: 'blue'
  }
]

const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />
  }
}

const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />
  }
}

const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown />
  }
}

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />
  }
}

export default () => {
  const [selected, setSelected] = useState(options[0])
  // const [showDropdown, setShowDropdown] = useState(true)

  return(
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  )
}


/* <Accordion items={items}/> */
/* <Search /> */
/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
{
  showDropdown ?
    <DropDown 
      options={options}
      label="Select a Colour"
      selected={selected}
      onSelectedChange={setSelected}
    /> : null
} */

/* <Translate /> */