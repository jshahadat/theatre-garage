import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ category }) => {
    console.log(category);

    const { id } = category
    return (

        <div>

            <Link to={`/category/${id}}`}>
                <div

                    className="flex text-center items-center pt-8 btn-outline btn-primary h-24  card card-compact lg:w-80 w-96bg-base-100 shadow-xl">

                    <h1 className='text-4xl font-extrabold'> MIcrobus </h1>
                </div>
            </Link>
            {/* <Link to={`/category/${category_id}}`} >
                <div className="flex text-center items-center pt-8 btn-outline btn-primary h-24  card card-compact lg:w-80 w-96bg-base-100 shadow-xl">
                    <h1 className='text-2xl font-extrabold'> MIcrobus </h1>
                </div>
            </Link>
            <Link to={`/category/${category_id}}`}>
                <div className="flex text-center items-center pt-8 btn-outline btn-primary h-24  card card-compact lg:w-80 w-96bg-base-100 shadow-xl">
                    <h1 className='text-2xl font-extrabold'> MIcrobus </h1>
                </div>
            </Link> */}
        </div>
    );
};

export default Categories;


// style={{
//     background: `url(${micro})`
// }}