import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
const DeliveryAreas = () => {
    const paginationOptions = [
        {label:20,value:20},
        {label:50,value:50},
        {label:100,value:100},
        {label:200,value:200},
    ]
  return (
    <>
    <div className='p-4'>
        <div className='space-y-6 rounded-lg shadowCustom p-2'>

            <div className='space-y-6'>
            <Select className='lg:w-max md:w-max sm:w-max' options={paginationOptions} />      
            <div className='grid lg:grid-cols-3 gap-4'>
            <Link to="/Delivery-Areas/AddDeliveryAreas"><button className='bg-[#7bff95] w-full text-xsm font-semibold p-3'>Add Delivery Areas</button></Link>
            <Link to="/Delivery-Areas/AddPickupAddress"><button className='bg-[#7bff95] w-full text-xsm font-semibold p-3'>Add Pickup Address</button></Link>
            <Link to="/Delivery-Areas/ManageCities"><button className='bg-[#7bff95] w-full text-xsm font-semibold p-3'>Manage Cities</button></Link>
            </div>
            </div>


        </div>
    </div>
    </>
  )
}

export default DeliveryAreas