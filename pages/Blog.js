import React from 'react'
import styles from '../styles/Blog.module.css'
import Image from 'next/image'
import Link from 'next/link'
// setrp1: Colect all the files from blogdata director
// step 2: Iterate through the and Display them

const Blog = () => {
    return (
        <div className={styles.main}>
            <style jsx global>
                {`
          .hero{
          color: blue;
          }
          .blogItem img{
            border-radius: 7px;
            box-shadow: 4px 5px 15px #3333;
            margin-top: 20px;
            padding: 
          }
          `
                }
            </style>
            <h2>Popular Blogs</h2>
            <div className={styles.blogs}>
                <div className={styles.blogItem}>
                    <Link href='/blogpost/learn_js'>
                        <Image src="/assets/hd_bg.jpg" alt="" width={400} height={300} />
                        <h3>How to learn Javascript 2022</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at ducimus iste ipsa quisquam corrupti sint adipisci deserunt commodi unde et quod incidunt nostrum autem expedita fugiat itaque dolores accusantium, eum ad esse illo, voluptates facere totam. Officiis officia optio explicabo ipsam magni culpa temporibus suscipit. Eaque molestias mollitia nihil!</p>
                    </Link>
                </div>
                <div className={styles.blogItem}>
                    <Image src="/assets/dark_bg.jpg" alt="" width={400} height={300} />
                    <h3>How to learn Javascript 2022</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at ducimus iste ipsa quisquam corrupti sint adipisci deserunt commodi unde et quod incidunt nostrum autem expedita fugiat itaque dolores accusantium, eum ad esse illo, voluptates facere totam. Officiis officia optio explicabo ipsam magni culpa temporibus suscipit. Eaque molestias mollitia nihil!</p>
                </div>
                <div className={styles.blogItem}>
                    <Image src="/assets/setup_bg.webp" alt="" width={400} height={300} />
                    <h3>How to learn Javascript 2022</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at ducimus iste ipsa quisquam corrupti sint adipisci deserunt commodi unde et quod incidunt nostrum autem expedita fugiat itaque dolores accusantium, eum ad esse illo, voluptates facere totam. Officiis officia optio explicabo ipsam magni culpa temporibus suscipit. Eaque molestias mollitia nihil!</p>
                </div>
            </div>
        </div>
    )
}

export default Blog;