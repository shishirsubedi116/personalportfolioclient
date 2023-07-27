'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

const Page = () => {
    useEffect(() => {
        document.title = "Shishir Subedi - Contact"
    })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [pricing, setPricing] = useState('')
    const [description, setDescription] = useState('')

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${process.env.LINK}/api/neworder`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, address, pricing, description })
            })
            const data = await response.json()
            if (data.success) {
                alert(data.message)
                router.push('/')
            }
            else {
                alert(data.message)
            }
        } catch (error) {
            alert('Some Error Occured')
        }
    }


    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <h1>Contact Me</h1>
                <form className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="nameInput">Name:</label>
                        <input type="text" id="nameInput" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="emailInput">Email:</label>
                        <input type="email" id="emailInput" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="addressInput">Address:</label>
                        <input type="text" id="addressInput" name="address" required value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="pricingSelect">Select Pricing:</label>
                        <select id="pricingSelect" name="pricing" required value={pricing} onChange={(e) => setPricing(e.target.value)}>
                            <option value="basic">Basic</option>
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="projectDescription">Project Description:</label>
                        <textarea id="projectDescription" name="description" rows="4" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <button type="submit" onClick={handleSubmit} className={styles.submitBtn}>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Page