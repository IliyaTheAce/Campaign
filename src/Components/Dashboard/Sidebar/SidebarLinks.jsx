import React from 'react';
import {NavLink} from "react-router-dom";

const SidebarLinks = (props) => {
	return (
	 <li>
		 <NavLink
		  className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 hover:bg-opacity-50" to={props.link}>
                <span
                 className="material-symbols-outlined w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400">
                    {props.iconName}
                </span>
			 <h2 className="mr-3">{props.linkName}</h2>
		 </NavLink>
	 </li>
	);
};

export default SidebarLinks;
