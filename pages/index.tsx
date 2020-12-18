import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'

function Todo({title, completed}){
  return (
    <div className="my-2 bg-teal-200 shadow px-5 py-5 rounded-md">
      <h1>{title}</h1>
    </div>
  )
}


export default function Home({todos}) {
  return (
    <>
      <h1>Hey <Link href="/contact">clic aqui</Link></h1>
      {todos.map(e => <Todo title={e.title} completed={e.completed} key={e.id}/>)}
    </>
  )
}

export async function getStaticProps(context){
  let data = await fetch('https://jsonplaceholder.typicode.com/todos/')
  data = await data.json()
  return {
    props: {
      todos: data
    }
  }

}
