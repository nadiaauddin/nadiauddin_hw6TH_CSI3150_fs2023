// structure
import React from 'react'
import "./hero.css"

function Hero(props){
    return(
        <div className="hero-wrapper">
            
            <div className='place-page'>

                <div className='place-heading-wrapper'>
                    <h1> {props.heading} </h1>
                </div>
                <div className='place-img-wrapper'>
                    <img src={props.img1} alt='pic 1' height='280px' width='280px'/>
                    <img src={props.img2} alt='pic 2' height='280px' width='280px'/>
                    <img src={props.img3} alt='pic 3' height='280px' width='280px'/>
                </div>
                <div className='place-intro-wrapper'>
                    <p>{props.description}</p>
                </div>

            </div>


        </div>
    )
};

export default Hero;
