import React from 'react'

const contact = () => {
    return (
        <div className='contact'>
            <style jsx global>
                {`
                .contact{
                    width: 100%;
                }
                h2{
                    margin: 20px 0;
                    text-align: center;
                }
                div{
                    height: calc(100vh - 560px);
                }
                iframe{
                    width: 100%;
                    height: 400px;
                }
          `
                }
            </style>
            <div className="main">
                <h2>Contact Us</h2>
                <div>

                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28253.844100428425!2d85.36262138406866!3d27.725605698181784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bbeb021a8c3%3A0xf5da322eefd636cd!2sJorpati%2C%2044600!5e0!3m2!1sen!2snp!4v1671009187746!5m2!1sen!2snp" allowfullscreen="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default contact