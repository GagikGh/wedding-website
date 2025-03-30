import Image from "next/image"

const portfolios = [
    {
        image: "/images/img_placeholder (1).png",
        title: "Joy & Jordan",

    },
    {
        image: "/images/img_placeholder (2).png",
        title: "Dianne & Michael",

    },
    {
        image: "/images/img_placeholder (3).png",
        title: "Gabrielle & Simon",
    },
    {
        image: "/images/img_placeholder (4).png",
        title: "Zoe & Adrian",
    },
];

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio-title">Our portfolios</h2>
            <div className="grid-container">
                {portfolios.map((item, index) => (
                    <div key={index} className="portfolio-item">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={512}
                            height={298}
                            priority
                            className="portfolio-image"
                        />
                        <div className="overlay">
                            <p className="wedding-text">THE WEDDING OF</p>
                            <h3 className="couple-name">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}