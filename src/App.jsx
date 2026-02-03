import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
import Book from './Book'

function App() {
  const [count, setCount] = useState(0)
  const actors = ['Shakib', 'Jasim', 'Raj', 'Elias', 'Rubel'];
  const singers = [
    { id: 1, name: 'Dr. Mahfuzur', age: 68 },
    { id: 2, name: 'Eva Rahman', age: 38 },
    { id: 3, name: 'Shuvro Dev', age: 58 },
    { id: 4, name: 'Pritom', age: 28 }
  ]
  const books = [
    { id: 1, name: 'Bangla', price: 200 },
    { id: 2, name: 'Math', price: 150 },
    { id: 3, name: 'English', price: 180 },
    { id: 4, name: 'Physics', price: 220 },
    { id: 5, name: 'Chemistry', price: 250 }
  ]



  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      {/* {
        books.map(book => <Book book={book}></Book>)
      } */}

      {/* {
        singers.map(singer => <Singer singer={singer}></Singer>)
      } */}

      {/* <Actor name={'Bappa Raj'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}
      {/* <Todo
        task="Learn React"
        isDone={true}></Todo>
      <Todo
        task="Explore Core Concept"
        isDone={false}></Todo>
      <Todo
        task="Try JSX"
        isDone={true}></Todo> */}
      {/* <Device name='Laptop' price='55000'></Device>
      <Device name='Mobile' price='17000'></Device>
      <Device name='Watch' price='2000'></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade={12} score='85'></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}
function Device(props) {
  // console.log(props)
  return <h2>This device: {props.name}</h2>
}


function Person() {
  const age = 27;
  const money = 20;
  const person = { name: 'Rakib', age: 27 }
  return <h3>I am {person.name} age {person.age} with money: {age + money}</h3>
}

const { grade, score } = { grade: '7', score: '99' }
function Student({ grade = 1, score = 0 }) {
  console.log(grade, score)
  return <div className="student">
    <h3>This is a student</h3>
    <p>Class: {grade}</p>
    <p>Score: {score}</p>
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
