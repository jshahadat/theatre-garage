import React from 'react';
import toast from 'react-hot-toast';
const Card = ({ add }) => {
    console.log(add);

    const { _id, productNameame, price, img, description, number, email, condition, location, purchase, status } = add;


    const handleReportStatus = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            fetch(`http://localhost:5000/adertiseproduct/${id}`, {
                method: 'PUT',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Report This Item  successfully.')
                        // refetch();
                    }
                })
        }

    }



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
                                <figure><img className='lg:w-full w-96 rounded lg:h-96 h-96 ' src={img} alt="Album" /></figure>
                            </div>
                            <div className=' lg:pl-20'>
                                <div className="card-body ">

                                    <div className='flex justify-between'>
                                        <h2 className="card-title">{productNameame}</h2>
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
                                    <div className='flex justify-between'>
                                        <h1 className='text-xl font-semibold'>Email: {email}</h1>
                                        <div className="dropdown bg-white dropdown-bottom dropdown-end">
                                            <label tabindex="0" className="btn bg-white m-1">⋮</label>
                                            <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <button className='btn btn-ghost bg-red-600'> <li onClick={() => handleReportStatus(_id)}>Report This Item</li></button>

                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
            }
        </div>
    );
};

export default Card;



