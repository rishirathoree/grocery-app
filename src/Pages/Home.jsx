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
import UploadInventoryImages from './UploadInventoryImages'
import Users from './Users'
import InventoryStockManagement from './InventoryStockManagement'
import OrderDetails from './OrderDetails'
import OutStockVariant from './OutStockVariant'
import BulkImportExport from './BulkImportExport'
import Coupons from './Coupons'
import AddNewCoupon from './AddNewCoupon'
import ReferEarn from './ReferEarn'
import AlertMessage from './AlertMessage'
import MakeNotification from './MakeNotification'
import SoldItemReport from './SoldItemReport'
import DailyOrder from './DailyOrder'


const Home = () => {
    return (
        <>
        <div className='w-full h-screen overflow-hidden overflow-y-auto'>
            <Navbar />
            <Breadcrumbs />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Orders" element={<OrderStatus />} />
                <Route path="/RefundOrder" element={<RefundOrder />} />
                <Route path="/Category" element={<Category />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/SubCategory" element={<SubCategory />} />
                <Route path="/products/addproducts" element={<AddProducts />} />
                <Route path="/upload-inventory-images" element={<UploadInventoryImages />} />
                <Route path="/inventory-stock-settings" element={<InventoryStockManagement />} />
                <Route path="/Orders/OrderDetails" element={<OrderDetails />} />
                <Route path="/OutStockVariant" element={<OutStockVariant />} />
                <Route path="/bulk-import-export" element={<BulkImportExport />} />
                <Route path="/discounts" element={<Coupons />} />
                <Route path="/discounts/addEdit" element={<AddNewCoupon />} />
                <Route path="/ReferAndEarn" element={<ReferEarn />} />
                <Route path="/alert_messages" element={<AlertMessage />} />
                <Route path="/alert_messages" element={<AlertMessage />} />
                <Route path="/alert_messages/push-notification" element={<MakeNotification />} />
                <Route path="/SoldItemReport" element={<SoldItemReport />} />
                <Route path="/DailyOrder" element={<DailyOrder />} />
                
            </Routes>
        </div>
    </>
  )
}

export default Home