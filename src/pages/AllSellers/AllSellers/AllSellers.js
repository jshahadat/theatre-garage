import React, { useEffect, useState } from 'react';

const AllSellers = ({ user }) => {


    console.log(user);


    const [allSellers, setAllSellers] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/allsellers?role=${user?.role}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllSellers(data))
    }, [user?.role])



    return (
        <div>
            {
                allSellers.map((allSeller, i) => <tr key={allSeller._id}>
                    <th>{i + 1}</th>
                    <td>{allSeller.name}</td>
                    <td>{allSeller.email}</td>
                </tr>)
            }


        </div>
    );
};

export default AllSellers;