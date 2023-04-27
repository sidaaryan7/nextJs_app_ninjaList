import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../comps/Navbar";
import Footer from '../comps/Footer';
import Link from "next/link";

export default function Home() {

  console.log("hello")
  console.logh("hey btesting men");
  return (
    <>
    <Head>
        NINJA LIST
      </Head>
    

      <div >
      

      <h1 className={styles.title}>HELLO</h1>
      <p className={styles.text}>

        Loremhdsghdjsgsdgdsgddjsgsgsdjdgs
      </p>

      <p className={styles.text}>
        ghghhxtyt hjhj hjh jhj hh h j jhjh
      </p>
      <Link  href="/Ninjas"><a className={styles.btn}>see ninja listing</a></Link>
      
    </div>
    </>
    
  )
}
