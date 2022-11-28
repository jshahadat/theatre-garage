import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const AddAProduct = () => {


    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();



    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        categoryName: data.category,
                        productName: data.name,
                        email: user?.email,
                        resaleprice: data.resaleprice,
                        originalPrice: data.originalPrice,
                        condition: data.condition,
                        number: data.number,
                        purchase: data.purchase,
                        location: data.location,
                        description: data.description,
                        status: "available",
                        img: imgData.data.url
                    }


                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);

                            navigate('/dashboard/myproducts')
                        })
                }
            })
    }







    return (
        <div className='p-7 flex flex-col justify-center items-center bg-gray-100 '>
            <h2 className="text-4xl mb-5">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Category</span></label>
                    <select
                        {...register('category')}
                        className="select select-bordered w-full max-w-xs">
                        <option>Tesla</option>
                        <option>Ferrari</option>
                        <option>Ford</option>
                    </select>
                    {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Product Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input type="text" {...register("resaleprice", {
                        required: "resaleprice is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.resaleprice && <p className='text-red-500'>{errors.resaleprice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="text" {...register("originalPrice", {
                        required: "originalPrice is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition Type</span></label>
                    <select
                        {...register('condition')}
                        className="select select-bordered w-full max-w-xs">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option> Fair</option>
                    </select>
                    {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Phone Number</span></label>
                    <input type="text" {...register("number", {
                        required: "Phone number  is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "Location is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text"> Year of purchase</span></label>
                    <input type="text" {...register("purchase", {
                        required: "Purchase is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.purchase && <p className='text-red-500'>{errors.purchase.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text"> Description</span></label>
                    <input type="text" {...register("description", {
                        required: "description is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn font-bold text-white btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;