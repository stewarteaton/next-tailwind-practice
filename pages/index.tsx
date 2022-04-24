import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// Components
import Header from './header';
import HomePage from './homePage';
import Products from './productsList';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    <Header />
    <HomePage />
    <Products />
    </div>
  )
}

export default Home
