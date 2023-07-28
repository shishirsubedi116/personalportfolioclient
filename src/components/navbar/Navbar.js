'use client'
import React, { useState } from 'react'
import styles from './navbar.module.css'
import logo from '../../../public/profile.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter();
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Image height={40} width={50} src={logo} alt="Your Logo" onClick={()=>router.push('/')} />
      </div>
      <div className={styles.navbarRight}>
        <Link href="/">Home</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/projects">Projects</Link>
        {/* <Link href="/blog">Blog</Link> */}
        <Link href="/contact">Contact</Link>
        {/* <Link href="/socials">Socials</Link> */}
      </div>
    </nav>
  )
}

export default Navbar