'use client'
import React, { useEffect } from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const page = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Shishir Subedi - Pricing"
    })
    return (
        <div>
            <h1 className={styles.pricingTitle}>Pricing</h1>
            <section className={styles.pricingSection}>
                <div className={styles.pricingCard}>
                    <h2>Basic</h2>
                    <p className={styles.price}>$19<span>/project</span></p>
                    <ul>
                        <li>Delivery Time: 3 days</li>
                        <li>No of pages: 3 - 4</li>
                        <li>No of Revisions: 2</li>
                        <li>Authentication: ❌</li>
                        <li>Image Upload: ❌</li>
                        <li>Responsive Design: ✅</li>
                    </ul>
                    <Link href="/contact" className={styles.btn}>Get Started</Link>
                </div>

                <div className={styles.pricingCard}>
                    <h2>Pro</h2>
                    <p className={styles.price}>$39<span>/project</span></p>
                    <ul>
                        <li>Delivery Time: 7 - 10 days</li>
                        <li>No of pages: 8 - 12</li>
                        <li>No of Revisions: 5</li>
                        <li>Authentication: ✅</li>
                        <li>Image Upload: ❌</li>
                        <li>Responsive Design: ✅</li>

                    </ul>
                    <a href="/contact" className={styles.btn}>Get Started</a>
                </div>

                <div className={styles.pricingCard}>
                    <h2>Premium</h2>
                    <p className={styles.price}>$79<span>/project</span></p>
                    <ul>
                        <li>Delivery Time: 14 - 20 days</li>
                        <li>No of pages: 12 - 20</li>
                        <li>No of Revisions: 10</li>
                        <li>Authentication: ✅</li>
                        <li>Image Upload: ✅</li>
                        <li>Responsive Design: ✅</li>
                    </ul>
                    <a href="/contact" className={styles.btn}>Get Started</a>
                </div>
            </section>
        </div>
    )
}

export default page