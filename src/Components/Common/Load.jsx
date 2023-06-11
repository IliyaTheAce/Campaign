import React from 'react';
import ReactLoading from "react-loading";

function Load(props) {
	return (
	 <div className={'fixed top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2'}>
		 <ReactLoading type={'bars'} color={'grey'} />
	 </div>
	);
}

export default Load;