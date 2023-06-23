import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Aside = () => {
  const sidebarCategories = [
    {
      title: 'Dashboard',
      icon: 'bx bx-tachometer',
      url: '/',
    },
    {
      title: 'Order',
      icon: 'bx bx-cube',
      url: '/order',
      subcategories: [
        {
          title: 'Orders',
          icon: 'bx bx-list-check',
          url: '/Orders',
        },
        {
          title: 'Refund Order List',
          icon: 'bx bx-undo',
          url: '/RefundOrder',
        },
      ],
    },
    {
      title: 'Manage Grocery',
      icon: 'bx bx-product-hunt',
      url: '/manage-grocery',
      subcategories: [
        {
          title: 'Category',
          icon: 'bx bx-category',
          url: '/Category',
        },
        {
          title: 'Sub Category',
          icon: 'bx bxs-cookie',
          url: '/SubCategory',
        },
        {
          title: 'Products',
          icon: 'bx bx-list-ul',
          url: '/Products',
        },
        {
          title: 'Upload Inventory Images',
          icon: 'bx bx-upload',
          url: '/upload-inventory-images',
        },
        {
          title: 'Bulk Import Export',
          icon: 'bx bx-import',
          url: '/bulk-import-export',
        },
        {
          title: 'Inventory Stock Settings',
          icon: 'bx bx-cog',
          url: '/inventory-stock-settings',
        },
        {
          title: 'Out of Stock Variants',
          icon: 'bx bx-x-circle',
          url: '/OutStockVariant',
        },
      ],
    },
    {
      title: 'Customers',
      icon: 'bx bx-user',
      url: '/users',
    },
    {
      title: 'Marketing & Promotion',
      icon: 'bx bx-product-hunt',
      url: '/manage-grocery',
      subcategories: [
        {
          title: 'Coupon',
          icon: 'bx bxs-coupon',
          url: '/discounts',
        },
        {
          title: 'Refers & Earn',
          icon: 'bx bx-gift',
          url: '/ReferAndEarn',
        },
        {
          title: 'Alert Message',
          icon: 'bx bx-alarm-exclamation',
          url: '/alert_messages',
        },
      ],
    },
    {
      title: 'Report',
      icon: 'bx bx-product-hunt',
      url: '/manage-grocery',
      subcategories: [
        {
          title: 'Sold Item Report',
          icon: 'bx bxs-cart',
          url: '/SoldItemReport',
        },
        {
          title: 'Daily Order',
          icon: 'bx bx-gift',
          url: '/DailyOrder',
        },
      ],
    },
    {
      title: 'Loyalty Program',
      icon: 'bx bx-product-hunt',
      url: '/loyalty-program',
      subcategories: [
        {
          title: 'Configure Points',
          icon: 'bx bxs-coin',
          url: '/config-points',
        },
        {
          title: 'Loyalty Coupons',
          icon: 'bx bx-gift',
          url: '/loyalty-points',
        },
      ],
    },
    {
      title: 'User Management',
      icon: 'bx bx-user',
      url: '/User-Management',
    },
    {
      title: 'Runner Management',
      icon: 'bx bx-user',
      url: '/RunnerManagement',
    },
    {
      title: 'Logout',
      icon: 'bx bx-sign-out',
      url: '/login',
    },
  ];
  

  const location = useLocation();
  const routeLocation = location.pathname;
  const [dropdown, setDropdown] = useState('');

  const handleDropdown = (category) => {
    setDropdown(category === dropdown ? '' : category);
  };

  return (
    <aside className="w-1/4 asideBar overflow-hidden overflow-y-auto  lg:block md:block sm:hidden shadow-lg ring-1 ring-black/5 z-50">
      <div className='lg:p-5 md:p-5 sm:p-5 flex items-center justify-between'>
        <i className='bx bx-sm bxl-adobe'></i>
        <i
            onClick={() => {
              document.body.classList.remove('sidebar-collapse');
            }}
            className='bx  duration-500 lg:invisible md:invisible sm:visible bxs-objects-horizontal-right'></i>
      </div>
      <ul className=''>
        {sidebarCategories.map((category) => (
          <li className="" key={category.title}>
            {category.subcategories ? (
              <div className="dropdown-toggling">
                <div
                  className={`
                  flex p-4 items-center justify-between
                  ${
                    category.subcategories.some((subcategory) =>
                      routeLocation.includes(subcategory.url)
                    )
                      ? 'text-white bg-green-500'
                      : 'text-black '
                  }
                  `}
                  onClick={() => handleDropdown(category.title)}
                >
                  <p className={`duration-500
                  ${category.subcategories.some((subcategory) => routeLocation.includes(subcategory.url)) ? 'text-sm font-semibold' : 'text-xsm font-semibold'}
                  `}>{category.title}</p>
                  <i
                    className={`
                    bx ${
                      dropdown === category.title
                        ? 'bx-chevron-up'
                        : 'bx-chevron-down'
                    }
                    `}
                  ></i>
                </div>
                <ul
                  className={`
                  ${dropdown === category.title ? 'block' : 'hidden'}
                  `}
                >
                  {category.subcategories.map((subcategory) => (
                    <Link to={subcategory.url} key={subcategory.title}>
                      <li
                        className={`
                          flex items-center gap-2 p-4 pl-6
                          ${
                            routeLocation === subcategory.url
                              ? 'text-white bg-green-500/80'
                              : 'text-black '
                          }
                        `}
                      >
                        {/* subcategories icons and p tag */}
                        <i className={`${subcategory.icon}`}></i>
                        <p className="font-semibold text-xsm">
                          {subcategory.title}
                        </p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ) : (
              <Link to={category.url}>
                <div
                onClick={()=>{setDropdown(category)}}
                  className={`flex p-4 ${
                    routeLocation === category.url
                      ? 'text-white bg-green-500/80'
                      : 'text-black'
                  } 
                  
                  items-center justify-between`}
                >
                  <p className={`duration-500 ${routeLocation === category.url ? 'text-sm font-semibold' : 'text-xsm font-semibold'}`}>{category.title}</p>
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
