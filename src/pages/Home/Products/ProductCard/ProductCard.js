import React from 'react';
import '../Product.css'

const ProductCard = ({ product, setTreatment }) => {
    console.log(product);

    const { img, productName, originalPrice, resaleprice, use, location } = product;

    return (
        <div className='body'>
            <div className="flip-card-container">
                <div className="flip-card">

                    <div className="card-front">
                        <figure className='figure'>
                            <div className="img-bg"></div>
                            <img className='img' src={img} alt="" />
                            <figcaption>Product Name:{productName}</figcaption>
                        </figure>
                        <ul className='ul'>
                            <li className='li' > </li>
                            <li className='li'>Resale Price :{resaleprice}</li>
                            <li className='li'>Original Price :{originalPrice}</li>
                            <li className='li'>years of use : {use}</li>
                            <li className='li'>Locatin : {location}</li>
                        </ul>
                    </div>
                    <div className="card-back">
                        <figure className='figure'>
                            <div className="img-bg"></div>
                            <img src={img} alt="Brohm Lake" />
                        </figure>
                        <label htmlFor="booking-modal" className='button  text-white' onClick={() => setTreatment(product)}>Book Appointment</label>
                        <div className="design-container">
                            <span className="design design--1"></span>
                            <span className="design design--2"></span>
                            <span className="design design--3"></span>
                            <span className="design design--4"></span>
                            <span className="design design--5"></span>
                            <span className="design design--6"></span>
                            <span className="design design--7"></span>
                            <span className="design design--8"></span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProductCard;