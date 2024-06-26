import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './style/Contact.css';

function Contact() {
    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                'portfolio_contact_serv',
                'portfolio_contact_temp',
                form.current,
                'xDHIa4wW-CKEZGqKS'
            )
            .then(
                (result) => {
                    alert('message envoyé');
                    console.log(result.text);
                    form.current.reset();
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    return (
        <>
            <form className="form" ref={form} onSubmit={(e) => sendEmail(e)}>
                <label htmlFor="name">Nom : </label>
                <input type="text" name="name" />
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" />
                <label htmlFor="message">Message : </label>
                <textarea type="text" name="message" />
                <button type="submit">Envoyer</button>
            </form>
        </>
    );
}

export default Contact;
