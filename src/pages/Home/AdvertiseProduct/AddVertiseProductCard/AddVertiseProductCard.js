import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';

const AddVertiseProductCard = ({ allproduct }) => {
    console.log(allproduct);

    const { advertise } = allproduct;
    const [advertiseProduct, setAdvertiseProduct] = useState([])



    useEffect(() => {
        fetch(`https://assignment-twelfth-server.vercel.app/advertiseproduct?advertise=${advertise}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAdvertiseProduct(data))
    }, [advertise])







    return (
        <div >
            <div>
                {
                    advertiseProduct.map(add => <Card
                        key={add._id}
                        add={add}
                    ></Card>)
                }
            </div>


        </div>
    );
};

export default AddVertiseProductCard;