import house1 from '../../assets/images/image 4.svg';
import house2 from '../../assets/images/image 6.svg';
import house3 from '../../assets/images/image 3.svg';
import house4 from '../../assets/images/image 5.svg';

import './Hero.css';
const Hero = () => {
    return (
        <section className='hero section' id='hero'>
            <div className='hero-content container flex'>
                <div className='hero__left'>
                    <h2>
                        Rent a <span>Place</span> away from <br />
                        <span>Home</span> in the <span>Metaverse</span>
                    </h2>
                    <p>
                        we provide you access to luxury and affordable houses{' '}
                        <br />
                        in the metaverse, get a chance to turn your
                        <br /> imagination to reality at your comfort zone
                    </p>
                    <div className='search-box flex'>
                        <input
                            type='text'
                            title='search'
                            placeholder='Search for Location'
                        />
                        <button className='button search__button'>
                            Search
                        </button>
                    </div>
                </div>
                <div className='hero__right flex'>
                    <div className='hero__right_imagebox1 flex'>
                        <img src={house1} alt='house1' />
                        <img src={house2} alt='house2' />
                    </div>
                    <div className='hero__right_imagebox2 flex'>
                        <img src={house3} alt='house3' />
                        <img src={house4} alt='house4' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
