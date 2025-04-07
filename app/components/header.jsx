"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import HeroContent from './heroContent';
import { useState } from 'react';



export default function Header() {
    

    const navItems = ["Browse","Services","Testimonials","Contact us"];

    const socialLogos = [
        '/images/facebook-logo.jpg',
        '/images/instagram-logo.jpg',
        '/images/twitter-logo.jpg'
      ];

        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };
  return (
    <div className='header'>
        <nav className='navBar'>
            <div className="dv_logo" style={{ marginTop: '24px', marginLeft: '64px' }}>
                <Image
                    src="/images/nav_logo.jpg"
                    alt="Logo DV"
                    width={32}
                    height={44}
                    priority
                    
                />
            </div>

            <button className="menu-button" onClick={toggleMenu}>
                ☰
            </button>

            <div className={`navItems `}>
                <div className={`navPages ${isOpen ? 'open' : ''}`} >
                    {navItems.map((item,index) => {
                        return(

                            <Link key={index} href={`/some-path/${item}`} className='links'>
                                {item}
                            </Link>
                        )
                    })}
                    
                </div>
                <div className='socialLogos'>
                    {socialLogos.map((logo,index) => {
                        return(
                            <div key={index}>
                            <Image 
                                
                                src={logo}
                                width={24}
                                height={24}
                                alt={`Image ${index + 1}`}
                                priority/> 
                            </div>
                        )
                    })}
                </div>
            </div>                       
        </nav>
        <HeroContent isOpen={isOpen}/>
    </div>
  )
}
