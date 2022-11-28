import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';

const AddVertiseProductCard = ({ allproduct }) => {
    console.log(allproduct);

    const { advertise } = allproduct;
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