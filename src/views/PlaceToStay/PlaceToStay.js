import React from 'react';

import Community from 'components/Community/Community';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { placesData } from 'data/Data';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PlaceToStay = () => {
    // ==============================|| NAVIGATION SCROLL TO TOP ||============================== //

    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [pathname]);
    return (
        <>
            <Header />
            <main>
                <Community data={placesData} isHome={false} />

                <Footer />
            </main>
        </>
    );
};

export default PlaceToStay;
