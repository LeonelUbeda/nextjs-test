import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from 'react'


function Todo({title, completed}){
  return (
    <div className="my-2 bg-teal-200 shadow px-5 py-5 rounded-md">
      <h1>{title}</h1>
    </div>
  )
}


export default function Home() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => setTodos(json))
  }, [])
  return (
    <>
      {todos.map(e => <Todo title={e.title} completed={e.completed} key={e.id}/>)}
    </>
  )
}
