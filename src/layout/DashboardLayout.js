import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../pages/Sheared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isBuyer] = useBuyer(user?.email);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side lg:pl-20 lg:pr-20 ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/"></Link></li>
                        {
                            isBuyer && <>
                                <li><Link to="/dashboard/myorders">My Orders</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li className='border border-orange-800 rounded font-bold text-xl mb-5 bg-red-300'><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                                <li className='border border-orange-800 rounded font-bold text-xl mb-5 bg-orange-300  '><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;