import React, { useEffect, useState } from 'react'

const RefundOrder = () => {

    const filterMenuDropdown = ['All','Processing','Due','Delivering','Delivered','Rejected','Cancel']
    const [showDropdown,setShowDropdown] = useState(false)
    const [activeDropdownSortFilter,setactiveDropdownSortFilter] = useState('All')
    
    const [dateFrom,setDateFrom] = useState('')
    const [dateUpto,setDateUpto] = useState('')
    
    const userDetailsArray = [
        {
          orderID: "1",
          customer: "John Doe",
          contactNumber: "1234567890",
          totalAmount: "$50.00",
          orderReceived: "2023-06-01",
          deliveryTimeSlot: "9:00 AM - 11:00 AM",
          orderStatus: "Pending",
          paymentMode: "UPI",
        },
        {
          orderID: "2",
          customer: "Jane Smith",
          contactNumber: "9876543210",
          totalAmount: "$75.00",
          orderReceived: "2023-06-02",
          deliveryTimeSlot: "1:00 PM - 3:00 PM",
          orderStatus: "Delivered",
          paymentMode: "COD",
        },
        {
          orderID: "3",
          customer: "Michael Johnson",
          contactNumber: "5555555555",
          totalAmount: "$120.00",
          orderReceived: "2023-06-03",
          deliveryTimeSlot: "10:00 AM - 12:00 PM",
          orderStatus: "Refunded",
          paymentMode: "UPI",
        },
        {
          orderID: "4",
          customer: "Emily Davis",
          contactNumber: "9999999999",
          totalAmount: "$90.50",
          orderReceived: "2023-06-04",
          deliveryTimeSlot: "2:00 PM - 4:00 PM",
          orderStatus: "Pending",
          paymentMode: "COD",
        },
        {
          orderID: "5",
          customer: "David Brown",
          contactNumber: "1111111111",
          totalAmount: "$200.00",
          orderReceived: "2023-06-05",
          deliveryTimeSlot: "9:00 AM - 11:00 AM",
          orderStatus: "Delivered",
          paymentMode: "UPI",
        },
        {
          orderID: "6",
          customer: "Sophia Taylor",
          contactNumber: "4444444444",
          totalAmount: "$60.75",
          orderReceived: "2023-06-06",
          deliveryTimeSlot: "1:00 PM - 3:00 PM",
          orderStatus: "Pending",
          paymentMode: "COD",
        },
        {
          orderID: "7",
          customer: "Daniel Wilson",
          contactNumber: "8888888888",
          totalAmount: "$150.00",
          orderReceived: "2023-06-07",
          deliveryTimeSlot: "10:00 AM - 12:00 PM",
          orderStatus: "Delivered",
          paymentMode: "UPI",
        },
        {
          orderID: "8",
          customer: "Olivia Anderson",
          contactNumber: "6666666666",
          totalAmount: "$80.25",
          orderReceived: "2023-06-08",
          deliveryTimeSlot: "2:00 PM - 4:00 PM",
          orderStatus: "Refunded",
          paymentMode: "COD",
        },
        {
          orderID: "9",
          customer: "Liam Thomas",
          contactNumber: "2222222222",
          totalAmount: "$100.00",
          orderReceived: "2023-06-09",
          deliveryTimeSlot: "9:00 AM - 11:00 AM",
          orderStatus: "Pending",
          paymentMode: "UPI",
        },
        {
          orderID: "10",
          customer: "Ava Martinez",
          contactNumber: "7777777777",
          totalAmount: "$95.50",
          orderReceived: "2023-06-10",
          deliveryTimeSlot: "1:00 PM - 3:00 PM",
          orderStatus: "Delivered",
          paymentMode: "COD",
        },
      ];
      
    
    const handleSubmitDateFormat = () => {
        const filteredData = userDetailsArray.filter((item) => {
          const orderReceivedDate = new Date(item.orderReceived);
          const fromDate = new Date(dateFrom);
          const toDate = new Date(dateUpto);
    
          return (
            (!dateFrom || orderReceivedDate >= fromDate) &&
            (!dateUpto || orderReceivedDate <= toDate)
          );
        });
    
        return filteredData;
      };
      const filteredData = handleSubmitDateFormat();
      const filterDataWithDateAndStatus = activeDropdownSortFilter === 'All' ? filteredData : filteredData.filter(item=>item.orderStatus === activeDropdownSortFilter)

      const resetButtonDateFormat = () => {
        setDateFrom('')
        setactiveDropdownSortFilter('All')
        setDateUpto('')
        window.location.reload()
      }


  return (
    <>
    <div className='space-y-6 p-4'>

        {/* Cards for refund page */}

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>

        <div  className='space-y-4 cursor-pointer select-none rounded-lg group p-4 ring-1 hover:bg-blue-500 duration-500 ring-black/5'>
            <p className='font-semibold text-xsm text-slate-700 group-hover:text-white'>Total Refunds</p>
            <p className='font-semibold text-4xl group-hover:text-white'>44,435</p>
        </div>
        
        <div className='space-y-4 cursor-pointer select-none rounded-lg group p-4 ring-1 hover:bg-blue-500 duration-500 ring-black/5'>
            <p className='font-semibold text-xsm text-slate-700 group-hover:text-white'>Refunded</p>
            <p className='font-semibold text-4xl group-hover:text-white'>44,435</p>
        </div>
        
        <div className='space-y-4 cursor-pointer select-none rounded-lg group p-4 ring-1 hover:bg-blue-500 duration-500 ring-black/5'>
            <p className='font-semibold text-xsm text-slate-700 group-hover:text-white'>Pending Refunds</p>
            <p className='font-semibold text-4xl group-hover:text-white'>35</p>
        </div>

        </div>
        {/* Cards for refund page ended */}

        {/* filtr div for refund page containing the date filter and select status filter in div */}
        <div className='flex items-center justify-between'>

            {/* Date Filter */}
            <div>
                <div className='gap-3 flex flex-wrap'>
                    <input value={dateFrom} onChange={(e)=>setDateFrom(e.target.value)} type="date" className='ring-1 ring-black/5 shadow-lg text-xsm uppercase p-2 rounded-lg' />
                    <input value={dateUpto} onChange={(e)=>setDateUpto(e.target.value)} type="date" className='ring-1 ring-black/5 shadow-lg text-xsm uppercase p-2 rounded-lg' />
                    {/* <button onClick={handleSubmitDateFormat} className='font-semibold text-sm px-6 py-2 bg-blue-500 rounded-lg text-white'>Go</button> */}
                    <button onClick={resetButtonDateFormat} className='font-semibold text-sm px-6 py-2 bg-blue-500 rounded-lg text-white'>RESET</button>
                </div>
            </div>
            

            {/* Filter dropdown */}
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
        {/* filtr div for refund page containing the date filter and select status filter in div end here */}


        {/* Table for visualising the data to user admin */}
        <div className='overflow-x-auto overflow-hidden ring-1 ring-black/5 rounded-md'>
      <table className='w-full '>

      <thead>
      <tr className='rounded-sm '>
      <td className='font-lighter p-2 text-xsm'>Order ID</td>
      <td className='font-lighter p-2 text-xsm'>Customer Name</td>
      <td className='font-lighter p-2 text-xsm'>Contact Number</td>
      <td className='font-lighter p-2 text-xsm'>Total amount</td>
      <td className='font-lighter p-2 text-xsm'>Payment Mode</td>
      <td className='font-lighter p-2 text-xsm'>Order Received Date</td>
      <td className='font-lighter p-2 text-xsm'>Slot Period</td>
      <td className='font-lighter p-2 text-xsm'>Order Status</td>
      <td className='font-lighter flex items-center gap-2 p-2 text-xsm'>Payment Status</td>
      </tr>
      </thead>

      <tbody>
      {filterDataWithDateAndStatus.map((item)=>{
        return (
            <tr key={item.orderID} className='text-left even:bg-slate-500/5 rounded-sm'>
      <td className='font-lighter text-left p-2 text-xsm'>{item.orderID}</td>
      <td className='font-lighter text-left p-2 text-xsm'>{item.customer}</td>
      <td className='font-lighter text-left p-2 text-xsm'>{item.contactNumber}</td>
      <td className='font-lighter text-left p-2 text-xsm'>{item.totalAmount}</td>
      <td className='font-lighter text-left p-2 text-xsm'>{item.paymentMode}</td>
      <td className='font-lighter text-left p-2 text-xsm'>{item.orderReceived}</td>
      <td className='font-lighter text-left p-2 text-xsm'>{item.deliveryTimeSlot}</td>
      <td className='font-lighter text-left p-2 text-xsm'>{item.orderStatus}</td>
      <td className='font-lighter text-left p-2 text-xsm'>
      <div className='flex items-center gap-2'>
        <button className='px-3 py-2 bg-blue-500 text-white font-semibold'>View</button>
        </div>  
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

export default RefundOrder