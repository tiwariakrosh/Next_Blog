import styles from '../../styles/BlogPost.module.css'
import React, { useState } from 'react'
import * as fs from 'fs';
// step 1: Find the file corresponding to the slug

const Slug = (props) => {
    const [blog, setblog] = useState(props.myblog);

    function createMarkup(c) {
        return { __html: c };
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>{blog && blog.title}</h1>
                <img src={blog && blog.img} alt={blog && blog.title} width={600} height={300} />
                <div>
                    {blog && <div dangerouslySetInnerHTML={createMarkup(blog.desc)}></div>}
                    {/* {blog && blog.desc} */}
                    <br />
                    <small>Author - {blog && blog.author}</small>
                </div>
            </div>
        </div >
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'learn-javascript' } },
            { params: { slug: 'learn-nextjs' } },
            { params: { slug: 'learn-reactjs' } },
            { params: { slug: 'learn-typescript' } }
        ],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { slug } = context.params;
    let myblog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8');
    return {
        props: { myblog: JSON.parse(myblog) },
    }
}
export default Slug; 
