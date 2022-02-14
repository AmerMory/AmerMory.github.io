import React from 'react';
import myPicture from './images/pp.jpeg';
import email from './images/Mail.svg';
import linkedin from './images/linkedin.svg';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

export default function Info() {
    return (
        <div className='info'>
            <img className='pp' src={myPicture} alt='' />
            <h1>Mohamed Amer</h1>
            <h4>Front-End Developer</h4>
            <p>www.mohamedamer.com</p>
            <button className='email'><a href="amer.mohamed57@gmail.com" target='_blank'><img src={email} alt=''/>Email</a></button> 
            <button className='linked'><a href="https://www.linkedin.com/in/ma2266/" target='_blank' rel="noreferrer"><img src={linkedin} alt=''/>LinkedIn</a></button>
            <About />
            <Interests />
            <Footer />
        </div>
    )
};