import React, {useState} from 'react';
import VideoModal from "./VideoModal";

const VideoTableCol = (props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <tr className="border-b">
            <td className="whitespace-nowrap px-6 py-4 font-medium">{props.num}</td>
            <td className="whitespace-nowrap px-6 py-4">{props.title}</td>
            <td className="whitespace-nowrap px-6 py-4">{props.time}</td>
            <td className="whitespace-nowrap px-6 py-4">{props.aspect}</td>
            <td className="whitespace-nowrap px-6 py-4">
                <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
پیش نمایش
                </button>
                <button
                    type="button"
                    // onClick={() => {DeletingCampaigns(props.id)}}
                    className="mr-2 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
حذف
                </button>
                <VideoModal link={props.videoLink} show={showModal} setModal={setShowModal} videoName={props.title}/>
            </td>
        </tr>
    );
};

export default VideoTableCol;
