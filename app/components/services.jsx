import Image from "next/image"

const services = [
    {
        image: "/images/Rectangle 14.png",
        title: "Photography",
    },
    {
        image: "/images/Rectangle 15.png",
        title: "Ceremony"
    },
    {
        image: "/images/Rectangle 16.png",
        title: "Wedding Design"
    },
]

export default function Services() {
    return (
        <section className="services">
            <div className="services-text">
                <h2 className="services-title">Services</h2>
                <p className="services-subtitle">to plan and orchestrate your <br />special occasion</p>
            </div>
            <div className="services-container">
                {services.map((item, index) => (
                    <div key={index} className="service-card">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={223}
                            height={210}
                            priority
                            className="service-image"
                        />
                        <h3 className="service-title">{item.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
} 