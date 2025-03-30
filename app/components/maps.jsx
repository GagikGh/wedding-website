import Image from "next/image";

const Maps = () => {
    return (
        <div className="map">
            <Image
                src="/images/map_placeholder.png"
                alt="map"
                width={393}
                height={330}
                priority
            />

            <h3 className="headoffice">Head office</h3>
            <p style={{ color: "#98A093" }}>Via Roma, 123<br /> 20121 Milano (MI) <br /> Italy </p>
            <p style={{ color: "#98A093", marginTop: 8 }}>Phone: +39 (0)322 221211 <br /> Mobile: +39 328 2211212 </p>
            <p style={{ color: "#576250", marginTop: 24}}> Follow us</p>

            <div style={{marginTop: 16}}>
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
    )
}

export default Maps;