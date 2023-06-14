  import React, { useEffect, useRef, useState } from 'react'

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
    console.log(searchInputValue)

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

    
    
    
    return (
      <>
      <div className='p-4 space-y-6'>
        <div className='space-x-4 justify-between flex items-center'>
            <div className='flex  ring-1 ring-black/5 p-2 rounded-md px-4 py-1 items-center space-x-3'>
              <input
              type='text'
              onChange={(e)=>{setSearchInputValue(e.target.value)}}
              className='focus:outline-none outline-none font-lighter text-xsm p-1 duration-500  '
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
                    <li onClick={()=>{setactiveDropdownSortFilter(item)}} className='list-none font-light text-xsm px-3 py-2 hover:bg-gray-100' key={i}>{item}</li>
                  )
                })}
              </div>

              
            </div>

          </div>   

        <div className='overflow-x-auto overflow-hidden ring-1 ring-black/5 rounded-md'>
        <table className='w-full '>
        <thead>
        <tr className='rounded-sm'>
        <td className='font-lighter p-2 text-xsm'>Order ID</td>
        <td className='font-lighter p-2 text-xsm'>Customer Name</td>
        <td className='font-lighter p-2 text-xsm'>Address</td>
        <td className='font-lighter p-2 text-xsm'>Total amount</td>
        <td className='font-lighter p-2 text-xsm'>Order Received Date</td>
        <td className='font-lighter p-2 text-xsm'>Slot Period</td>
        <td className='font-lighter p-2 text-xsm'>Order Status</td>
        <td className='font-lighter p-2 text-xsm'>Payment Mode</td>
        <td className='font-lighter flex items-center gap-2 p-2 text-xsm'>Payment Status</td>
        </tr>
        </thead>
        <tbody>

        {filteredTableBasedOnDropdownValueSelectedWithInput.map((item)=>{
          return(
        <tr key={item.orderID} className='text-left even:bg-slate-500/5 rounded-sm'>
        <td className='font-lighter text-left p-2 text-xsm'>{item.orderID}</td>
        <td className='font-lighter text-left p-2 text-xsm'>{item.customerName}</td>
        <td className='font-lighter text-left p-2 text-xsm'>{item.address}</td>
        <td className='font-lighter text-left p-2 text-xsm'>{item.totalAmount}</td>
        <td className='font-lighter text-left p-2 text-xsm'>{item.orderReceivedDate}</td>
        <td className='font-lighter text-left p-2 text-xsm'>{item.slotPeriod}</td>
        <td className='font-lighter text-left p-2 text-xsm'>{item.paymentMode}</td>
        <td className='font-lighter text-left p-2 text-xsm'>{item.orderStatus}</td>
        <td className='font-lighter flex items-center gap-2 p-2 text-xsm'>

        <div onClick={()=>{changeOrderStatus(item)}} className='flex relative items-center gap-3 p-2 rounded-md'> <p className='font-semibold text-[8px]'>Payment Status</p><i className='bx bx-edit'></i>
        {updateCurrentUpiPaymentMethod && updateCurrentUpiPaymentMethod.orderID === item.orderID && (
                          <div className={`changeStatus absolute z-50 rounded-lg list-none top-8 right-0 bg-white drop-shadow-md ring-1 ring-black/5 block`}>
                            <li
                              className='px-6 py-2 cursor-pointer hover:bg-slate-500/5'
                              onClick={() => handlePaymentStatusUpdate('UPI')}
                            >
                              UPI
                            </li>
                            <li
                              className='px-6 py-2 cursor-pointer hover:bg-slate-500/5'
                              onClick={() => handlePaymentStatusUpdate('Cash on Delivery')}
                            >
                              Cash on Delivery
                            </li>
                          </div>
                        )}

        </div>

        <i className='bx bxs-show bg-slate-100 p-2 rounded-md'></i>
        </td>
        </tr>
          )
        })}
        </tbody>
      </table>
      </div>
      </div>
      
      </>
    )
  }

  export default OrderStatus