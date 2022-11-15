import { useSelector, useDispatch } from 'react-redux';

import closeicon from 'assets/images/xxicon.svg';
import chevron from 'assets/images/Down Chevronchevron right.svg';
import walletconnect from 'assets/images/Frame 195walletconnect.svg';
import meta from 'assets/images/Frame 195metawallet.svg';

import { closeModal } from 'features/modal/modalSlice';

import './Modal.css';

const Modal = () => {
    const modal = useSelector((state) => state.modal.open);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeModal());
        document.body.style.overflowY = 'scroll';
    };

    return (
        <div
            className={`modal__container ${
                modal === false ? 'closeModal' : ''
            }`}>
            <div
                className={`backdrop ${modal === false ? 'closeModal' : ''}`}
                onClick={handleClose}></div>
            <div className={`modal ${modal === false ? 'closeModal' : ''}`}>
                <div className='top__modal '>
                    <h4>Connect Wallet</h4>
                    <img
                        src={closeicon}
                        alt='closeicon'
                        onClick={handleClose}
                    />
                </div>
                <div className='bottom__modal'>
                    <span>choose your prerred wallet:</span>
                    <div className='wallets'>
                        <div className='meta'>
                            <img src={meta} alt='meta' className='meta__img' />

                            <img
                                src={chevron}
                                alt='chevron'
                                className='chevronright'
                            />
                        </div>
                        <div className='walletconnect'>
                            <img src={walletconnect} alt='walletconnect' />
                            <img
                                src={chevron}
                                alt='chevron'
                                className='chevronright'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
