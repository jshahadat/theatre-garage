import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import ProductCard from './ProductCard/ProductCard';

const Products = () => {

    const { categoryName, products } = useLoaderData();
    const [treatment, setTreatment] = useState(null);

    return (
        <div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-20 ml-5 lg:mr-20 mr-5'>
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
        </div>
    );
};

export default Products;