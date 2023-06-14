import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import { Route, Routes } from 'react-router-dom'
import OrderStatus from './OrderStatus'
import RefundOrder from './RefundOrder'
import Category from './Category'
import Products from './Products'
import SubCategory from './SubCategory'
import AddProducts from './AddProducts'
import Breadcrumbs from '../Components/Breadcrumbs'

const Home = () => {
    return (
        <>
        <div className='w-full h-screen overflow-hidden overflow-y-auto'>
            <Navbar />
            <Breadcrumbs />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/OrderStatus" element={<OrderStatus />} />
                <Route path="/RefundOrder" element={<RefundOrder />} />
                <Route path="/Category" element={<Category />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/SubCategory" element={<SubCategory />} />
                <Route path="/products/addproducts" element={<AddProducts />} />
            </Routes>
        </div>
    </>
  )
}

export default Home