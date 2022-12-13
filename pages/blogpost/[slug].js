import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import React from 'react'

const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Title of the page{slug}</h1>
                <hr />
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni enim aut earum neque quasi assumenda rem perspiciatis mollitia cum incidunt reprehenderit odio eligendi. Similique ipsa placeat vero quod. Sunt corrupti fuga aliquam dolores nulla repellendus sint. Perspiciatis blanditiis, doloremque assumenda a, nisi laboriosam voluptatem eius expedita maxime beatae voluptas!
                </div>
            </div>
        </div >
    )
}

export default slug;
