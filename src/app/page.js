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
            <h1>Hi, I&apos;m Shishir!</h1>
            <p>
              I&apos;m a 19-year-old full-stack web developer with a passion for creating beautiful and interactive
              web apps.
              I specialize in HTML, CSS, JavaScript, ReactJS, NextJS, NodeJS, Express, and MongoDB.
              Let&apos;s build something amazing together!
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image width={350} height={400} src="/hero.webp" alt="Shishir Subedi" className={styles.profileImage} />
          </div>
        </div>
      </section>
    </>
  )
}
