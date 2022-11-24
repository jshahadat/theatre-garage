import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProduct = () => {

    const { user } = useContext(AuthContext);

    const [myProducts, setMyProducts] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/myproducts?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [user?.email])



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
                        const remaining = myProducts.filter(odr => odr._id !== id);
                        setMyProducts(remaining);
                    }
                })
        }
    }





    return (
        <div>
            <div className='lg:mr-20'>

                {
                    myProducts.map(myProduct => <MyProductCard
                        key={myProduct._id}
                        myProduct={myProduct}
                        handleDeleteProducts={handleDeleteProducts}

                    ></MyProductCard>)
                }
            </div>
        </div>
    );
};

export default MyProduct;