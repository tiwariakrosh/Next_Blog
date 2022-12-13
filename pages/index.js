import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  console.log(styles)
  return (
    <div className={styles.container} >
      <style jsx global>
        {`
            .hero{
          color: red;
          background: yellow;
          }
          `
        }
      </style>
      <Head>
        <title>Hunting Coders</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src='/just.js'>

      </Script> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coders
        </h1>
        <span className='hero'>This is hero text</span>
        <p className={styles.description}>
          A Blog for hunting coder bybb hunting corder
        </p>
        <br />
        <h2>Popular Blogs</h2>
        <div className="blogs">
          <div className="blogItem">
            <Image src="/assets/hd_bg.jpg" alt="" width={400} height={300} />
            <h3>How to learn Javascript 2022</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at ducimus iste ipsa quisquam corrupti sint adipisci deserunt commodi unde et quod incidunt nostrum autem expedita fugiat itaque dolores accusantium, eum ad esse illo, voluptates facere totam. Officiis officia optio explicabo ipsam magni culpa temporibus suscipit. Eaque molestias mollitia nihil!</p>
          </div>
          <div className="blogItem">
            <Image src="/assets/dark_bg.jpg" alt="" width={400} height={300} />
            <h3>How to learn Javascript 2022</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at ducimus iste ipsa quisquam corrupti sint adipisci deserunt commodi unde et quod incidunt nostrum autem expedita fugiat itaque dolores accusantium, eum ad esse illo, voluptates facere totam. Officiis officia optio explicabo ipsam magni culpa temporibus suscipit. Eaque molestias mollitia nihil!</p>
          </div>
          <div className="blogItem">
            <Image src="/assets/setup_bg.webp" alt="" width={400} height={300} />
            <h3>How to learn Javascript 2022</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at ducimus iste ipsa quisquam corrupti sint adipisci deserunt commodi unde et quod incidunt nostrum autem expedita fugiat itaque dolores accusantium, eum ad esse illo, voluptates facere totam. Officiis officia optio explicabo ipsam magni culpa temporibus suscipit. Eaque molestias mollitia nihil!</p>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div >
  )
}
