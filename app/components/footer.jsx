import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footter">
            <Image
                src="/images/nav_logo.jpg"
                alt="logo"
                width={34}
                height={44}
                priority
                style={{marginTop: 18}}
            />
            <nav className="navbar-footer">
                <a href="#">About us</a>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">FAQ</a>
            </nav>
            <div  className="footer-images">
                <Image
                    src="/images/facebook-logo.jpg"
                    alt="facebook"
                    width={24}
                    height={24}
                    priority
                />
                <Image
                    src="/images/instagram-logo.jpg"
                    alt="instagram"
                    width={24}
                    height={24}
                    priority
                />
                <Image
                    src="/images/twitter-logo.jpg"
                    alt="twitter"
                    width={24}
                    height={24}
                    priority
                />
            </div>
        </footer>
    );
};

export default Footer;