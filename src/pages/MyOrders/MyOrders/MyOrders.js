import React, { useContext, useEffect, useState } from 'react';
import { UNSAFE_DataStaticRouterContext } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {


    const { user } = useContext(AuthContext);

    const [myOrders, setMyOrders] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/myorders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user?.email])


    return (
        <div>
            <div className='pr-5 lg:pr-20 pl-5'>
                <h2 className="text-3xl mt-10 mb-10">All Orders</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map((myOrder, i) => <tr key={myOrder._id}>
                                    <th>{i + 1}</th>
                                    <td><img src={myOrder.img} alt="" /></td>
                                    <td>{myOrder.name}</td>
                                    <td>{myOrder.price}$</td>
                                    <td>{myOrder?.role !== 'admin' && <button className='btn btn-xs btn-primary'>Pay Bill</button>}</td>

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyOrders;