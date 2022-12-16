import styles from '../../styles/BlogPost.module.css'
import Image from 'next/image'
import React, { useState } from 'react'
// step 1: Find the file corresponding to the slug

const slug = (props) => {
    const [blog, setblog] = useState(props.myblog);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>{blog && blog.title}</h1>
                <Image src={blog && blog.img} alt={blog && blog.title} width={600} height={300}></Image>
                <div>
                    {blog && blog.desc}
                    <br />
                    <small>Author - {blog && blog.author}</small>
                </div>
            </div>
        </div >
    )
}

export async function getServerSideProps(context) {
    console.log(context.req.url)

    const { slug } = context.query;
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let myblog = await data.json();
    return {
        props: { myblog }, // will be passed to the page component as props
    }
}

export default slug;
