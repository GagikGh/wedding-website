const ContactForm = () => {
    return (
        <div className="contact">
            <h2 className="contact-us">Contact Us</h2>
            <p className="planning">We are excited to get planning!</p>
            <p className="contactinfo">Contact information</p>
            <form className="forms">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="tel" placeholder="Phone no."/>
            </form>
            <p className="getmarry">Who’s getting married?</p>
            <form className="secondform">
                <input type="text" placeholder="Partner 1"/>
                <input type="text" placeholder="Partner 2"/>
                <input type="text" placeholder="MM/YY"/>
                <input type="text" placeholder="Expected number of guests"/>
                <input style={{width: 480, height: 162}} type="text" placeholder="Tell us anything more that can help!"/>
            </form>
                <button className="sendbutton" >Send</button>
        </div>
    );
};

export default ContactForm;