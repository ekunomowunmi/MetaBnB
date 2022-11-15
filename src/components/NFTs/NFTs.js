import React from 'react';

import nfts from 'assets/images/Frame 59546NFTS.svg';

import './NFTs.css';

const NFTs = () => {
    return (
        <section id='nfts' className='nfts section'>
            <div className='nfts-content container flex'>
                <div className='nfts__description'>
                    <h2>Metabnb NFTs</h2>
                    <p>
                        Discover our NFT gift cards collection. Loyal 
                        customers gets amazing gift cards which are
                         traded as NFTs. These NFTs gives our customer
                         access to loads of our exclusive services.
                    </p>

                    <button className='button nfts__button'>Learn more</button>
                </div>
                <div className='nfts__image'>
                    <img src={nfts} alt='nfts' />
                </div>
            </div>
        </section>
    );
};

export default NFTs;
