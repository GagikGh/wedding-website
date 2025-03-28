import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Locations from "./components/locations";
import SliderVenues from "./components/sliderVenues";

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

  
  return (
    <div className="project">
      <Header/>
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
        <SliderVenues/>
      </div>
      
      
    </div>
  );
}
