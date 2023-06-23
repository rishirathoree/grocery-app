import React from 'react'
import { Link } from 'react-router-dom';

const OrderDetails = () => {
    const orders = [
        {
          productName: 'AMUL GOLD MILK',
          Weight: '1 lt',
          UnitPrice: '₹78.00',
          Quantity: '2',
          netAmount: '156.00',
          taxType: 'CGST + SGST (0.00%)',
          taxAmount: '0',
          totalAmount: '₹156.00',
          comment: '--',
        },
        {
            productName: 'AMUL GOLD MILK',
            Weight: '1 lt',
            UnitPrice: '₹78.00',
            Quantity: '2',
            netAmount: '156.00',
            taxType: 'CGST + SGST (0.00%)',
            taxAmount: '0',
            totalAmount: '₹156.00',
            comment: '--',
          },
          {
            productName: 'AMUL GOLD MILK',
            Weight: '1 lt',
            UnitPrice: '₹78.00',
            Quantity: '2',
            netAmount: '156.00',
            taxType: 'CGST + SGST (0.00%)',
            taxAmount: '0',
            totalAmount: '₹156.00',
            comment: '--',
          },
          {
            productName: 'AMUL GOLD MILK',
            Weight: '1 lt',
            UnitPrice: '₹78.00',
            Quantity: '2',
            netAmount: '156.00',
            taxType: 'CGST + SGST (0.00%)',
            taxAmount: '0',
            totalAmount: '₹156.00',
            comment: '--',
          },
        
      ];
      

  return (
    <div className='space-y-6 p-4'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>

            <div className=' '>
            <div className='flex items-center gap-2'><i className='bx bx-user'></i><p className='font-semibold text-xsm'>User Information</p></div>
            <div className='space-y-4 bg-white shadow-lg p-4 ring-1 ring-black/5 rounded-lg mt-2'>
                <div className='flex items-center justify-between'><p className='font-semibold text-xsm'>Name</p><span className='font-light text-xsm'>Rahul</span></div>
                <div className='flex items-center justify-between'><p className='font-semibold text-xsm'>User Id</p><span className='font-light text-xsm'>15643</span></div>
                <div className='flex items-center justify-between'><p className='font-semibold text-xsm'>Email</p><span className='font-light text-xsm'>Rahul@gmail.com</span></div>
                <div className='flex items-center justify-between'><p className='font-semibold text-xsm'>Mobile Number</p><span className='font-light text-xsm'>541635-6153</span></div>
                <div className='flex items-center justify-between'><p className='font-semibold text-xsm'>City</p><span className='font-light text-xsm'>Pune</span></div>
                <div className='flex items-center justify-between'><p className='font-semibold text-xsm'>Area</p><span className='font-light text-xsm'>Pune</span></div>
                <div className='flex items-center justify-between'><p className='font-semibold text-xsm'>Address</p><span className='font-light text-xsm'>Sambhaji Nagar,Pune</span></div>
            </div>
            </div>

            <div className=' '>
            <div className='flex items-center gap-2'><i className='bx bx-list-check'></i><p className='font-semibold text-xsm'>Order Information:</p></div>
            <div className='space-y-4 bg-white shadow-lg p-4 pb-[3.1rem] ring-1 ring-black/5 rounded-lg mt-2'>
                <div className='flex items-center justify-between'><p className='font-semibold text-xsm'>Delivery Time</p><span className='font-light text-xsm'>N/A</span></div>
                <div className='flex items-center justify-between'><p className='font-semibold text-xsm'>Order Type</p><span className='font-light text-xsm'>Delivery</span></div>
                <div className='flex items-center justify-between'><p className='font-semibold text-xsm'>Note</p><span className='font-light text-xsm'>--</span></div>
                <div className='flex items-center justify-between'><p className='font-semibold text-xsm'>Payment Option</p><span className='font-light text-xsm'>COD</span></div>
                <div className='flex items-center justify-between'><p className='font-semibold text-xsm'>Refund Amount</p><span className='font-light text-xsm'>₹0.00</span></div>
                <div className='flex items-center justify-between'><p className='font-semibold text-xsm'>Carts Saving</p><span className='font-light text-xsm'>₹0.00</span></div>
            </div>
            </div>

            {/* Order Table  */}
            
            <div className="relative overflow-x-auto shadow-lg sm:rounded-lg lg:col-start-1 lg:col-end-4 md:col-start-1 col-end-4 sm:col-start-1 sm:col-end-1">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100/80 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Product Name</th>
                <th scope="col" className="px-6 py-3">Weight</th>
                <th scope="col" className="px-6 py-3">Unit Price</th>
                <th scope="col" className="px-6 py-3">Quantity</th>
                <th scope="col" className="px-6 py-3">Net Amount</th>
                <th scope="col" className="px-6 py-3">Tax Type</th>
                <th scope="col" className="px-6 py-3">Net Amount</th>
                <th scope="col" className="px-6 py-3">Tax Amount</th>
                <th scope="col" className="px-6 py-3">Total</th>
                <th scope="col" className="px-6 py-3">Comment</th>
                <th scope="col" className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td  className="px-6 py-4 cursor-pointer">{item.productName}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.Weight}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.UnitPrice}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.Quantity}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.netAmount}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.taxType}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.netAmount}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.taxAmount}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.netAmount}</td>
                    <td  className="px-6 py-4 cursor-pointer">{item.comment}</td>
                    <td  className="px-6 py-4 cursor-pointer">
                      <Link to="/Orders/Orderdetails">
                      <div className='flex gap-2 items-center '>
                        <i className='bx bx-toggle-right text-green-500 hover:text-slate-500 hover:rotate-180 duration-500 bx-lg'></i>
                      </div>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Total Checkout Box */}
        <div className='lg:col-end-4 md:col-start-1 md:col-end-4 sm:col-start-1 col-end-1 rounded-lg shadow-lg p-4 space-y-4 ring-1 ring-black/10'>
        <div className='flex items-center justify-between'>
            <p className='font-semibold text-xsm'>Checkout:</p>
            <p className='font-semibold text-xsm'>$1281.00</p>
        </div>

        <div className='flex items-center justify-between'>
            <p className='font-semibold text-xsm'>(-)Discount:</p>
            <p className='font-semibold text-xsm'>$00.00</p>
        </div>

        <div className='flex items-center justify-between'>
            <p className='font-semibold text-xsm'>(+)Shipping Charge:</p>
            <p className='font-semibold text-xsm'>₹0.00</p>
        </div>

        <div className='flex items-center border-t py-4 justify-between'>
            <p className='font-semibold text-lg'>Total</p>
            <p className='font-semibold text-xsm'>$1281.00</p>
        </div>

        </div>

        </div>
    </div>
  )
}

export default OrderDetails