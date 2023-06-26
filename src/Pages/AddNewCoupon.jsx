import React, { useState } from 'react'
import Select from 'react-select'
const AddNewCoupon = () => {
  const [usagePerCustomer,setUsagePerCustomer] = useState('')
  const couponType = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const OrderFacilities = [
    { value: 'Both', label: 'Both' },
    { value: 'Pickup', label: 'Pickup' },
    { value: 'Delivery', label: 'Delivery' }
  ]
  const selectPaymentMethod = [
    { value: 'UPI', label: 'UPI' },
    { value: 'COD', label: 'COD' },
    { value: 'Online Payment', label: 'Online Payment' }
  ]
  return (
    <>
    <div className='p-4 space-y-6'>

    <div className='ring-1 rounded-lg ring-black/5'>
        <p className='font-semibold text-xsm p-2 bg-gray-100'>Select Your Coupon Type</p>
        <label htmlFor="couponType" className=''>
        <div className='p-4 space-y-2'>
        <p className='font-semibold text-xsm'>Coupon Type*</p>
        <Select className='lg:w-1/2 md:w-1/2 sm:w-full ' options={couponType} />
        </div>
        </label>
      </div>

      <div className='ring-1 rounded-lg ring-black/5'>

        <p className='font-semibold text-xsm p-2 bg-gray-100'>Offers Information</p>
        <div className='flex lg:flex-row md:flex-col sm:flex-col items-center justify-between'>
        <label htmlFor="couponType" className='w-full'>
        <div className='p-4 space-y-2'>
        <p className='font-semibold text-xsm'>Offer Name*</p>
        <input type="text" className='w-full p-2 bg-gray-50 duration-500 hover:ring-1 hover:ring-[#7bff95] focus:outline-none outline-none rounded' />
        </div>
        </label>
        <label htmlFor="couponType" className='w-full'>
        <div className='p-4 space-y-2'>
        <p className='font-semibold text-xsm'>Coupon Code*</p>
        <input type="text" className='w-full p-2 bg-gray-50 duration-500 hover:ring-1 hover:ring-[#7bff95] focus:outline-none outline-none rounded' />
        </div>
        </label>
        <label htmlFor="couponType" className='w-full'>
        <div className='p-4 space-y-2'>
        <p className='font-semibold text-xsm'>Discount (%)*</p>
        <input type="text" className='w-full p-2 bg-gray-50 duration-500 hover:ring-1 hover:ring-[#7bff95] focus:outline-none outline-none rounded' />
        </div>
        </label>
        <label htmlFor="couponType" className='w-full'>
        <div className='p-4 space-y-2'>
        <p className='font-semibold text-xsm'>Discounted Amount Upto *</p>
        <input type="text" className='w-full p-2 bg-gray-50 duration-500 hover:ring-1 hover:ring-[#7bff95] focus:outline-none outline-none rounded' />
        </div>
        </label>
        </div>

      </div>

      <div className='ring-1 rounded-lg ring-black/5'>
        
        <p className='font-semibold text-xsm p-2 bg-gray-100'>Offers Validation</p>
        <div className='flex w-full items-center justify-between'>
        <label htmlFor="couponType" className='w-full'>
        <div className='p-4 space-y-2'>
        <p className='font-semibold text-xsm'>Minimum Order Amount*</p>
        <input type="number" className='w-full p-2 bg-gray-50 duration-500 hover:ring-1 hover:ring-[#7bff95] focus:outline-none outline-none rounded' />
        </div>
        </label>

        <label htmlFor="couponType" className='w-full'>
        <div className='p-4 space-y-2'>
        <p className='font-semibold text-xsm'>Usage Per Customer</p>
        <div className='flex rounded-lg overflow-hidden items-center justify-between text-center'>
        <span onClick={()=>{setUsagePerCustomer('Nolimit')}} className={`w-full duration-500 font-semibold text-xsm bg-[#7bff95] p-2 ${usagePerCustomer === 'Nolimit' ? 'ring-1 ring-black/5 bg-[#59be6d] text-white' : ''}`}>No Limit</span>
        <span onClick={()=>{setUsagePerCustomer('limit')}} className={`w-full duration-500 font-semibold text-xsm bg-[#7bff95] p-2 ${usagePerCustomer === 'limit' ? 'ring-1 ring-black/5  bg-[#59be6d] text-white' : ''}`}>Limit</span>
        </div>
        </div>
        </label>
        </div>

      </div>

      <div className='ring-1 rounded-lg ring-black/5'>

        <p className='font-semibold text-xsm p-2 bg-gray-100'>Offers Information</p>
        <div className='flex items-center justify-between w-full'>
        <label htmlFor="couponType" className='w-full'>
        <div className='p-4 space-y-2'>
        <p className='font-semibold text-xsm'>Date From*</p>
        <input type="date" className='w-full p-2 bg-gray-50 duration-500 hover:ring-1 hover:ring-[#7bff95] focus:outline-none outline-none rounded' />
        </div>
        </label>
        <label htmlFor="couponType" className='w-full'>
        <div className='p-4 space-y-2'>
        <p className='font-semibold text-xsm'>Coupon Code*</p>
        <input type="date" className='w-full p-2 bg-gray-50 duration-500 hover:ring-1 hover:ring-[#7bff95] focus:outline-none outline-none rounded' />
        </div>
        </label>
        </div>

      </div>

      <div className='ring-1 rounded-lg ring-black/5'>
        <p className='font-semibold text-xsm p-2 bg-gray-100'>Select Your Coupon Type</p>
        <div className='flex items-center'>
        <label htmlFor="couponType" className='w-full'>
        <div className='p-4 space-y-2'>
        <p className='font-semibold text-xsm'>Coupon Type*</p>
        <Select className='w-full ' options={OrderFacilities} />
        </div>
        </label>

        <label htmlFor="couponType" className='w-full'>
        <div className='p-4 space-y-2'>
        <p className='font-semibold text-xsm'>Coupon Type*</p>
        <Select className='w-full' options={selectPaymentMethod} />
        </div>
        </label>
        </div>
      </div>

      <div className='ring-1 rounded-lg ring-black/5'>
        <p className='font-semibold text-xsm p-2 bg-gray-100'>Offer Term & Conditions</p>
        <label htmlFor="couponType" className=''>
        <div className='p-4 space-y-2'>
        <p className='font-semibold text-xsm'>Term & Conditions Text</p>
        <textarea className='resize-none w-full h-80 bg-gray-50 outline-none focus:outline-none focus:ring-1 duration-500 focus:shadow-md focus:ring-black/50'></textarea>
        </div>
        </label>
      </div>

      <div className='flex items-end justify-end gap-2'>
        <button className='px-6 py-3 rounded hover:bg-[#72f18c] duration-200 hover:scale-105 bg-[#7bff95] text-xsm font-semibold text-black'>Submit</button>
        <button className='px-6 py-3 rounded bg-slate-500 text-xsm font-semibold text-white'>Cancel</button>
      </div>
      


    </div>
    </>
  )
}

export default AddNewCoupon