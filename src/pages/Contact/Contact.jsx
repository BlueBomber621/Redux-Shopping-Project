import React from "react";
import "./Contact.scss"

import Contact from "../../components/Contact/Contact";

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="info-area">
            <h1>Contact Us!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consectetur, officiis, dolor esse ipsum voluptates inventore saepe molestiae aperiam laboriosam sunt quos quam fuga laborum nihil laudantium sed ut perferendis?</p>
            </div>
            <Contact />
        </div>
    )
}

export default ContactPage;