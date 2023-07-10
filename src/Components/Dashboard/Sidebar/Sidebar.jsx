import React, {useState} from 'react';
import SidebarLinks from "./SidebarLinks";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
	const [openSideBar, setOpenSideBar] = useState(false);
	const ChangeSideBar = () => {
		setOpenSideBar(!openSideBar)
	}
	return (
	 <div>
		 <div className={'bg-secondary pb-2 fixed top-0 w-full px-3'}>
			 <button type="button"
			         onClick={ChangeSideBar}
			         className="items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden block hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="material-symbols-outlined">
                        menu
                    </span>
			 </button>
		 </div>
		 <aside id="default-sidebar"
		        className={`fixed top-0 right-0 z-40 lg:w-64 h-screen transition-transform lg:block  ${openSideBar ? "block w-full" : "hidden"}`}
		        aria-label="Sidebar">
			 <div className={"h-full px-3 py-4 overflow-y-auto bg-secondary"}>
				 <button type="button"
				         onClick={() => setOpenSideBar(!openSideBar)}
				         className="left-0 items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden block hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span className="material-symbols-outlined">
                            menu
                        </span>
				 </button>
				 <ul className="space-y-2 font-medium mt-3">
					 <SidebarLinks link={'./'} linkName={'داشبورد'} iconName={'dashboard'}/>
					 <SidebarLinks link={'./campaigns'} linkName={'کمپین ها'} iconName={'campaign'}/>
					 <SidebarLinks link={'./videos'} linkName={'ویدئو ها'} iconName={'video_library'}/>
					 <SidebarLinks link={'./publishers'} linkName={'پخش کننده ها'} iconName={'podcasts'}/>
				 </ul>
				 {/*<div className={'fixed mb-5 bottom-0 lg:w-64 w-full'}>*/}
					{/* <NavLink*/}
					{/*  className="flex items-center ml-6 p-2 rounded-lg text-white hover:bg-gray-700   hover:bg-opacity-50 "*/}
					{/*  to={'./Account'}>*/}
                 {/*           <span*/}
                 {/*            className="material-symbols-outlined w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">*/}
                 {/*               account_circle*/}
                 {/*           </span>*/}
					{/*	 <span className="mr-3">حساب کاربری</span>*/}
					{/* </NavLink>*/}
				 {/*</div>*/}
			 </div>
		 </aside>
	 </div>
	);
};

export default Sidebar;
