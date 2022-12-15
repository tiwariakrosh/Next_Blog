import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Image from 'next/image'
import Link from 'next/link'
// setrp1: Colect all the files from blogdata director
// step 2: Iterate through the and Display them

const Blog = () => {
    const [blogs, setblogs] = useState([])
    useEffect(() => {
        console.log('useeffect is running...')
        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json();
        })
            .then((parsed) => {
                console.log(parsed)
                setblogs(parsed)
            })
    }, [])
    return (
        <div className={styles.main}>
            <h2>Popular Blogs</h2>
            {/* <Image src='/assets/blog_main.jpg' alt="blog main" width={400} height={250} /> */}
            <div className={styles.blogs}>
                {blogs.map((d) => {
                    return (
                        <div key={d.slug} className={styles.blogItem}>
                            <Link href={`/blogpost/${d.slug}`}>
                                <Image src={d.img} alt="" width={400} height={250} />
                                <h3>{d.title}</h3>
                                <p>{d.desc.substr(0, 400)}</p>
                                <span>{d.author}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Blog;