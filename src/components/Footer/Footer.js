import logo from 'assets/images/GroupLOGOWHTE.svg';
import fb from 'assets/images/facebook-263-721950FB.png';
import twitter from 'assets/images/twitter-241-721979TWITTER.svg';
import ig from 'assets/images/instagram-216-721958IG.png';

import './Footer.css';

const Footer = () => {
    return (
        <section id='footer' className='footer section'>
            <div className='footer-content container  flex'>
                <div className='footer__left'>
                    <img src={logo} alt='logo' className='logo__white ' />
                    <div className='media__icons flex'>
                        <a href='#'>
                            <img src={fb} alt='logo' />
                        </a>
                        <a href='#'>
                            <img src={ig} alt='logo' />
                        </a>
                        <a href='#'>
                            <img src={twitter} alt='logo' />
                        </a>
                    </div>
                    <span>&#169; 2022 Metabnb</span>
                </div>
                <div className='footer__right flex'>
                    <div className='footer__right__community'>
                        <h4>Community</h4>
                        <a href='#nfts'> NFT</a>
                        <a href='#'> Tokens</a>
                        <a href='#'> Landlords</a>
                        <a href='#'> Discord</a>
                    </div>
                    <div className='footer__right__places'>
                        <h4>Places</h4>
                        <a href='#'> Castle</a>
                        <a href='#'> Farms</a>
                        <a href='#'> Beach</a>
                        <a href='#'> learn More</a>
                    </div>
                    <div className='footer__right__about'>
                        <h4>About Us</h4>
                        <a href='#'> Road map</a>
                        <a href='#'> Creators</a>
                        <a href='#'> Career</a>
                        <a href='#'> Cotact us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
