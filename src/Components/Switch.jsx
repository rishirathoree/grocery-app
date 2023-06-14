import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Switch = () => {
  const switches = ["Due", "Active", "Ship", "Delivered"];
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
      orderStatus: 'Active',
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
      orderStatus: 'Ship',
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
  
  const tableHead = ['order Id', 'customer name', 'order amount', 'date','Order Staus'];
  const [activeCurrentSwitch, setActiveCurrentSwitch] = useState('Due');
  const activeSwitch = (tab) => { setActiveCurrentSwitch(tab) };
  const filterDataBasedOnTable = userData.filter(item=>item.orderStatus === activeCurrentSwitch)

  return (
    <>
      <div className='switches space-y-4'>
        <div className='flex items-center justify-between'>
        <div className='flex ring-1 ring-black/5 w-min rounded-lg items-center gap-0 overflow-hidden '>
          {switches.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => { activeSwitch(item) }}
                className={`cursor-pointer font-semibold py-2 px-6 duration-200 text-xsm ${activeCurrentSwitch === item ? 'bg-gray-500/50 text-white inline-block' : 'bg-none'}`}
              >
                {item}
              </p>
            );
          })}
        </div>
        <Link to="/orderstatus"><p className='font-semibold hover:underline text-xsm'>View All</p></Link>
        </div>
        <div className='overflow-x-auto overflow-hidden ring-1 ring-black/5 rounded-md'>
      <table className='w-full '>
            <thead className='bg-gray-50'>
              <tr className=''>
                {tableHead.map((item, index) => {
                  return (
                    <td key={index} className='p-2 text-xsm font-light'>{item}</td>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {filterDataBasedOnTable.map((item, index) => (
                <tr key={index} className='odd:bg-white even:bg-gray-50'>
                  <td className='font-lighter text-left p-2 text-xsm'>{item.orderID}</td>
      <td className='font-lighter text-left p-2 text-xsm'>{item.customerName}</td>
      <td className='font-lighter text-left p-2 text-xsm'>{item.totalAmount}</td>
      <td className='font-lighter text-left p-2 text-xsm'>{item.orderReceivedDate}</td>
      <td className='font-lighter text-left p-2 text-xsm'>{item.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Switch;
