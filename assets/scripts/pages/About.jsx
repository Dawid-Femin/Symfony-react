import React from 'react';
import Nav from '../blocks/Nav'
import Hero from "../blocks/Hero";

function About() {
    return (
        <>
            <Nav/>
            <Hero
                imageUrl={require('../../../assets/images/hero.webp')}
                height={'calc(30vh - 56px)'}
                title='Witaj na stronie Internetowej Wizytówki!'
                description=''
            />
        </>
    );
}

export default About;
