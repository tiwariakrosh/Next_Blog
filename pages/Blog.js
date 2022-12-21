import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';
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
                                <img src={d.img} alt={d.title} width={400} height={250} />
                                <h3>{d.title}</h3>
                                <p>{d.metadesc.substr(0, 100)}...</p>
                                <i>by - {d.author}</i>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    let data = await fs.promises.readdir("blogdata");
    let myfile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        console.log(item)
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }
    return {
        props: { allBlogs }, // will be passed to the page component as props
    }
}

export default Blog;