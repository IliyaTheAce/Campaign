import React, {useEffect, useState} from 'react';
import VideoTableCol from "./VideoTableCol";
import {Button, Input} from "@material-tailwind/react";
import GetList from "../../../Controller/Administrator/Videos/List";
import Load from "../../Common/Load";
import {useNavigate, useParams} from "react-router-dom";
import SyncVideos from "../../../Controller/Administrator/Campaigns/SyncVideos";
import {toast} from "react-toastify";

const VideoView = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedVideos, setSelectedVideos] = useState([]);
	const [keywords , setKeywords] =useState('');
	
	const params =useParams();
	const nav = useNavigate()
	const sendData = async () => {
		const campId= params.campId;
			// console.log(campId , selectedVideos);
		if (selectedVideos.length >0){
			const res = await SyncVideos(campId , {contents:selectedVideos});
			console.log(res)
			if (res){
				nav(`/dashboard/campaigns/${campId}`)
				toast.success('عملیات موفق بود' , {rtl:true});
			}else{
				toast.error('عملیات ناموفق بود' , {rtl:true});

			}
		}else{
			toast.warn('لطفا حداقل یک ویدئو انتخاب کنید' , {rtl:true});

		}
	}
	const FetchData = async () => {
		setIsLoading(true)
		const res = await GetList(keywords);
		if (res && res !== false) {
			setData(res);
		}
		setIsLoading(false)
	}
	
	useEffect(() => {
		FetchData();
	}, [null]);
	
	const handleSelect = (uid , checked) => {
		if (checked) {
		setSelectedVideos([...selectedVideos , uid])
		}else{
			const updatedArray = selectedVideos.filter((item) => item !== uid);
			setSelectedVideos(updatedArray);
		}
	}
	
	return (
	 <div className="py-2 flex flex-wrap w-full h-full">
		 <Load isLoading={isLoading}/>
		 <div className="px-2 w-full min-h-full">
			 <div
			  className="mb-8 rounded-[20px] bg-secondary p-10 shadow-md md:px-7 xl:px-10 h-full"
			 >
				 <div className={'flex flex-col lg:flex-row gap-5 items-center mb-8 w-full justify-between'}>
					 <div className={'inline-flex items-center'}>
						 <div
						  className=" flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
						 >
							 <span className={'material-symbols-outlined'}>video_library</span>
						 </div>
						 <h4 className="text-xl font-semibold text-dark mr-3">
							 ویدئو های مورد نظر را انتخاب کنید
						 </h4>
					 </div>
					 <div className="lg:w-1/5">
						 <Input
						  onChange={e => setKeywords(e.target.value)}
						  variant={'standard'}
						  className={'text-white'} color={'blue'}
						  label={'جستجو'}/>
					 </div>
					 <div className={'flex gap-2'}>
					 <Button
					  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
					  onClick={FetchData}
					 >
						 بازخوانی
					 </Button>
					 <Button
					  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
					  onClick={sendData}
					 >
						 مرحله بعد
					 </Button>
					 </div>
				 </div>
				 <div className={'lg:overflow-auto overflow-scroll'}>
					 <table className="min-w-full text-right text-sm font-light">
						 <thead className="border-b font-medium">
						 <tr>
							 <th scope="col" className="px-6 py-4">#</th>
							 <th scope="col" className="px-6 py-4">عنوان</th>
							 <th scope="col" className="px-6 py-4">تایپ</th>
							 <th scope="col" className="px-6 py-4 w-1/6">عملیات</th>
						 </tr>
						 </thead>
						 <tbody>
						 {data ? data.map((item, index) => (
						  <VideoTableCol key={index + 1} id={item.id} num={index + 1} title={item.title}
						                 videoLink={item.videoLink} type={item.format} hasDeleteButton={false}
						   handleSelect={handleSelect}
						  />
						 )) : ''}
						 </tbody>
					 </table>
				 </div>
			 </div>
		 </div>
	 </div>
	);
};

export default VideoView;
