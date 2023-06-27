import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

const ManageCities = () => {
  const paginationOptions = [
    {label:20,value:20},
    {label:50,value:50},
    {label:100,value:100},
    {label:200,value:200},
]
  return (
    <div className='p-4'>
      <div className='p-4 shadowCustom rounded-lg space-y-6'>
            <Select placeholder='Select City' className='lg:w-max md:w-max sm:w-max' options={paginationOptions} />
            <div className='grid lg:grid-cols-3 gap-4'>
            <Link to="/Delivery-Areas"><button className='bg-[#7bff95] w-full text-xsm font-semibold p-3'>Go to Delivery Areas</button></Link>
            <Link to="/Delivery-Areas/ManageCities/AddCities"><button className='bg-[#7bff95] w-full text-xsm font-semibold p-3'>Add Cities</button></Link>
            </div>      
            <div className='grid lg:grid-cols-3 gap-4'>
        <label htmlFor="Zone" className='w-full'>
                <p className='font-semibold text-xsm'>Zone</p>
                <input type="text" className='p-2 ring-1 ring-black/5 rounded bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        <label htmlFor="Pickup Address" className='w-full'>
                <p className='font-semibold text-xsm'>Pickup Address</p>
                <input type="text" className='p-2 ring-1 ring-black/5 rounded bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        <label htmlFor="Pickup Phone" className='w-full'>
                <p className='font-semibold text-xsm'>Pickup Phone</p>
                <input type="text" className='p-2 ring-1 ring-black/5 rounded bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        <label htmlFor="Pickup Email" className='w-full'>
                <p className='font-semibold text-xsm'>Pickup Email</p>
                <input type="text" className='p-2 ring-1 ring-black/5 rounded bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        <label htmlFor="Pickup Latitude" className='w-full'>
                <p className='font-semibold text-xsm'>Pickup Latitude</p>
                <input type="text" className='p-2 ring-1 ring-black/5 rounded bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        <label htmlFor="Pickup Longitude" className='w-full'>
                <p className='font-semibold text-xsm'>Pickup Longitude</p>
                <input type="text" className='p-2 ring-1 ring-black/5 rounded bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>

        <label htmlFor="Minimum Amount" className='w-full'>
                <p className='font-semibold text-xsm'>Minimum Amount</p>
                <input type="text" className='p-2 ring-1 ring-black/5 rounded bg-gray-50 w-full outline-none focus:outline-none'/>
        </label>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full'>
            <label htmlFor="Auto-fill" className='w-full flex items-center gap-4'>
                <input type="radio" className=''/>
                <p className='font-semibold text-xsm'>Auto-fill</p>
        </label>
        <label htmlFor="Do not allow customers to place order below min order amount" className='w-full flex items-center gap-4'>
                <input type="radio" className=''/>
                <p className='font-semibold text-xsm'>Do not allow customers to place order below min order amount</p>
        </label>
            </div>

            <div>
            <textarea className='h-80 w-full focus:outline-none outline-none ring-1 ring-black/5 rounded bg-gray-50 p-2 font-medium text-xsm'></textarea>
        </div>

        <div className='flex justify-end gap-2'>
        <button className='bg-[#7bff95] text-xsm font-semibold rounded p-2'>Save</button>
        <button className='bg-[#7bff95] text-xsm font-semibold rounded p-2'>Close</button>
        </div>

      </div>
    </div>
  )
}

export default ManageCities