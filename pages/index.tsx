
import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from 'react'
import {getAnimes} from '../app/api/animes'

import Link from 'next/link'
import Header from '../app/components/modules/Header'
import LastestAnime from '../app/components/modules/LastestAnime'



export default function Home({lastestAnimes}) {
  return (
    <>
      <LastestAnime animes={lastestAnimes}/>
    </>
  )
}

export async function getStaticProps(){
  const animes = await getAnimes()
  return {
    props: {
      lastestAnimes: animes
    }
  }

}
