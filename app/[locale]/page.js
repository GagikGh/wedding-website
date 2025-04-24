import Header from "../components/header";
import Locations from "../components/locations";
import SliderVenues from "../components/sliderVenues";
import Services from "../components/services";
import Portfolio from "../components/portfolio";
import Testimonial from "../components/testimonial";
import ContactForm from "../components/contactForm";
import Maps from "../components/maps";
import Footer from "../components/footer";
import { useTranslations } from 'next-intl';

export default function Home() {
  const locationImages = [
    {image: "/images/Florence.png", name: "Florence"},
    {image: "/images/San Gamignano.png", name: "San Gamignano"},
    {image: "/images/Volterra.png", name: "Volterra"},
    {image: "/images/Chianti.png", name: "Chianti"},
    {image: "/images/Val d'Orcla.png", name: "Val d'Orcla"},
    {image: "/images/Siena.png", name: "Siena"},
    {image: "/images/Lucca.png", name: "Lucca"},
    {image: "/images/browse-more.png", name: "Browse more"}

  ];

  const t = useTranslations('common');

  
  return (
    <div className="project">
      <Header/>
      <h1>
        {t('title')}
      </h1>
      <div className='locations'>
          <div className="location-text">
              <h2 style={{ fontFamily: 'Boska, serif' }}>Locations</h2>
              <p style={{ fontFamily: 'Switzer, sans-serif' }}>that you will remember forever</p> 
          </div>
          <div className="location-images">
              {locationImages.map((location,index) =>{
                return(
                  <Locations location={location} key={index}/>
                    
                )
              })}
          </div>   

      </div> 
      <div className="sliderVenues">
        <p className="slide-name">Featured venues</p>
        <SliderVenues/>
      </div>
      <Services/>
      <Portfolio/>
      <section className="testimonial-section">
        <Testimonial/>
      </section>
      <div className="twodiv">
        <ContactForm />
        <Maps />
      </div>
      <Footer/>
      
        

      
      
      
    </div>
  );
}
