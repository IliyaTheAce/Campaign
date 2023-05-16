import React, {useState} from 'react';
import SidebarLinks from "./SidebarLinks";
import {Link, NavLink} from "react-router-dom";

const Sidebar = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    return (
        <div>
            <button type="button"
                    onClick={() => setOpenSideBar(!openSideBar)}
                    className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="material-symbols-outlined">
                    menu
                </span>
            </button>

            <aside id="default-sidebar"
                   className={`fixed top-0 right-0 z-40 w-64 h-screen transition-transform translate-x-full sm:translate-x-0 ${openSideBar ? "translate-x-0" : ""}`}
                   aria-label="Sidebar">
                <div className={"h-full px-3 py-4 overflow-y-auto bg-secondary"}>
                    <div className={'text-left'}>
                    <button type="button"
                            onClick={() => setOpenSideBar(!openSideBar)}
                            className="left-0  inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="material-symbols-outlined">
                                    menu
                                </span>
                    </button>
                    </div>
                    <ul className="space-y-2 font-medium mt-3">
                        <SidebarLinks link={'./'} linkName={'داشبورد'} iconName={'dashboard'} />
                        <SidebarLinks link={'./campaigns'} linkName={'کمپین ها'} iconName={'campaign'} />
                        <SidebarLinks link={'./videos'} linkName={'ویدئو ها'} iconName={'video_library'} />
                        <SidebarLinks link={'./players'} linkName={'پخش کننده ها'} iconName={'podcasts'} />
                    </ul>

                    <NavLink
                       className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 fixed mb-5 bottom-0" to={'./Account'}>
                        <span className="material-symbols-outlined w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                            account_circle
                        </span>
                        <span className="mr-3">حساب کاربری</span>
                    </NavLink>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
