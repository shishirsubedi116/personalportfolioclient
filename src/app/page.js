'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0)
    document.title = "Shishir Subedi - Home"
  })
  return (
    <>
      <section id="home" className={styles.homeSection}>
        <div className={styles.contentContainer}>
          <div className={styles.aboutMe}>
            <h1>Hi, I'm Shishir!</h1>
            <p>
              I'm a 19-year-old full-stack web developer with a passion for creating beautiful and interactive
              web apps.
              I specialize in HTML, CSS, JavaScript, ReactJS, NextJS, NodeJS, Express, and MongoDB.
              Let's build something amazing together!
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image width={350} height={400} src="/vegburger.jpg" alt="Shishir Subedi" className={styles.profileImage} />
          </div>
        </div>
      </section>
    </>
  )
}
