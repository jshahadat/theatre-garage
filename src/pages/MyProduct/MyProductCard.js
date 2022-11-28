import React from 'react';
import toast from 'react-hot-toast';
import '../Sheared/Style/Style.css'

const MyProductCard = ({ myProduct, handleDeleteProducts }) => {

    const { _id, email, resaleprice, originalPrice, condition, number, location, img, description, purchase, status, productName } = myProduct;
    console.log(status);

    const handleStatuss = id => {
        fetch(`https://assignment-twelfth-server.vercel.app/dashboard/myproduct/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Status change  successfully.')
                    // refetch();
                }
            })
    }

    const handleAdvertise = id => {
        fetch(`https://assignment-twelfth-server.vercel.app/dashboard/advertise/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Status change  successfully.')
                    // refetch();
                }
            })
    }


    return (

        <div className='pb-10'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-96 h-full' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title">{productName}</h2>
                        <h2 onClick={() => handleStatuss(_id)} className="py-2 px-5 bg-lime-100 font-bold border rounded-xl hover:scale-110 duration-300 style"> {status}</h2>
                    </div>
                    <p>{description}</p>
                    <h1>Resale Price: {resaleprice} $</h1>
                    <h1>Condition : {condition}</h1>
                    <h1>Original Price : {originalPrice}</h1>
                    <h1>Purchase of year : {purchase} </h1>
                    <h1>Location : {location}</h1>
                    <h1>Mobile Number : {number}</h1>
                    <h1>Email: {email}</h1>
                    <div className="card-actions justify-between">
                        <div>
                            <button onClick={() => handleDeleteProducts(_id)} className="btn btn-outline btn-warning">Delete</button>
                        </div>
                        <div>
                            {
                                status !== "available" ?
                                    <>
                                        <button disabled onClick={() => handleAdvertise(_id)} className="btn btn-primary">Advertise</button>
                                    </>
                                    :
                                    <>
                                        <button onClick={() => handleAdvertise(_id)} className="btn btn-primary">Advertise</button>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;