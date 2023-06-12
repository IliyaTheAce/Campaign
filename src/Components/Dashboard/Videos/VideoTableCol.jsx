import React, {useState} from 'react';
import VideoModal from "./VideoModal";
import {Button} from '@material-tailwind/react'
const VideoTableCol = (props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <tr className="border-b">
            <td className="whitespace-nowrap px-6 py-4 font-medium">{props.num}</td>
            <td className="whitespace-nowrap px-6 py-4">{props.title}</td>
            {/*<td className="whitespace-nowrap px-6 py-4">{props.time}</td>*/}
            <td className="whitespace-nowrap px-6 py-4">{props.aspect}</td>
            <td className="whitespace-nowrap px-6 py-4">{props.status}</td>
            <td className="whitespace-nowrap px-6 py-4">
                <Button
                    onClick={() => setShowModal(true)}
                    className="inline-block font-Homa rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
پیش نمایش
                </Button>
                <Button
                    // onClick={() => {DeletingCampaigns(props.id)}}
                    className="mr-2 font-Homa inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
حذف
                </Button>
                <VideoModal link={props.videoLink} show={showModal} setModal={setShowModal} videoName={props.title}/>
            </td>
        </tr>
    );
};

export default VideoTableCol;
