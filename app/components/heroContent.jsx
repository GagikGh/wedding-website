import React from 'react'
import Image from 'next/image'


export default function HeroContent() {
  return (
    <div className='heroContent'>
      <div className={`content-text`} style={{ fontFamily: 'Boska, serif' }}>
          <h1>Discover your perfect Italian wedding venue</h1>
          <p style={{ fontFamily: 'Switzer, sans-serif' }}>Sagittis adipiscing posuere id adipiscing aliquam posuere.
                Aliquet<br/> faucibus duis accumsan aliquet tempor diam dignissim suscipit. 
                Nibh<br/> urna ut diam fames.
          </p>          
      </div>   
      
    </div>
  )
}
