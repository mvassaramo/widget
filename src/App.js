import React from 'react';
import Accordion from './components/Accordion';

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


export default () => {
  return(
    <div>
      <Accordion items={items}/>
    </div>
  )
}