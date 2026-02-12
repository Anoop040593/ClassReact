import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Component
// import MyComponent from './Components/MyComponent'
import DisplayData from './Components/DisplayData';
import ConditionalRendering from './Components/ConditionalRendering';
import Button from './Components/Button';

function App() {
  // const fruits = ['Apple', 'Banana', 'Kiwi', 'Orange', 'Mango'];
  // const person = {
  //   name: 'Anoop', 
  //   age: 32
  // }
  return (
    <>
      {/* <DisplayData fruits={fruits} person={person} /> */}

      <ConditionalRendering isLoggedIn={true} userName="Anoop" />
      <Button />
    </>
  )
}

export default App
