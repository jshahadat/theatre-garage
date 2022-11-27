import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ category }) => {


    // console.log(category);

    // const { _id, categoryName } = category;
    // const [categoryProducts, setCategoryroducts] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/categories?categoryName=${categoryName}`, {
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setCategoryroducts(data))
    // }, [categoryName])




    return (

        <div>
            <div>
                <Link to={`/categories/${category._id}`}>
                    <div
                        className="flex text-center items-center pt-8 btn-outline btn-primary h-24  card card-compact lg:w-80 w-96bg-base-100 shadow-xl">
                        <h1 className='text-4xl font-extrabold'> MIcrobus </h1>
                    </div>
                </Link>
            </div>

            <div>
                {/* {
                    categoryProducts.map(categoryProduct => <ProductCategory
                        key={categoryProduct._id}
                        categoryProduct={categoryProduct}
                    ></ProductCategory>)
                } */}
            </div>

        </div>
    );
};

export default Categories;


// style={{
//     background: `url(${micro})`
// }}