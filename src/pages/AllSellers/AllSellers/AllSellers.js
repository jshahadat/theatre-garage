import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import AllSellersTable from '../AllSellersTable/AllSellersTable';

const AllSellers = ({ user }) => {

    const [seller, setSeller] = useState([])
    const [allSellers, setAllSellers] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/allsellers?role=Seller", {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllSellers(data))
    }, [user?.role])



    const handleDeleteSeller = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {

            fetch(`http://localhost:5000/allseller/${id}`, {

                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('Deleted successfully');
                        const remaining = seller.filter(odr => odr._id !== id);
                        setSeller(remaining);
                    }
                })
        }
    }



    return (
        // <div>
        //     {
        //         allSellers.map((allSeller, i) => <AllSellersTable
        //             key={allSeller._id}
        //             allSeller={allSeller}
        //         ></AllSellersTable>)
        //     }
        // </div>
        <div className='pr-5 lg:pr-20 pl-5'>
            <h2 className="text-3xl mt-10 mb-10">All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers.map((allSeller, i) => <tr key={allSeller._id}>
                                <th>{i + 1}</th>
                                <td>{allSeller.name}</td>
                                <td>{allSeller.email}</td>
                                <td><button className='btn btn-xs btn-primary'>Make Admin</button></td>
                                <td><button onClick={() => handleDeleteSeller(allSeller._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;