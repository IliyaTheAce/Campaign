import React, {useEffect, useState} from 'react';
import CampaignsTableCol from "./campaignsTableCol";
import {Link} from "react-router-dom";
import {Input, Button} from "@material-tailwind/react";
import GetList from "../../../Controller/Administrator/Campaigns/List";
import Load from "../../Common/Load";
import { toast } from 'react-toastify';

const CampaignsView = () => {
	const [campaignsData, setCampaignsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const FetchingData = async () => {
		setIsLoading(true)
		const data = await GetList()
		if (data && data !== false) {
			setCampaignsData(data)
		} else{
			toast.error('پاسخی از سرور دریافت نشد' , {rtl: true})
		}
		setIsLoading(false)
	}
	
	useEffect(() => {
		FetchingData();
	}, []);
	
	const [filteredData, setFilteredData] = useState(campaignsData)
	const FilterSearch = (e) => {
		const filter = tableTempContent.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(e.target.value)))
		setFilteredData(filter)
	}
	return (
	 <div className="py-2 flex flex-wrap w-full h-full">
		 {isLoading ? <Load /> : ''}
		 <div className="px-2 w-full min-h-full">
			 <div
			  className="mb-8 rounded-[20px] bg-secondary p-4 lg:p-10 shadow-md md:px-7 xl:px-10 h-full "
			 >
				 <div className={'flex flex-col lg:flex-row gap-5 items-center mb-8 w-full justify-between'}>
					 <div className={'inline-flex lg:flex-grow-0 flex-grow items-center justify-start'}>
						 <div
						  className=" flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
						 >
							 <span className={'material-symbols-outlined'}>campaign</span>
						 </div>
						 <h4 className="text-xl font-semibold text-dark mr-3">
							 کمپین ها
						 </h4>
					 </div>
					 <div className="lg:w-1/5">
						 <Input
						  onChange={FilterSearch}
						  variant={'standard'}
						  className={'text-white'} color={'blue'}
						  label={'جستجو'}/>
					 </div>
					 <div>
						 <Button
						  onClick={FetchingData}
						  className="font-Homa inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
							 بازخوانی
						 </Button>
						 <Link
						  to={'/dashboard/create-campaign'}
						  className="mr-2 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
							 اینجاد کمپین جدید
						 </Link>
					 </div>
				 </div>
				 <div className={'lg:overflow-auto overflow-scroll'}>
					 <table className="min-w-full text-right text-sm font-light ">
						 <thead className="border-b font-medium">
						 <tr>
							 <th scope="col" className="px-6 py-4">#</th>
							 <th scope="col" className="px-6 py-4">عنوان</th>
							 <th scope="col" className="px-6 py-4">شروع</th>
							 {/*<th scope="col" className="px-6 py-4">بودجه مانده</th>*/}
							 <th scope="col" className="px-6 py-4">وضعیت</th>
							 <th scope="col" className="px-6 py-4 w-1/6">عملیات</th>
						 </tr>
						 </thead>
						 <tbody>
						 {filteredData.map((item) => (
						  <CampaignsTableCol key={item.uid} id={item.id} num={item.num} title={item.title}
						                     start={item.createdAt} budget={item.budget} status={item.is_enabled === 1 ? "فعال" : "غیر فعال"}/>
						 ))}
						 </tbody>
					 </table>
				 </div>
			 </div>
		 </div>
	 </div>
	);
};

export default CampaignsView;
