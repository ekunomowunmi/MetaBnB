import React, { useState } from 'react';

import rating from 'assets/images/Frame 595285stars.svg';
import heart from 'assets/images/heart.svg';

import setting from 'assets/images/setting-5setting.svg';
import chevronRight from 'assets/images/Down Chevronchevron right.svg';

import './Community.css';

const sortOptions = [
    'Resturant',
    'Cottage',
    'Castle',
    'fantasy city',
    'beach',
    'Carbins',
    'off-grid',
    'Farm',
];

const Community = ({ data, isHome }) => {
    const [selectOpen, setSelectOpen] = useState(false);
    const [selectedName, setSelectedName] = useState();
    const handlselect = (e) => {
        setSelectOpen(!selectOpen);
        setSelectedName(e.target.innerText);
    };

    return (
        <section className='communiy section ' id='community'>
            <div className='community-content container flex'>
                {isHome && <h1>Inspiration for your next adventure</h1>}
                {!isHome && (
                    <div className='items__sort flex'>
                        {sortOptions.map((option) => (
                            <div key={option} className='sort__options'>
                                {option}
                            </div>
                        ))}
                        <div className='sort__options__mobile '>
                            <span onClick={() => setSelectOpen(!selectOpen)}>
                                {selectedName ? selectedName : `Sort     `}
                            </span>{' '}
                            <img
                                src={chevronRight}
                                alt='right'
                                className='chevron__right'
                            />
                            <div
                                className={`options__mobile ${
                                    selectOpen ? 'openSelect' : ''
                                }`}>
                                {sortOptions.map((option) => (
                                    <div
                                        key={option}
                                        className='sort__options__select'
                                        onClick={handlselect}>
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='location flex'>
                            <span>location</span>
                            <img src={setting} alt='setting' />
                        </div>
                    </div>
                )}
                <div className='meta__cards'>
                    {data.map((card, index) => (
                        <div className='card' key={index}>
                            <div className='card__img'>
                                <img
                                    src={card.img}
                                    alt={card.name}
                                    className='card__image'
                                />
                                <img
                                    src={heart}
                                    alt={heart}
                                    className='heart'
                                />
                            </div>
                            <div className='card__description'>
                                <div className='descrption__top'>
                                    <span className='card__name'>
                                        {card.name}
                                    </span>
                                    <span className='card__price'>
                                        {card.price}MBT per night
                                    </span>
                                </div>
                                <div className='descrption__middle'>
                                    <span className='card__distance'>
                                        {card.distance}km away
                                    </span>
                                    <span className='card__length'>
                                        available for {card.length}weeks stay
                                    </span>
                                </div>
                                <div className='descrption__bottom'>
                                    <img src={rating} alt='5star' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Community;
