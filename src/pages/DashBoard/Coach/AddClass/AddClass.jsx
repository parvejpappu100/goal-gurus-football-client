import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {

    const { user } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const img_hosting_Url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const onSubmit = data => {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        fetch(img_hosting_Url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const newClass = { name: data.name, image: imgURL, price: data.price, available_seats: data.seat, enrolled_students: 0, coach: user.displayName, email: user.email , status: "Pending"};
                    fetch("http://localhost:5000/classes", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(newClass)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire(
                                    'Good job!',
                                    'Class added successfully!',
                                    'success'
                                )
                            }
                        })
                }
            })
    }

    return (
        <div className='md:container mx-auto'>
            <Helmet>
                <title>Add Class | Dashboard</title>
            </Helmet>
            <div className="md:container mx-auto md:my-20 py-10 px-10 md:px-20 bg-[#F5E1DA] rounded-xl">
                <h3 className="text-center text-4xl font-semibold">Add New Class</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='my-10'>
                    <div className="md:flex flex-col">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Name*</span>
                            </label>
                            <input type="text" name="name" {...register("name", { required: true })} placeholder="Enter class name" className="px-4 py-2 text-xl" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                            <label className="label">
                                <span className="label-text text-xl font-medium">Coach Name</span>
                            </label>
                            <input readOnly type="text" defaultValue={user.displayName} name="coachName" placeholder="Coach name" className="px-4 py-2 text-xl" />
                            <label className="label">
                                <span className="label-text text-xl font-medium">Email</span>
                            </label>
                            <input type="text" defaultValue={user.email} name="email" placeholder="email" required className="px-4 py-2 text-xl" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Price*</span>
                            </label>
                            <input type="text" {...register("price", { required: true })} name="price" placeholder="price" className="px-4 py-2 text-xl" />
                            {errors.price && <span className='text-red-600'>Price is required</span>}
                            <label className="label">
                                <span className="label-text text-xl font-medium">Available Seat*</span>
                            </label>
                            <input type="text" name="seat" {...register("seat", { required: true })} placeholder="Available seat" className="px-4 py-2 text-xl" />
                            {errors.seat && <span className='text-red-600'>Available seat is required</span>}
                            <label className="label">
                                <span className="label-text text-xl font-medium">Photo*</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full" />
                            {errors.image && <span className='text-red-600'>Image is required</span>}
                        </div>
                    </div>
                    <input type="submit" value="Add Class" className="bg-black text-white bg-opacity-70 text-center w-full my-5 py-2  font-medium text-xl" />
                </form>
            </div>
        </div>
    );
};

export default AddClass;