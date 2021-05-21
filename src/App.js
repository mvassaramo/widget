import React from 'react';
import Accordion from './components/Accordion';
import DropDown from './components/Dropdown';
import Search from './components/Search';

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


export default () => {
  return(
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      <DropDown options={options} />
    </div>
  )
}