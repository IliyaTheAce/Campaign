import React, {useEffect, useState} from 'react';
import VideoTableCol from "./VideoTableCol";
import {Button, Input} from "@material-tailwind/react";
import GetList from "../../../Controller/Administrator/Videos/List";
import Load from "../../Common/Load";

const VideoView = () => {
	//TODO: Arrange Table
	const [filteredData, setFilteredData] = useState([])
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const temp = [{
		num :'ipafjpiasjf'
	},{
		num :'oajfopjsg'
	},]
	const FilterSearch = (e) => {
		const filter = data.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(e.target.value)))
		setFilteredData(filter)
	}
	const FetchData = async () => {
		setIsLoading(true)
		const res = await GetList();
		if (res && res !== false) {
			setData(res);
			setFilteredData(res);
		}
		setData(temp);
		setFilteredData(temp);
		setIsLoading(false)
	}
	
	useEffect(() => {
		FetchData();
	}, [null]);
	
	
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
							 ویدئو ها
						 </h4>
					 </div>
					 <div className="lg:w-1/5">
						 <Input
						  onChange={FilterSearch}
						  variant={'standard'}
						  className={'text-white'} color={'blue'}
						  label={'جستجو'}/>
					 </div>
					 <Button
					  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
					 onClick={FetchData}
					 >
						 بازخوانی
					 </Button>
				 </div>
				 <div className={'lg:overflow-auto overflow-scroll'}>
					 <table className="min-w-full text-right text-sm font-light">
						 <thead className="border-b font-medium">
						 <tr>
							 <th scope="col" className="px-6 py-4">#</th>
							 <th scope="col" className="px-6 py-4">عنوان</th>
							 {/*<th scope="col" className="px-6 py-4">زمان</th>*/}
							 <th scope="col" className="px-6 py-4">وضعیت</th>
							 <th scope="col" className="px-6 py-4">تایپ</th>
							 <th scope="col" className="px-6 py-4 w-1/6">عملیات</th>
						 </tr>
						 </thead>
						 <tbody>
						 {filteredData ? filteredData.map((item, index) => (
						  <VideoTableCol key={item.uid} id={item.uid} num={index + 1} title={item.title} time={item.createdAt}
						                 aspect={item.type} videoLink={item.videoLink} status={item.is_enabled === 1 ? 'فعال' : "غیر فعال"}
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
