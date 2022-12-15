import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
// step 1: Find the file corresponding to the slug

const slug = () => {
    const [blog, setblog] = useState();
    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setblog(parsed)
            })
    }, [router.isReady])

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

export default slug;
