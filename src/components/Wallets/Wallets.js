import React from 'react';
import mbToken from '../../assets/images/Group 59537.svg';
import metaMask from '../../assets/images/Group 4040.svg';
import openSea from '../../assets/images/Frame 4041.svg';

import './Wallets.css';

const Wallets = () => {
    return (
        <section className='section' id='wallets'>
            <div className='wallets-content container flex'>
                <img src={mbToken} alt='mbtoken' />
                <img src={metaMask} alt='metaMask' />
                <img src={openSea} alt='openSea' />
            </div>
        </section>
    );
};

export default Wallets;
