import React from 'react';
import ReactLoading from "react-loading";

function Load({isLoading}) {
	if (isLoading) return (
	 <div
	  className={'fixed top-0 h-full left-0 w-full bg-gray-800 bg-opacity-30 flex justify-center items-center z-50'}>
		 <ReactLoading type={'bars'} color={'grey'}/>
	 </div>
	);
}

export default Load;