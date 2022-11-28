import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Sheared/Loading/Loading'
import Categories from './Categories';
import './ProductCategories.css'

const ProductCategories = () => {

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='bg lg:text-4xl text-3xl pb-5 font-bold text-yellow-100 lg:pl-20 pl-5 lg:pr-20 lg:pt-14 pt-6'>Select Your Category</h1>
            <div className='bg grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:pl-20 pl-5 lg:pr-20 lg:pt-10 lg:pb-20 pb-10 pr-5 rounded'>

                {
                    categories.map(category => <Categories
                        key={category._id}
                        category={category}
                    ></Categories>)
                }

            </div >
        </div>
    );
};

export default ProductCategories;