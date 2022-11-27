import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Sheared/Loading/Loading'
import Categories from './Categories';

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
            {
                categories.map(category => <Categories
                    key={category._id}
                    category={category}
                ></Categories>)
            }

        </div >
    );
};

export default ProductCategories;