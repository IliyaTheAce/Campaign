import React, {useEffect} from 'react';

const MessageModal = ({_id,title,message, error , deleteHandler}) => {
	return (
	 <div className={`w-[300px] min-h-[150px] ${error ? 'bg-red-200' : 'bg-green-100'} rounded-lg px-8 py-4`}>
		 <button className={'float-left'} onClick={deleteHandler}>
		 <span className={`material-symbols-outlined ${error ? 'text-red-900' : 'text-green-900'} `}>close</span>
		 </button>
		 <h2 className={`text-right ${error ? 'text-red-800' : 'text-green-800'} text-lg font-semibold mt-4`}>{title}</h2>
		 <p className={`text-right ${error ? 'text-red-800' : 'text-green-800'} text-sm mt-1 px-2`}>{message}</p>
	 </div>
	);
};

export default MessageModal;
