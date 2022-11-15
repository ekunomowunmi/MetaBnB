import Community from 'components/Community/Community';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import NFTs from 'components/NFTs/NFTs';
import Wallets from '../components/Wallets/Wallets';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { homeData } from 'data/Data';
const Main = () => {
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
                <Hero />
                <Wallets />
                <Community data={homeData} isHome={true} />
                <NFTs />
                <Footer />
            </main>
        </>
    );
};

export default Main;
