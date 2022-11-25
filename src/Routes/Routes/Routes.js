import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../pages/Sheared/ErrorPage/ErrorPage";
import Home from '../../pages/Home/Home/Home'
import Register from "../../pages/Authintication/Register/Register";
import Login from "../../pages/Authintication/Login/Login";
import Blog from "../../pages/Blog/Blog";
import Product from "../../pages/Home/Product/Product";
import AddAProduct from "../../pages/AddAProduct/AddAProduct";
import MyProduct from "../../pages/MyProduct/MyProduct";
import DashboardLayout from "../../layout/DashboardLayout";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import AllSellers from "../../pages/AllSellers/AllSellers/AllSellers";
import AllUser from "../../pages/AllUser/AllUser";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: ' /category/:id',
                element: <Product></Product>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddAProduct></AddAProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
        ]

    }
])