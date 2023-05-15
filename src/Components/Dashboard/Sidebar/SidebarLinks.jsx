import React from 'react';
import {NavLink} from "react-router-dom";

const SidebarLinks = (props) => {
    return (
        <li>
            <NavLink
               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" to={props.link}>
                <span className="material-symbols-outlined w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    {props.iconName}
                </span>
                <span className="mr-3">{props.linkName}</span>
            </NavLink>
        </li>
    );
};

export default SidebarLinks;
