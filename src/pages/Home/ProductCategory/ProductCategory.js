import React from 'react';

const ProductCategory = ({ categoryProduct }) => {
    console.log(categoryProduct);
    return (
        <div>
            <p>{categoryProduct.categoryName}</p>
            <p>g</p>

        </div>
    );
};

export default ProductCategory;