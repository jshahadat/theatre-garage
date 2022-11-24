import React from 'react';
import toast from 'react-hot-toast';

const MyProductCard = ({ myProduct, handleDeleteProducts }) => {

    const { _id, name, email, price, condition, number, location, image, description, purchase, status } = myProduct;

    const handleAdvertise = event => {
        const booking = {
            name,
            email,
            number,
            price
        }
        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                }
                else {
                    toast.error(data.message);
                }
            })


    }


    return (

        <div className='pb-10'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-96 h-96' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title">{name}</h2>
                        <h2 className="py-2 px-5 bg-slate-300 border rounded-xl hover:scale-110 duration-300"> {status}</h2>
                    </div>
                    <p>{description}</p>
                    <div className='flex justify-between'>
                        <h1>Price: {price} $</h1>
                        <h1>Condition : {condition}</h1>
                    </div>
                    <h1>Purchase of year : {purchase} </h1>
                    <h1>Location : {location}</h1>
                    <h1>Mobile Number : {number}</h1>
                    <h1>Email: {email}</h1>
                    <div className="card-actions justify-between">
                        <div>
                            <button onClick={() => handleDeleteProducts(_id)} className="btn btn-outline btn-warning">Delete</button>
                        </div>
                        <div>
                            <button onClick={handleAdvertise} className="btn btn-primary">Advertise</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;