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
                className={`cursor-pointer font-semibold py-2 px-6 duration-200 text-xsm ${activeCurrentSwitch === item ? 'bg-green-500/50 text-white inline-block' : 'bg-none'}`}
              >
                {item}
              </p>
            );
          })}
        </div>
        <Link to="/orderstatus"><p className='font-semibold hover:underline text-xsm'>View All</p></Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Order ID</th>
                <th scope="col" className="px-6 py-3">Customer Name</th>
                <th scope="col" className="px-6 py-3">Order Amount</th>
                <th scope="col" className="px-6 py-3">Date/Time</th>
                <th scope="col" className="px-6 py-3">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {filterDataBasedOnTable.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  > 
                    <td className="px-6 py-4">{item.orderID}</td>
                    <td className="px-6 py-4">{item.customerName}</td>
                    <td className="px-6 py-4">$32,534</td>
                    <td className="px-6 py-4">{item.orderReceivedDate}</td>
                    <td className="px-6 py-4">65451-53205</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Switch;
