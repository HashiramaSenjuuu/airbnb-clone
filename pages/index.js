import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from "../components/Banner"
import styles from '../styles/Home.module.css'
import Section from '../components/Section'
import Footer from '../components/Footer'
import LargeComponent from '../components/LargeComponent'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   

    <Header />
    <Banner />
    
    <main>
      <Section />
    </main>



    <div className=" mt-16 lg:mt-36">
      <LargeComponent />
   

      </div>

     <footer>
      <Footer/>
    </footer> 



    </div>
  )
}
