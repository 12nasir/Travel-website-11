import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='images'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://skift.com/wp-content/uploads/2020/01/Paksitan-mountains-1024x684.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>CARIBBEAN</h3>
                    <p>UNFORGETTEABLE JOURNEY</p>
                    </Carousel.Caption>
                </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="https://images.squarespace-cdn.com/content/v1/5e1c95b94304dc5c248e608a/1579829731560-R3IXGCOHYDTG1ANFE6W4/home-page-hero-banner-dark.png?format=2500w"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>CARIBBEAN</h3>
                        <p>YOUR PERFECT JOURNEY.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://sgp1.digitaloceanspaces.com/halalzilla/wp-content/uploads/2019/04/050504040808/image1-770x508.png"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>CARIBBEAN</h3>
                        <p>SUMMARTIME ADVENTURES</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;