import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import AllSellers from '../AllSellers/AllSellers/AllSellers';
import Loading from '../Sheared/Loading/Loading';

const AllUser = () => {






    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });




    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            {
                users.map(user => <AllSellers
                    key={user._id}
                    user={user}

                ></AllSellers>)
            }

        </div>
    );
};

export default AllUser;