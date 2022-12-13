import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const navbar = () => {
    return (
        <nav>
            <ul className={styles.mainNav}>
                <li><Link href='/'>Home</Link></li>
                <li><Link href="/about">About US</Link></li>
                <li><Link href='/course'>Course</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default navbar;