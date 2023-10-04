import React from 'react';
import './About.css';
import Slider from './Slider';
import imgFour from '../../Images/products/imgFour.jpg';

const About = () => {
    return (
        <>
                <Slider/>
                <div className='card'>
                    <div className='card-body'>
                        <div className="about">
                            <h1>About Us</h1>
                            <img
                                src={imgFour}
                                alt="About Us"
                                className="about-image"
                            />
                            <p className="about-paragraph">
                                Your About Us text goes here. You can provide a brief description of your company, team, or whatever the About page is about.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae pra
                                esentium nulla exercitationem ab eos, dolore dolor nostrum minus fuga alias rerum ipsum, veritatis perferendis sapiente natus consequuntur officiis possimus amet.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eaque enim repudiandae laboriosam modi maiores vel! Quo a assumenda blanditiis magni accusamus impedit ex maiores nesciunt ullam, saepe nobis officiis.
                            </p>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default About
