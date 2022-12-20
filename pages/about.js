import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'

const about = () => {
    return (
        <div className='main'>
            <div className={styles.aboutContainer}>
                <h1>About Us</h1>
                <Image src='/assets/setup_bg.webp' alt="About main" width={700} height={350} />
                <h2>Introduction</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit non autem repellendus iste sapiente, debitis eum dignissimos nobis eveniet ducimus veritatis accusamus sequi consectetur in quibusdam a, aliquam laudantium reprehenderit quo aut libero iure magnam molestias. Rem dolores fugit necessitatibus facilis! Dicta vel quas minima nulla placeat blanditiis, in accusamus suscipit reprehenderit, rerum harum unde recusandae quae ut repellendus asperiores.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cum optio tempora. Molestiae quos ratione adipisci voluptate cumque similique! Cum quisquam laborum officiis reiciendis iusto! Minus sapiente quibusdam nemo, sint quis dolore ducimus libero aliquam temporibus repellendus error rem illo.</p>
                <h2>Our Mission</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid et molestias beatae quisquam consectetur earum cupiditate incidunt consequuntur modi soluta aperiam nihil, aliquam perferendis culpa dolor at praesentium pariatur magnam recusandae laboriosam accusantium itaque rem ut. Dolorum adipisci enim quam quidem, fuga ea quos odio eligendi explicabo asperiores! Qui soluta ipsa similique doloremque quisquam illo deserunt?</p>
                <ol>
                    <li>First Point</li>
                    <li>Second Point</li>
                    <li>Third Point</li>
                    <li>Fourth Point</li>
                    <li>Fifth Point</li>
                </ol>
                <h2>Our Vision</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia eius unde corporis facilis obcaecati modi quisquam neque ut. Fugit necessitatibus placeat ratione consectetur ducimus minus earum doloribus commodi dolorum ipsam, ab incidunt totam ullam. Laboriosam nam, cupiditate veniam molestiae odit porro consequuntur magnam quas soluta iure aperiam sit, iusto commodi harum dolore quidem nostrum molestias esse. Minus excepturi corrupti rerum quasi inventore provident sed distinctio expedita, debitis tempora itaque omnis dignissimos vero ipsum eligendi nostrum aperiam repudiandae? Fuga aspernatur id voluptas possimus repellendus. Laudantium, consequatur.</p>

                <h2>Contact Us</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, molestias iure officia, natus illum ad perferendis et eveniet mollitia placeat corrupti quibusdam ipsum, error dolorum sequi? Distinctio assumenda aspernatur sequi necessitatibus reprehenderit ea beatae, maxime consectetur facere. Quasi, sit, ea dolor id pariatur tempore porro veniam ut, tenetur quidem possimus odio voluptate.</p>
            </div>
        </div>
    )
}

export default about