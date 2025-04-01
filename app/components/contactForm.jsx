const ContactForm = () => {
    return (
        <div className="contact">
            <div>
                <h2 className="contact-us">Contact Us</h2>
                <p className="planning">We are excited to get planning!</p>
            </div>
            
            
            <form className="forms">
                <p className="contactinfo">Contact information</p>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="tel" placeholder="Phone no."/>
            </form>
            
            <form className="secondform">
                <p className="getmarry">Who’s getting married?</p>
                <input type="text" placeholder="Partner 1"/>
                <input type="text" placeholder="Partner 2"/>
                <input type="text" placeholder="MM/YY"/>
                <input type="text" placeholder="Expected number of guests"/>
                <input style={{height: 144}} type="text" placeholder="Tell us anything more that can help!"/>
            </form>
            <button className="sendbutton" type="submit"  >Send</button>
        </div>
    );
};

export default ContactForm;