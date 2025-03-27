import React from 'react'
import Image from 'next/image'

export default function Locations({location}) {
  
  return (
    <div className='location-card'>
      <Image
        src={location.image}
        alt='place'
        width={248}
        height={153}
        priority/>
      <span style={{ fontFamily: 'Switzer, sans-serif' }}>{location.name}</span>
      {location.name === "Browse more" ? <Image
                                            style={{position: "absolute", top: "14px", right: "14px"}}
                                            src="/images/Corner-Arrow.png"
                                            alt='corner arrow'
                                            width={15}
                                            height={15}                                         
                                            priority/>: ""}
    </div>
   
  )
}
