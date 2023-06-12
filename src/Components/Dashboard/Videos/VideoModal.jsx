import React from 'react';

const VideoModal = (props) => {
	return (
	 <div
	  className={`fixed ${props.show ? 'block' : 'hidden'} w-full h-full top-0 right-0 bg-primary bg-opacity-80 z-50 flex flex-col`}>
		 <div className={'mt-10 px-5 lg:px-20 flex items-center'}>
			 <button onClick={() => {
				 props.setModal(false)
			 }} className={'flex items-center'}>
                <span className="material-symbols-outlined">
                    close
                </span>
			 </button>
			 <h2 className={'text-xl mr-3 lg:mr-16'}>{props.videoName}</h2>
		 </div>
		 <div className={'flex justify-center items-center h-full container mx-auto'}>
			 {props.show ? <video className="w-2/3 shadow-lg" loop controls autoPlay>
				  <source
				   src={props.link}
				   type="video/mp4"/>
			  </video>
			  : "No video to play"}
		 </div>
	 </div>
	);
};

export default VideoModal;
