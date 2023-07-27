'use client'
import Image from 'next/image'
import styles from './page.module.css'
import React, { useEffect } from 'react'
import Netflix from '../../../public/Netflix.png'
import DiamondEats from '../../../public/DiamondEats.png'
import HotelHorizon from '../../../public/HotelHorizon.png'
import Link from 'next/link'

const Page = () => {
    useEffect(() => {
        document.title = "Shishir Subedi - Projects"
    })
    return (
        <section className={styles.myProjectsSection}>
            <div className={styles.myProjectsContainer}>
                <h2>My Projects</h2>
                <div className={styles.project}>
                    <div className={styles.projectImage}>
                        <Image width={500} height={400} src={Netflix} alt="Project" />
                    </div>
                    <div className={styles.projectDetails}>
                        <h3>Netflix Clone (UI)</h3>
                        <p>
                            A clone of the popular streaming platform Netflix built using only
                            front-end technologies like HTML and CSS with a focus on UI design principles.
                        </p>
                        <p><b>Technologies used: <i> HTML, CSS</i></b></p>
                        <Link href="https://shishir-subedi-netflix-clone.netlify.app/" target="_blank" rel="noopener noreferrer">Live Link</Link>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectImage}>
                        <Image width={500} height={400} src={DiamondEats} alt="Project" />
                    </div>
                    <div className={styles.projectDetails}>
                        <h3>DiamondEats</h3>
                        <p>
                            A Fast Food Restaurant website where a customer can order food online with full authentication system and everything. Use <b>shishirsubedi116@gmail.com</b>  and <b>Dummypass</b>  to log in as a user and order food.
                        </p>
                        <p><b>Technologies used: <i>NextJs, ExpressJs, MongoDB</i></b></p>
                        <Link href="https://diamondeatsclient.vercel.app/" target="_blank" rel="noopener noreferrer">Live Link</Link>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectImage}>
                        <Image width={500} height={400} src={HotelHorizon} alt="Project" />
                    </div>
                    <div className={styles.projectDetails}>
                        <h3>HotelHorizon</h3>
                        <p>A hotel website where a customer can book room online before checking in. Use <b>shishirsubedi116@gmail.com</b>  and <b>Dummypass</b>  to log in as a user and order food. Please mail us if you want to find out what the admin page looks like.</p>
                        <p><b>Technologies used: <i>ReactJs, ExpressJs, MongoDB</i></b></p>
                        <Link href="https://hotelhorizon.vercel.app/" target="_blank" rel="noopener noreferrer">Live Link</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page