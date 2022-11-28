import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css'

const Categories = ({ category }) => {
    console.log(category);


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
            <div className=''>
                <Link to={`/categories/${category._id}`}>

                    <div className='mx-auto'>
                        <div className="card card-compact lg:w-80 w-96bg-base-100 shadow-xl">


                            <figure><img src={category.image_url} alt="" className='h-52 w-full rounded' /></figure>

                            {/* <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{price} ৳</p>
                    <p className='text-justify'>
                        {
                            description?.length > 100 ?
                                <>{description.slice(0, 100) + '....'} </>
                                :
                                description
                        }

                    </p>
                    <div className="card-actions justify-start">
                        <Link to={`/services/${_id}`} >  <button className="btn btn-outline btn-primary">View details</button></Link>
                    </div>
                </div> */}
                        </div>
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



{/* <div class="categoryWrapper">
<div class="categoryCard">
    <div class="categoryFront">
        <h1 className='categoryH1'>Signature</h1>
        <p className='categoryP'>7.7 deck</p>
        <p class="price categoryP">$ 89.00</p>
    </div>
    <div class="categoryRight">
        <h2 className='categoryH2'>Signature</h2>
        <ul className='categoryUl'>
            <li className='categoryLi'>Width	7.7"</li>
            <li className='categoryLi'>Length	31.75"</li>
            <li className='categoryLi'>Wheelbase	14"</li>
            <li className='categoryLi'>Nose	6.875"</li>
            <li className='categoryLi'>Tail	6.25"</li>
        </ul>
        <button className='categoryButton'>Add to cart, yo</button>
    </div>
</div>
<div class="img-wrapper">
    <img className='categoryImg' src={category.image_url} alt='' />
</div>
</div> */}