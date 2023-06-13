import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@material-tailwind/react";
import {toast} from "react-toastify";
import DeleteCamp from "../../../Controller/Administrator/Campaigns/Delete";

const PublishersTableCol = (props) => {
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
	return (
	 <tr className="border-b">
		 <td className="whitespace-nowrap px-6 py-4 font-medium">{props.num}</td>
		 <td className="whitespace-nowrap px-6 py-4">{props.title}</td>
		 <td className="whitespace-nowrap px-6 py-4"><a href={props.domain}>{props.domain}</a></td>
		 
		 <td className="whitespace-nowrap px-6 py-4">
			 <Button
			  onClick={() => nav('/dashboard/publishers/' + props.id)}
			  className="font-Homa inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
				 نمایش
			 </Button>
			 {/*<Button*/}
			 {/* onClick={() => {*/}
				{/*  DeletingCampaigns(props.id)*/}
			 {/* }}*/}
			 {/* className="font-Homa mr-2 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">*/}
				{/* ویرایش*/}
			 {/*</Button>*/}
		 </td>
	 </tr>
	);
};

export default PublishersTableCol;
