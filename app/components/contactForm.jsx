"use client"

import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        partner1: '',
        partner2: '',
        date: '',
        guests: '',
    });

    const handleChange = (e) => {
        const { placeholder, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [mapPlaceholderToKey(placeholder)]: value,
        }));
    };

    const mapPlaceholderToKey = (placeholder) => {
        switch (placeholder) {
            case 'Name': return 'name';
            case 'Email': return 'email';
            case 'Phone no.': return 'phone';
            case 'Partner 1': return 'partner1';
            case 'Partner 2': return 'partner2';
            case 'MM/YY': return 'date';
            case 'Expected number of guests': return 'guests';
            default: return '';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const allFilled = Object.values(formData).every(value => value.trim() !== '');
        if (!allFilled) {
            alert("Please fill all fields");
            return;
        }
        alert("Our specialists will call you");

        setFormData({
            name: '',
            email: '',
            phone: '',
            partner1: '',
            partner2: '',
            date: '',
            guests: '',
        });
    };

    return (
        <div className="contact">
            <div>
                <h2 className="contact-us">Contact Us</h2>
                <p className="planning">We are excited to get planning!</p>
            </div>

            <form className="forms" onSubmit={handleSubmit}>
                <p className="contactinfo">Contact information</p>
                <input type="text" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input type="tel" placeholder="Phone no." value={formData.phone} onChange={handleChange} />

                <p className="getmarry">Who’s getting married?</p>
                <input type="text" placeholder="Partner 1" value={formData.partner1} onChange={handleChange} />
                <input type="text" placeholder="Partner 2" value={formData.partner2} onChange={handleChange} />
                <input type="text" placeholder="MM/YY" value={formData.date} onChange={handleChange} />
                <input type="text" placeholder="Expected number of guests" value={formData.guests} onChange={handleChange} />
                <input style={{ height: 144 }} type="text" placeholder="Tell us anything more that can help!"/>

                <button className="sendbutton" type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
