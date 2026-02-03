import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Device name='Laptop' price='55000'></Device>
      <Device name='Mobile' price='17000'></Device>
      <Device name='Watch' price='2000'></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}
function Device(props) {
  // console.log(props)
  return <h2>This device: {props.name}</h2>
}

const { grade, score } = { grade: '7', score: '99' }
function Person() {
  const age = 27;
  const money = 20;
  const person = { name: 'Rakib', age: 27 }
  return <h3>I am {person.name} age {person.age} with money: {age + money}</h3>
}

function Student(props) {
  console.log(props)
  return <div className="student">
    <h3>This is a student</h3>
    <p>Name:</p>
    <p>Age:</p>
  </div>
}

function Developer() {

  const developerStyle = {
    margin: "20px",
    padding: '20px',
    border: '2px solid blue',
    borderRadius: '20px'
  }

  return <div style={developerStyle}>
    <h5>Devo Devo</h5>
    <p>Coding:</p>
  </div>
}

export default App
