import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';

const AddVertiseProductCard = ({ allproduct }) => {

    const { name, price, image, description, number, email, condition, location, purchase, status, advertise } = allproduct;



    const [advertiseProduct, setAdvertiseProduct] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/advertiseproduct?advertise=${advertise}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setAdvertiseProduct(data))
    }, [advertise])


    return (
        <div >
            {/* <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className='lg:w-2/4'>
                    <figure><img className='lg:w-full w-96-  lg:h-96 h-96 ' src={image} alt="Album" /></figure>
                </div>
                <div className=' lg:pl-20'>
                    <div className="card-body ">
                        <h2 className="card-title font-bold text-2xl">Product Name : {name}</h2>
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
            </div> */}

            {
                advertiseProduct.map(add => <Card
                    key={add._id}
                    add={add}
                ></Card>)
            }
        </div>
    );
};

export default AddVertiseProductCard;