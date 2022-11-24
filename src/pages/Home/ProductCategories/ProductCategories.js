import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import micro from '../../../assets/img/micro.jpg'
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

            {/* <div className='pt-10 pb-10 lg:pl-20 pl-5 lg:text-5xl text-4xl font-bold'>
                <h1>Product Categories</h1>
            </div>

            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-20 ml-5 lg:mr-20 mr-5'>

                <Link to={`/category/}`}>
                    <div
                        style={{
                            background: `url(${micro})`
                        }}
                        className="flex text-center items-center pt-8 btn-outline btn-primary h-24  card card-compact lg:w-80 w-96bg-base-100 shadow-xl">

                        <h1 className='text-4xl font-extrabold'> MIcrobus </h1>
                    </div>
                </Link>
                <Link>
                    <div className="flex text-center items-center pt-8 btn-outline btn-primary h-24  card card-compact lg:w-80 w-96bg-base-100 shadow-xl">
                        <h1 className='text-2xl font-extrabold'> MIcrobus </h1>
                    </div>
                </Link>
                <Link>
                    <div className="flex text-center items-center pt-8 btn-outline btn-primary h-24  card card-compact lg:w-80 w-96bg-base-100 shadow-xl">
                        <h1 className='text-2xl font-extrabold'> MIcrobus </h1>
                    </div>
                </Link>



            </div> */}



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