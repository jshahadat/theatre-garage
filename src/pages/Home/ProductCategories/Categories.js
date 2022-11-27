import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCategory from '../ProductCategory/ProductCategory';

const Categories = ({ category }) => {
    // console.log(category);

    const { categoryName } = category;


    const [categoryProducts, setCategoryroducts] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/category?categoryName=${categoryName}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setCategoryroducts(data))
    }, [categoryName])




    return (

        <div>

            <div>
                <Link to={`/category/${categoryName}`}>
                    <div

                        className="flex text-center items-center pt-8 btn-outline btn-primary h-24  card card-compact lg:w-80 w-96bg-base-100 shadow-xl">

                        <h1 className='text-4xl font-extrabold'> MIcrobus </h1>
                    </div>
                </Link>
            </div>
            <div>
                {
                    categoryProducts.map(categoryProduct => <ProductCategory
                        key={categoryProduct._id}
                        categoryProduct={categoryProduct}
                    ></ProductCategory>)
                }
            </div>


            {/* <div>
                <div class="flip-card-container" style="--hue: 220">
                    <div class="flip-card">

                        <div class="card-front">
                            <figure>
                                <div class="img-bg"></div>
                                <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
                                <figcaption>Brohm Lake</figcaption>
                            </figure>

                            <ul>
                                <li>Detail 1</li>
                                <li>Detail 2</li>
                                <li>Detail 3</li>
                                <li>Detail 4</li>
                                <li>Detail 5</li>
                            </ul>
                        </div>

                        <div class="card-back">
                            <figure>
                                <div class="img-bg"></div>
                                <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
                            </figure>

                            <button>Book</button>

                            <div class="design-container">
                                <span class="design design--1"></span>
                                <span class="design design--2"></span>
                                <span class="design design--3"></span>
                                <span class="design design--4"></span>
                                <span class="design design--5"></span>
                                <span class="design design--6"></span>
                                <span class="design design--7"></span>
                                <span class="design design--8"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}



        </div>
    );
};

export default Categories;


// style={{
//     background: `url(${micro})`
// }}