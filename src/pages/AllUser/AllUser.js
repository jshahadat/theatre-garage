import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllSellers from '../AllSellers/AllSellers/AllSellers';

const AllUser = () => {


    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

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