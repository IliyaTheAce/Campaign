import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@material-tailwind/react";
import {toast} from "react-toastify";
import DeleteCamp from "../../../Controller/Administrator/Campaigns/Delete";

const CampaignsTableCol = (props) => {
    const nav = useNavigate();
    const EditingCampaign = (id) => {
        // axios.delete('/campaigns/delete/id',{Authentication: token})
        console.log('Editing camp')
    }
    const DeletingCampaigns = async (id) => {
        const res = await DeleteCamp(id);
        if (res) {
            toast.success('کمپین با موفقیت حذف شد', {rtl: true})

        } else {
            toast.error("پاسخی از سرور دریافت نشد.", {rtl: true})

        }
    }

    const Edit = () => {
        nav(`/dashboard/campaings/${props.id}/edit`)
    }

    return (
        <tr className="border-b">
            <td className="whitespace-nowrap px-6 py-4 font-medium">{props.num}</td>
            <td className="whitespace-nowrap px-6 py-4">{props.title}</td>
            <td className="whitespace-nowrap px-6 py-4">{props.start}</td>
            <td className="whitespace-nowrap px-6 py-4">{props.category.name}</td>
            {/*<td className="whitespace-nowrap px-6 py-4">{props.budget}</td>*/}
            <td className="whitespace-nowrap px-6 py-4">{props.type}</td>
            <td className="whitespace-nowrap px-6 py-4">{props.status === 1 ? "فعال" : "غیر فعال"}</td>
            <td className="whitespace-nowrap px-6 py-4">
                <Button
                    onClick={() => nav('/dashboard/campaigns/' + props.id)}
                    className="font-Homa inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                    نمایش
                </Button>
                <Button
                    onClick={() => {
                        Edit()
                    }}
                    className="font-Homa mr-2 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                    وبرایش
                </Button>
                <Button
                    onClick={() => {
                        DeletingCampaigns(props.id)
                    }}
                    className="font-Homa mr-2 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                    حذف
                </Button>
            </td>
        </tr>
    );
};

export default CampaignsTableCol;
