import Modal from 'components/ui-components/Modal';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import menuBar from '../../assets/images/menu-bars-svgrepo-com.svg';
import closeIcon from '../../assets/images/icons8-close.svg';

import { useSelector, useDispatch } from 'react-redux';
import { openModal } from 'features/modal/modalSlice';

import './Header.css';

const Header = () => {
    const modal = useSelector((state) => state.modal.open);
    const dispatch = useDispatch();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const [windowPosition, setWindowPosition] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setWindowPosition(window.scrollY);
        };
        if (windowPosition >= 40) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, [windowPosition]);

    const handleMenu = () => {
        isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    };
    const handleModalOpen = () => {
        setIsMenuOpen(false);
        dispatch(openModal());
        document.body.style.overflowY = 'hidden';
    };
    return (
        <header className={`header ${isScrolled ? 'inverted' : ''}`}>
            <nav className='nav flex container'>
                <a href='#' className='logoContent'>
                    <img src={logo} alt='logo' />
                </a>
                <ul className={`nav-links flex ${isMenuOpen ? 'open' : ''}`}>
                    <li
                        className='nav-link'
                        onClick={() => setIsMenuOpen(false)}>
                        <Link to='/'>Home</Link>
                    </li>

                    <li
                        className='nav-link'
                        onClick={() => setIsMenuOpen(false)}>
                        <Link to='/place-to-stay'>Place to stay</Link>
                    </li>

                    <li
                        className='nav-link'
                        onClick={() => setIsMenuOpen(false)}>
                        <a href='#nfts'>NFTs</a>
                    </li>

                    <li
                        className='nav-link'
                        onClick={() => setIsMenuOpen(false)}>
                        <a href='#community'>Community</a>
                    </li>
                    <li>
                        <div className='nav__button-container '>
                            <button
                                onClick={handleModalOpen}
                                type='submit'
                                className='button nav__button-mobile'>
                                Connect Wallet
                            </button>
                        </div>
                    </li>
                    <li>
                        {' '}
                        <div className='closeMenu' onClick={handleMenu}>
                <img src={closeIcon} alt='closeIcon' />   
                        </div>
                    </li>
                </ul>
                <div className='nav__button-container '>
                    <button
                        type='submit'
                        className='button nav__button'
                        onClick={handleModalOpen}>
                        Connect Wallet
                    </button>
                </div>
                <div className='hamburgerMenu' onClick={handleMenu}>
                <img src={menuBar} alt='menuBar' />
                </div>
            </nav>
            <Modal />
        </header>
    );
};

export default Header;
