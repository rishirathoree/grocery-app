import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Aside = () => {
  const location = useLocation()
  const routeActive = location.pathname

  const sidebarCategories = [
    {
      title: "Dashboard",
      icon: "bx bx-home-alt",
      url: "/dashboard",
    },
    {
      title: "Order",
      icon: "bx bx-package",
      url: "/order",
      subcategories: [
        {
          title: "Order Status",
          icon: "bx bx-list-check",
          url: "/orderstatus",
        },
      ],
    },  
    {
      title: "Refund",
      icon: "bx bx-money",
      url: "/refund",
      subcategories: [
        {
          title: "Refund Order",
          icon: "bx bx-undo",
          url: "/Refundorder",
        },
      ],
    },
    {
      title: "Manage Grocery",
      icon: "bx bx-cog",
      url: "/manage-grocery",
      subcategories: [
        {
          title: "Category",
          icon: "bx bx-category",
          url: "/category",
        },
        {
          title: "Sub Category",
          icon: "bx bx-cookie",
          url: "/subcategory",
        },
        {
          title: "Products",
          icon: "bx bx-list-ul",
          url: "/products",
        },
        {
          title: "Bulk Import Export",
          icon: "bx bx-import",
          url: "/bulk-import-export",
        },
        {
          title: "Upload Inventory Images",
          icon: "bx bx-upload",
          url: "/upload-inventory-images",
        },
        {
          title: "Inventory Stock Settings",
          icon: "bx bx-cog",
          url: "/inventory-stock-settings",
        },
        {
          title: "Out of Stock Variants",
          icon: "bx bx-error",
          url: "/out-of-stock-variants",
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <aside className="h-full shadow-xl border-r border-slate-500/9 z-50">
      <div className="asideBar group  lg:w-[250px] overflow-y-auto md:w-[250px] sm:w-[150px] lg:block md:block sm:hidden duration-300 bg-white h-full">
      <div className="flex mb-4 p-4  items-center justify-between">
      <i className={`bx bx-lg text-green-500 bxs-square-rounded `}></i>
      <i onClick={()=>{document.body.classList.remove('sidebar-collapse')}} className="bx lg:hidden md:hidden sm:block  bx-objects-horizontal-right"></i>
      </div>
      <div className="space-y-2 flex items-start justify-center flex-col">
        
      {sidebarCategories.map((category, index) => (
  <div key={index} className={`w-full cursor-pointer duration-700`}>
    <div
      className={`flex ${
        category.subcategories &&
        category.subcategories.some(subcategory =>
          routeActive.includes(subcategory.url)
        )
          ? "bg-green-500"
          : "bg-white"
      } p-4 items-center justify-between`}
      onClick={() => handleCategoryClick(index)}
    >
      <div className="flex items-center gap-2">
        <i
          className={`${category.icon} ${
            category.subcategories &&
            category.subcategories.some(subcategory =>
              routeActive.includes(subcategory.url)
            )
              ? "text-white"
              : "text-black"
          }`}
        ></i>

        {category.subcategories ? (
          <div
            className={`font-semibold category-title text-xsm ${
              category.subcategories &&
              category.subcategories.some(subcategory =>
                routeActive.includes(subcategory.url)
              )
                ? "text-white"
                : "text-black"
            }`}
          >
            {category.title}
          </div>
        ) : (
          <p
            className={`font-semibold category-title text-xsm ${
              activeCategory === index ? "font-bold" : "font-light"
            }`}
          >
            {category.title}
          </p>
        )}
      </div>
      {category.subcategories && (
        <i
          className={`bx  ${
            category.subcategories &&
            category.subcategories.some(subcategory =>
              routeActive.includes(subcategory.url)
            )
              ? "text-white bx-chevron-up"
              : "text-black bx-chevron-right"
          }`}
        ></i>
      )}
    </div>

    {category.subcategories && (
      <div
        className={`cursor-pointer ${
          activeCategory === index ? "opacity-100 translate-y-0 h-min" : "h-0 translate-y-8 opacity-0"
        } overflow-hidden duration-500 transition-all`}
      >
        {category.subcategories.map((subcategory, subIndex) => (
          <Link key={subIndex} to={subcategory.url}>
            <div className={`pl-8 flex gap-2 shadow-xl items-center p-3 ${routeActive.includes(subcategory.url) ? "bg-green-500": "bg-white"}`}>
              <i
                className={`${subcategory.icon} ${
                  routeActive.includes(subcategory.url)
                    ? "font-bold text-white"
                    : "font-light"
                } `}
              ></i>
              <p
                className={`font-lighter  ${
                  routeActive.includes(subcategory.url)
                    ? "font-bold text-white"
                    : "font-light"
                } subcategory-title text-xsm`}
              >
                {subcategory.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    )}
  </div>
))}

      </div>
    </div>
    </aside>
  );
};

export default Aside;
