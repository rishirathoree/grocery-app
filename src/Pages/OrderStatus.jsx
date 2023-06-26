  import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
  import Select from 'react-select'
  const OrderStatus = () => {
    const filterMenuDropdown = ['All','Processing','Due','Delivering','Delivered','Rejected','Cancel']

    const userData = [
      {
        orderID: '12345',
        customerName: 'John Doe',
        address: '123 Main Street',
        totalAmount: '$100.00',
        orderReceivedDate: '2023-06-12',
        slotPeriod: 'Morning',
        orderStatus: 'Delivered',
        paymentStatus: 'Paid',
        paymentMode: 'UPI',
      },
      {
        orderID: '67890',
        customerName: 'Jane Smith',
        address: '456 Elm Avenue',
        totalAmount: '$75.00',
        orderReceivedDate: '2023-06-10',
        slotPeriod: 'Afternoon',
        orderStatus: 'Processing',
        paymentStatus: 'Pending',
        paymentMode: 'Cash on Delivery',
      },
      {
        orderID: '13579',
        customerName: 'Mike Johnson',
        address: '789 Oak Lane',
        totalAmount: '$50.00',
        orderReceivedDate: '2023-06-08',
        slotPeriod: 'Evening',
        orderStatus: 'Due',
        paymentStatus: 'Unpaid',
        paymentMode: 'UPI',
      },
      {
        orderID: '24680',
        customerName: 'Sarah Davis',
        address: '321 Pine Road',
        totalAmount: '$120.00',
        orderReceivedDate: '2023-06-06',
        slotPeriod: 'Morning',
        orderStatus: 'Rejected',
        paymentStatus: 'Paid',
        paymentMode: 'Cash on Delivery',
      },
      {
        orderID: '99999',
        customerName: 'Alex Wilson',
        address: '555 Cedar Street',
        totalAmount: '$90.00',
        orderReceivedDate: '2023-06-04',
        slotPeriod: 'Afternoon',
        orderStatus: 'Delivered',
        paymentStatus: 'Paid',
        paymentMode: 'UPI',
      },
    ];
    
    const [updateCurrentUpiPaymentMethod,setUpdateCurrentUpiPaymentMethod] = useState(null)
    
    const [showDropdown,setShowDropdown] = useState(false)
    const [searchInputValue,setSearchInputValue] = useState(null)

    const [activeDropdownSortFilter,setactiveDropdownSortFilter] = useState('All')
    
    const filteredTableBasedOnDropdownValueSelected = activeDropdownSortFilter === 'All' ? userData : userData.filter(item=>item.orderStatus === activeDropdownSortFilter)
    const filteredTableBasedOnDropdownValueSelectedWithInput =
    searchInputValue === null
    ? filteredTableBasedOnDropdownValueSelected
    : filteredTableBasedOnDropdownValueSelected.filter(item =>
    item.customerName.toLowerCase().includes(searchInputValue.toLowerCase())
      );

    
    const changeOrderStatus = (item) => {
      setUpdateCurrentUpiPaymentMethod(item);
    };

    const runners = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

    const runnersStatus = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    
    const paymentStatus = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    
    
    
    return (
      <>
      <div className='p-4 space-y-6'>
        <div className='space-x-4 justify-between flex items-center'>
            <div className='flex  ring-1 ring-black/5 p-2 rounded-md px-4 py-1 items-center space-x-3'>
              <input
              type='text'
              onChange={(e)=>{setSearchInputValue(e.target.value)}}
              className='focus:outline-none outline-none font-lighter text-xsm p-1  duration-500  '
              placeholder='Search'
            />
            </div>

            <div className='relative'>
              <div onClick={()=>{setShowDropdown(!showDropdown)}} className='space-x-2 flex items-center p-3 ring-1 ring-black/5'>
              <i className='bx bx-filter'></i>
              <p className='font-semibold text-xsm'>Filter</p>
              </div>
              <div className={`absolute top-12 duration-100 ring-1 ring-black/5 shadow-lg right-0 z-50 bg-white ${showDropdown ? 'visible translate-x-0' : ' invisible translate-x-2'}`}>
                {filterMenuDropdown.map((item,i)=>{
                  return(
                    <li onClick={()=>{setactiveDropdownSortFilter(item)}} className='list-none font-light text-xsm px-3 py-2 duration-500 hover:bg-[#7bff95]' key={i}>{item}</li>
                  )
                })}
              </div>

              
            </div>

          </div>   

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Order ID</th>
                <th scope="col" className="px-6 py-3">Customer name</th>
                <th scope="col" className="px-6 py-3">Address</th>
                <th scope="col" className="px-6 py-3">Total amount</th>
                <th scope="col" className="px-6 py-3">Date/Time</th>
                <th scope="col" className="px-6 py-3">Delivery Slot Time</th>
                <th scope="col" className="px-6 py-3">Order Status</th>
                <th scope="col" className="px-6 py-3">Runners</th>
                <th scope="col" className="px-6 py-3">Runner order status</th>
                <th scope="col" className="px-6 py-3">Payment Status</th>
                <th scope="col" className="px-6 py-3">View</th>
              </tr>
            </thead>
            <tbody>
              {filteredTableBasedOnDropdownValueSelectedWithInput.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td  className="px-6 py-4 cursor-pointer">{item.orderID}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.customerName}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.address}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.totalAmount}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.orderReceivedDate}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.slotPeriod}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.orderStatus}</td>
                    <td  className="px-6 py-4 cursor-pointer "><Select className='w-max duration-500' options={runners} /></td>
                    <td  className="px-6 py-4 cursor-pointer "><Select className='w-max duration-500' options={runnersStatus} /></td>
                    <td  className="px-6 py-4 cursor-pointer "><Select className='w-max duration-500' options={paymentStatus} /></td>
                    <td  className="px-6 py-4 cursor-pointer">
                      <Link to="/Orders/Orderdetails">
                      <div className='flex gap-2 items-center '>
                        <i className='p-3 bg-blue-100/50 rounded-lg bx bxs-pencil'></i>
                      </div>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
      </>
    )
  }

  export default OrderStatus