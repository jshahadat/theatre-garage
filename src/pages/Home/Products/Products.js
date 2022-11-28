import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProductsCard from '../../AllProductsCard/AllProductsCard';
import BookingModal from './BookingModal/BookingModal';
import ProductCard from './ProductCard/ProductCard';

const Products = () => {

    const { categoryName, products } = useLoaderData();
    const [treatment, setTreatment] = useState(null);

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allproducts?categoryName=${categoryName}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [categoryName])

    return (
        <div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-20  lg:mr-20 mr-5'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setTreatment={setTreatment}
                    ></ProductCard>)
                }
            </div>

            <div>
                {
                    treatment &&
                    <BookingModal
                        treatment={treatment}
                        setTreatment={setTreatment}
                    ></BookingModal>
                }
            </div>

            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-20  lg:mr-20 mr-5'>
                {
                    allProducts.map(allProduct => <AllProductsCard
                        key={allProduct._id}
                        allProduct={allProduct}
                        setTreatment={setTreatment}
                    ></AllProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;