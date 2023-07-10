import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "@material-tailwind/react";
import {toast} from "react-toastify";
import Delete from "../../../Controller/Administrator/Publishers/Delete";

const PublishersTableCol = (props) => {
	const nav = useNavigate();
	const EditPublisher = () => {
		nav(`/dashboard/publishers/${props.id}/edit`)
	}
const DeletePublisher =async () => {
	const res = await Delete(props.id);
	if (res){
		toast.success('عملیات با موفقیت انجام شد.');
		setTimeout(() => props.fetchData() , 1000)
	}else{
		toast.error('خطا در انجام عملیات');
	}
}
const CheckHttp = (url) =>{
		if(url.includes('http')){
			return url
		}else{
			return 'http://' + url;
		}
}
	return (
	 <tr className="border-b">
		 <td className="whitespace-nowrap px-6 py-4 font-medium">{props.num}</td>
		 <td className="whitespace-nowrap px-6 py-4">{props.title}</td>
		 <td className="whitespace-nowrap px-6 py-4"><a href={CheckHttp(props.domain)}>{props.domain}</a></td>
		 
		 <td className="whitespace-nowrap px-6 py-4">
			 <Button
			  onClick={() => nav('/dashboard/publishers/' + props.id)}
			  className="font-Homa inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
				 نمایش
			 </Button>
			 <Button
			  onClick={() => {
				  EditPublisher();
			  }}
			  className="font-Homa mr-2 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
				 ویرایش
			 </Button>
			 <Button
			  onClick={() => {
				  DeletePublisher();
			  }}
			  className="font-Homa mr-2 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
				 حذف
			 </Button>
		 </td>
	 </tr>
	);
};

export default PublishersTableCol;
