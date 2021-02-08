
import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from 'react'
import { getCategories } from '../app/api/api'
import Home from '../app/components/templates/Home'
import Header from '../app/components/modules/Header'


export default function HomePage({categories}) {
  return <Home />
}

export async function getStaticProps(){
  // const categories = await getCategories()
  return {
    props: {
      // categories: categories
    }
  }

}
