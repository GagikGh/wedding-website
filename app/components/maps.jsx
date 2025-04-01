import Image from "next/image";
import GoogleMapIframe from "./GoogleMapIframe";

const Maps = () => {
    return (
        <div className="map">
            <GoogleMapIframe/>
            <div className="headoffice">
                <h3>Head office</h3>
                <p style={{ color: "#98A093" }}>Via Roma, 123<br /> 20121 Milano (MI) <br /> Italy </p>
                <p style={{ color: "#98A093"}}>Phone: +39 (0)322 221211 <br /> Mobile: +39 328 2211212 </p>
            </div>
           
            

            <div className="followUs">
                <p style={{ color: "#576250"}}> Follow us</p>
                <div>
                    <Image
                        src="/images/facebook(black).png"
                        alt="Facebook"
                        width={24}
                        height={24}
                        priority
                    />
                    <Image
                        src="/images/instagram(black).png"
                        alt="instagram"
                        width={24}
                        height={24}
                        priority
                    />
                    <Image
                        src="/images/twitter(black).png"
                        alt="twitter"
                        width={24}
                        height={24}
                        priority
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Maps;