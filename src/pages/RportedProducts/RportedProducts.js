import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import RportedProductsCard from './RportedProductsCard';

const RportedProducts = () => {

    const [reportedProducts, setReportedProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/repotedproducts?reported=yes", {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setReportedProducts(data))
    }, [])


    const handleDeleteProducts = id => {
        const proceed = window.confirm('Are you confirm?');
        if (proceed) {

            fetch(`http://localhost:5000/product/${id}`, {

                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('Deleted successfully');
                        const remaining = reportedProducts.filter(odr => odr._id !== id);
                        setReportedProducts(remaining);
                    }
                })
        }
    }


    return (
        <div className='lg:mt-20 mt-10 lg:mr-20 mr-5 ml-5  '>
            <div >
                {
                    reportedProducts.map(reportedProduct => <RportedProductsCard
                        key={reportedProduct}
                        reportedProduct={reportedProduct}
                        handleDeleteProducts={handleDeleteProducts}
                    ></RportedProductsCard>)
                }

            </div>

        </div>
    );
};

export default RportedProducts;