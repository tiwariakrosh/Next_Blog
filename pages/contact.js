import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'
import '../styles/Contact.module.css'

const Contact = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [message, setmessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, phone, message)

        const data = { name, email, phone, message };

        fetch('http://localhost:3000/api/postcontact', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.text())
            .then((data) => {
                console.log('Success:', data);
                alert("Thanks for contacting us :)")
                setname('')
                setemail('')
                setphone('')
                setmessage('')
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setname(e.target.value)
        }
        else if (e.target.name == 'email') {
            setemail(e.target.value)
        }
        else if (e.target.name == 'phone') {
            setphone(e.target.value)
        }
        else if (e.target.name == 'message') {
            setmessage(e.target.value)
        }
    }
    return (
        <div className='contact'>
            <div className="main">
                <h2>Contact Us</h2>
                <div className={styles.contactMain}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formRow}>
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" value={name} onChange={handleChange} id="name" name="name" required />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" value={email} onChange={handleChange} id="email" name='email' required />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="phone" className="form-label">Phone No. </label>
                            <input type="tel" onChange={handleChange} className="form-control" value={phone} name="phone" id="phone" required />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea name="message" className='form-control' onChange={handleChange} id="message" value={message} rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28253.844100428425!2d85.36262138406866!3d27.725605698181784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bbeb021a8c3%3A0xf5da322eefd636cd!2sJorpati%2C%2044600!5e0!3m2!1sen!2snp!4v1671009187746!5m2!1sen!2snp" allowFullScreen="yes" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact