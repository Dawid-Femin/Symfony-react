import React from 'react';
import {Button} from "@mui/material";

function Hero(props) {
    const {imageUrl, height, title, description, button} = props;

    const heroStyle = {
        backgroundImage: `url(${imageUrl})`,
        height: height,
    };

    return (
        <section className='hero' style={heroStyle}>
            <div className='container'>
                <div className='hero__inner'>
                    <h1 className='hero__title'>{title}</h1>
                    <h6 className='hero__description'>{description}</h6>
                    <Button className='hero__button' variant="contained">{button}</Button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
