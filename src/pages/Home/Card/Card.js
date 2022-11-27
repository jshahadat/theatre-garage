import React from 'react';
import "./Card.css";

const Card = ({ add }) => {

    const { name, price, image, description, number, email, condition, location, purchase, status, advertise } = add;
    return (
        <div>
            {
                status !== "available" ?
                    <>
                    </>
                    :
                    <>
                        <div className="card lg:card-side bg-base-100 shadow-xl">


                            <div className='lg:w-2/4'>
                                <figure><img className='lg:w-full w-96 rounded lg:h-96 h-96 ' src={image} alt="Album" /></figure>
                            </div>
                            <div className=' lg:pl-20'>
                                <div className="card-body ">
                                    <div className='flex justify-between'>
                                        <h2 className="card-title">{name}</h2>
                                        <h2 className="py-2 px-5 bg-lime-100 font-bold border rounded-xl hover:scale-110 duration-300 style"> {status}</h2>
                                    </div>
                                    <p className='text-xl font-semibold'>{description}</p>

                                    <div className=' lg:flex justify-between '>
                                        <h1 className='text-xl font-semibold lg:pr-16'>Price: {price} $</h1>
                                        <h1 className='text-xl font-semibold'>Condition : {condition}</h1>
                                    </div>
                                    <h1 className='text-xl font-semibold'>Purchase of year : {purchase} </h1>
                                    <h1 className='text-xl font-semibold'>Location : {location}</h1>
                                    <h1 className='text-xl font-semibold'>Mobile Number : {number}</h1>
                                    <h1 className='text-xl font-semibold'>Email: {email}</h1>
                                </div>
                            </div>


                            {/* <div class="styleCard">
                                <div class="image">
                                    <img src={image} alt='' />
                                </div>
                                <div class="details">
                                    <div class="center">
                                        <h1>Product Name:{name}<br /><span>Condition : {condition}</span></h1>
                                        <p>{description}</p>
                                        <p>Purchase of year : {purchase}</p>
                                        <p>Location : {location}</p>
                                        <p>Mobile Number : {number}</p>
                                        <p>Email: {email}</p>
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}


                        </div>

                    </>
            }
        </div>
    );
};

export default Card;



