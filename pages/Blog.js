import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Image from 'next/image'
import Link from 'next/link'
// setrp1: Colect all the files from blogdata director
// step 2: Iterate through the and Display them

const Blog = (props) => {
    // console.log(props)
    const [blogs, setBlogs] = useState(props.allBlogs);
    // useEffect(() => {

    // }, [])
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
                                <p>{d.desc.substr(0, 200)}...</p>
                                <span>{d.author}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export async function getServerSideProps(context) {
    let data = await fetch('http://localhost:3000/api/blogs')
    let allBlogs = await data.json()
    return {
        props: { allBlogs }, // will be passed to the page component as props
    }
}

export default Blog;