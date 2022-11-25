import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AddVertiseProductCard from '../AddVertiseProductCard/AddVertiseProductCard';

const AdvertiseProduct = () => {



    const { data: advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise');
            const data = await res.json();
            return data;
        }
    });


    return (
        <div className='mt-10 mb-10 lg:ml-20 ml-5 lg:mr-20 mr-5'>

            {
                advertise.map(addproduct => <AddVertiseProductCard
                    key={addproduct._id}
                    addproduct={addproduct}
                ></AddVertiseProductCard>)
            }

        </div>
    );
};

export default AdvertiseProduct;