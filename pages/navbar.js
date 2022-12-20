import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const navbar = () => {
    return (
        <nav>
            <ul className={styles.mainNav}>
                <li><Link href='/'>Home</Link></li>
                <li><Link href="/about">About US</Link></li>
                <li><Link href='/Blog'>Blog</Link></li>
                <li><Link href='/Contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default navbar;