import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const inputRef = useRef(null);
  const accountPop = useRef(null)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        inputRef.current && inputRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
      <div className='w-full shadow-b-lg bg-white flex items-center justify-between p-4'>
        <div className='space-x-4 flex items-center'>
          <i
            onClick={() => {
              document.body.classList.add('sidebar-collapse');
            }}
            className='bx lg:invisible duration-500 md:invisible sm:visible bx-objects-horizontal-left'></i>
          <div className='flex lg:flex md:flex sm:hidden ring-1 ring-black/5 p-2 rounded-md shadow-lg px-4 py-1 items-center space-x-3'>
            <i className='bx bx-search-alt'></i>
            <input
            ref={inputRef}
            type='text'
            className='focus:outline-none outline-none font-lighter text-xsm p-2  duration-500  '
            placeholder='Search'
          />
          <div className={`flex space-x-1`}>
            <p className='font-light uppercase inline-block text-[12px] px-2 py-1 ring-1 ring-black/5'>Ctrl</p>
            <p className='font-light uppercase inline-block text-[12px] px-2 py-1 ring-1 ring-black/5'>K</p>
          </div>
          </div>
        </div>

        <div className='space-x-4 flex items-center'>
          <i className='bx bx-bell'></i>
          <div className='account-buttons relative'>
            <div className='flex items-center admin-credentials space-x-3'>
              <p className='font-semibold text-xsm'>Admin</p>
              <div className='w-8 h-8 rounded-md bg-gray-100'></div>
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
