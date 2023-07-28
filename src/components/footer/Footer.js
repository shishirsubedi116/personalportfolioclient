import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSocial}>
        <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Image height={30} width={30} src="/media1.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/codewithdiamond" target="_blank" rel="noopener noreferrer">
          <Image height={30} width={30} src="/media2.png" alt="Twitter" />
        </a>
        <a href="https://www.twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Image height={30} width={30} src="/media3.png" alt="Instagram" />
        </a>
      </div>
      <p>Email: shishirsubedi.email@gmail.com</p>
      <p>&copy; 2023 Shishir Subedi. All rights reserved.</p>
    </footer>
  )
}

export default Footer