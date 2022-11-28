import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProductsCard from '../../AllProductsCard/AllProductsCard';
import BookingModal from './BookingModal/BookingModal';
import ProductCard from './ProductCard/ProductCard';

const Products = () => {

    const { categoryName, products } = useLoaderData();
    const [bookingProduct, setBookingProduct] = useState(null);

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch(`https://assignment-twelfth-server.vercel.app/allproducts?categoryName=${categoryName}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('acessToken')}`
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
                        setBookingProduct={setBookingProduct}
                    ></ProductCard>)
                }
            </div>

            <div>
                {
                    bookingProduct &&
                    <BookingModal
                        bookingProduct={bookingProduct}
                        setBookingProduct={setBookingProduct}
                    ></BookingModal>
                }
            </div>

            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-20  lg:mr-20 mr-5'>
                {
                    allProducts.map(allProduct => <AllProductsCard
                        key={allProduct._id}
                        allProduct={allProduct}
                        setBookingProduct={setBookingProduct}
                    ></AllProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;