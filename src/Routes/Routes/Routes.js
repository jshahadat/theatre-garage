import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../pages/Sheared/ErrorPage/ErrorPage";
import Home from '../../pages/Home/Home/Home'
import Register from "../../pages/Authintication/Register/Register";
import Login from "../../pages/Authintication/Login/Login";
import Blog from "../../pages/Blog/Blog";
import AddAProduct from "../../pages/AddAProduct/AddAProduct";
import MyProduct from "../../pages/MyProduct/MyProduct";
import DashboardLayout from "../../layout/DashboardLayout";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import AllSellers from "../../pages/AllSellers/AllSellers/AllSellers";
import AllBuyer from "../../pages/AllSellers/AllBuyer/AllBuyer";
import Products from "../../pages/Home/Products/Products";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import MyOrders from "../../pages/MyOrders/MyOrders/MyOrders";
import Payment from "../../pages/Payment/Payment";
import AdminRoute from "../AdminRoute/AdminRoute";
import RportedProducts from "../../pages/RportedProducts/RportedProducts";

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
                path: '/categories/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-twelfth-server.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <PrivateRoute><AddAProduct></AddAProduct></PrivateRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><PrivateRoute><AllSellers></AllSellers></PrivateRoute></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><PrivateRoute><AllBuyer></AllBuyer></PrivateRoute></AdminRoute>
            },
            {
                path: '/dashboard/reportedproducts',
                element: <AdminRoute><PrivateRoute><RportedProducts></RportedProducts></PrivateRoute></AdminRoute>
            },
            {
                path: '/dashboard/myorders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-twelfth-server.vercel.app/orders/${params.id}`)
            },
        ]

    }
])