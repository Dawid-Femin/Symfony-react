import React from 'react';

function Card(props) {
    const {imageUrl, title, description} = props;

    return (
        <div className='card'>
            <img src={imageUrl} className='card__img'/>
            <h2 className='card__title my-2'>{title}</h2>
            <h5 className='card__description'>{description}</h5>
        </div>
    );
}

export default Card;
