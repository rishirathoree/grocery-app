import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Aside = () => {
  const sidebarCategories = [
    {
      title: 'Dashboard',
      icon: 'bx bxs-customize',
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
      icon: 'bx bx-store',
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
          icon: 'bx bxs-layer',
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
      icon: 'bx bx-devices',
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
      icon: 'bx bxs-report',
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
      icon: 'bx bxs-offer',
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
      icon: 'bx bx-layer',
      url: '/User-Management',
    },
    {
      title: 'Runner Management',
      icon: 'bx bx-run',
      url: '/RunnerManagement',
    },
    {
      title: 'Enquiry Form',
      icon: 'bx bx-receipt',
      url: '/Enquires',
    },
    {
      title: 'Content Management',
      icon: 'bx bx-book-content',
      url: '/Content-Management',
      subcategories: [
        {
          title: 'Banners',
          icon: 'bx bx-image',
          url: '/Banners',
        },
        {
          title: 'Pages',
          icon: 'bx bx-circle',
          url: '/pages',
        },
        {
          title: 'FAQ',
          icon: 'bx bxs-notepad',
          url: '/Faq',
        },
      ],
    },
    {
      title: 'Setting',
      icon: 'bx bx-cog',
      url: '/Content-Management',
      subcategories: [
        {
          title: 'Store Information',
          icon: 'bx bx-building-house',
          url: '/StoreInformation',
        },
        {
          title: 'Features Setting',
          icon: 'bx bxs-zap',
          url: '/FeaturesSetting',
        },
        {
          title: 'Online Payment Store',
          icon: 'bx bx-building-house',
          url: '/payment_settings',
        },
        // {
        //   title: 'Tax Setting',
        //   icon: 'bx bxs-zap',
        //   url: '/pages',
        // },
        // {
        //   title: 'Store Time Information',
        //   icon: 'bx bx-building-house',
        //   url: '/Banners',
        // },
        // {
        //   title: 'Delivery Slot Setting',
        //   icon: 'bx bxs-zap',
        //   url: '/pages',
        // },
        // {
        //   title: 'Delivery Areas',
        //   icon: 'bx bxs-zap',
        //   url: '/pages',
        // },
        {
          title: 'Social Media Management',
          icon: 'bx bxs-zap',
          url: '/Social_linkings',
        },
      ],
    },
    {
      title: 'Logout',
      icon: 'bx bx-log-out',
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
    <aside className="w-1/4  asideBar overflow-hidden overflow-y-auto  lg:block md:block sm:hidden shadow-lg ring-1 ring-black/5 z-[500]">
      <div className='lg:p-5 md:p-5 sm:p-5 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
        {/* <i className='bx bxs-cart animate-bounce'></i> */}
        <p className='font-semibold text-lg'>Sasta Grocery</p>
        </div>
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
                  flex p-4 items-center hover:bg-[#c7ffd36a] justify-between
                  ${
                    category.subcategories.some((subcategory) =>
                      routeLocation.includes(subcategory.url)
                    )
                      ? 'text-black bg-[#C8FFD4]'
                      : 'text-black '
                  }
                  `}
                  onClick={() => handleDropdown(category.title)}
                >
                  <div className='flex  items-center gap-2'>
                  <i className={`${category.icon}`}></i>
                  <p className={`duration-500
                  ${category.subcategories.some((subcategory) => routeLocation.includes(subcategory.url)) ? 'text-xsm font-semibold' : 'text-xsm font-semibold'}
                  `}>{category.title}</p>
                  </div>
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
                  className={`duration-500 bg-slate-50/70
                  ${dropdown === category.title ? 'block' : 'hidden'}
                  `}
                >
                  {category.subcategories.map((subcategory) => (
                    <Link to={subcategory.url} key={subcategory.title}>
                      <li
                        className={`
                          flex items-center hover:bg-[#c7ffd36a] gap-2 p-3 pl-12 
                          ${
                            routeLocation === subcategory.url
                              ? 'text-black bg-[#7bff95]'
                              : 'text-slate-500'
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
                  className={`flex hover:bg-[#c7ffd36a] p-4 ${
                    routeLocation === category.url
                      ? 'text-black bg-[#C8FFD4]'
                      : 'text-black'
                  } 
                  
                  items-center justify-between`}
                >
                  <div className='flex  items-center gap-2'>
                  <i className={`${category.icon}`}></i>
                  <p className={`duration-500 ${routeLocation === category.url ? 'text-xsm font-semibold' : 'text-xsm font-semibold'}`}>{category.title}</p>
                  </div>
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
