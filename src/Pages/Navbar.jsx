import React, { useEffect, useRef, useState } from 'react';
import Notification from '../Components/Notification';
import timcook from '../assets/timcook.jpg'
const Navbar = () => {
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const accountPop = useRef(null)


  useEffect(() => {
    const invisiblePopOverAccount = (e) => {
      if (accountPop.current && showAccountDropdown && e.key === 'Escape') {
        setShowAccountDropdown(false)
      }
    };

    document.addEventListener('keydown', invisiblePopOverAccount);

    return () => {
      document.removeEventListener('keydown', invisiblePopOverAccount);
    };
  }, []);

  return (
    <>
      <div className='w-full border-b shadow-b-lg bg-white flex items-center justify-between p-4'>
        <div className='space-x-4 flex items-center'>
          <i
            onClick={() => {
              document.body.classList.add('sidebar-collapse');
            }}
            className='bx lg:invisible duration-500 md:invisible sm:visible bxs-objects-horizontal-left'></i>
        </div>

        <div className='space-x-4 flex items-center'>
          <div className='items-center gap-2 lg:flex md:flex sm:hidden'>
            <button className='px-6 py-2 text-xsm font-semibold text-white bg-green-500'>Admin FAQ</button>
            <button className='px-6 py-2 text-xsm font-semibold text-white bg-green-500'>Admin FAQ</button>
            <button className='px-6 py-2 text-xsm font-semibold text-white bg-green-500'>Admin FAQ</button>
            <button className='px-6 py-2 text-xsm font-semibold text-white bg-green-500'>View Store</button>
          </div>
          <Notification />
          <div className='account-buttons relative'>
            <div className='flex items-center admin-credentials space-x-3'>
              <p className='font-semibold text-xsm'>Admin</p>
              <div className='w-8 overflow-hidden shadow-lg h-8 rounded-md bg-gray-100'>
                <img src={timcook} className='w-full h-full object-cover' alt="" />
              </div>
              <i
                onClick={() => {
                  setShowAccountDropdown(!showAccountDropdown);
                }}
                className='bx bx-chevron-down'
              ></i>
              {showAccountDropdown && (
                <div ref={accountPop} className='account-dropdown-when-click ring-1 ring-black/5 z-[500] rounded-lg select-none absolute py-2 top-10 right-0 bg-white'>
                  <ul>
                    <li className='px-6 py-2 flex items-center gap-3 hover:bg-slate-100'>
                      <i className='bx bx-user'></i> Account
                    </li>
                    <li className='px-6 py-2 flex items-center gap-3 hover:bg-slate-100'>
                      <i className='bx bx-x'></i> Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
