import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ category }) => {

    return (

        <div>
            <div className=''>
                <Link to={`/categories/${category._id}`}>

                    <div className='mx-auto'>
                        <div className="card card-compact lg:w-80 w-96 bg-base-100 shadow-xl">
                            <figure><img src={category.image_url} alt="" className='h-52 w-full rounded' /></figure>


                        </div>
                    </div>
                </Link>
            </div>


        </div>
    );
};

export default Categories;






