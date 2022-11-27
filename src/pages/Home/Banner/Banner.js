import React from 'react';
import img1 from '../../../assets/bannerPicture/img1.jpg'
import img2 from '../../../assets/bannerPicture/img2.jpg'
import img4 from '../../../assets/bannerPicture/img4.jpg'

const Banner = () => {
    return (
        <div>
            <div className=''>
                <div className='container mx-auto'>
                    <div className="carousel w-full h-3/4 mr-4">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src='https://i.ibb.co/WDNd50B/handcar4000x2500.jpg' alt='' className="w-full lg:h-screen" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={img2} alt='' className="w-full lg:h-screen" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={img1} alt='' className="w-full lg:h-screen" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={img4} alt='' className="w-full lg:h-screen" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;