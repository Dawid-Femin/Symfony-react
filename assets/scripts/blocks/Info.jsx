import React from 'react';

function Info(props) {
    const {imageUrl, subtitle, title, description, textSide} = props;

    let textSideStyles = {};

    if (textSide === 'right') {
        textSideStyles = {
            paddingLeft: '10em',
            order: '1'
        };
    } else if (textSide === 'left') {
        textSideStyles = {
            paddingRight: '10em',
            order: '0'
        };
    }

    return (
        <section className='container info mt-5'>
            <div className='info__text' style={textSideStyles}>
                <h5 className='info__text-subtitle my-2'>{subtitle}</h5>
                <h2 className='info__text-title my-2'>{title}</h2>
                <p className='info__text-description my-2'>{description}</p>
            </div>
            <img src={imageUrl} className='info__img' alt='Info'/>
        </section>
    );
}

export default Info;
