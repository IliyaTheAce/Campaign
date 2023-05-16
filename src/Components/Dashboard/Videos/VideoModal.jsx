import React from 'react';

const VideoModal = (props) => {
    return (
        <div className={`absolute ${props.show ? 'block' : 'hidden'} w-full h-full top-0 right-0 bg-primary bg-opacity-80 z-50 flex flex-col`}>
            <div className={'mt-10 px-20 flex items-center'}>
            <button onClick={() => {props.setModal(false)}} className={'flex items-center'}>
                <span className="material-symbols-outlined">
                    close
                </span>
            </button>
                <h2 className={'text-xl mr-16'}>{props.videoName}</h2>
            </div>
            <div className={'flex justify-center items-center h-full'}>
            {props.show ? <video className="shadow-lg w-2/3" loop controls>
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
