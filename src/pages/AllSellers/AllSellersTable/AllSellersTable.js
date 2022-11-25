import React from 'react';

const AllSellersTable = ({ allSeller }) => {
    const { email, name } = allSeller
    return (
        <div>
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th></th>

                        <th>Email</th>
                        <th>name</th>
                        <th>Vue</th>
                    </tr>
                </thead>
                {/* <tbody>

                    <tr>
                        <th>1</th>
                        <td>relational</td>
                        <td>non-relational</td>
                        <td>non-relational</td>
                    </tr>

                </tbody> */}
            </table>
        </div>
    );
};

export default AllSellersTable;