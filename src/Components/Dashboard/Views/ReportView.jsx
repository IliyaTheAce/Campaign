import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ResponsivePie} from "@nivo/pie";
import Show from "../../../Controller/Administrator/Campaigns/Show";
import Load from "../../Common/Load";
import {Button} from "@material-tailwind/react";
import VideoModal from "../Videos/VideoModal";

const temp = {
	"uid": "50c9587d3e5daa18b9a6dec1072b92c9c9e11bbf",
	"title": "33333",
	"type": "VIDEO",
	"is_enabled": 1,
	"category": {
		"id": 1,
		"name": "sdvsdv"
	},
	"contents": [
		{
			"uid": "ef43f34f34g3434g",
			"format": "video/mp4",
			"file": "video.mp4",
			"resource": "https://dsvs.ir/vastchecker/video.mp4",
			"createdAt": "1402-2-24 10:23:09",
			"updatedAt": "1402-2-31 13:18:36"
		},
		{
			"uid": "43g34g34g34h33h35h",
			"format": "video/mp4",
			"file": "video.mp4",
			"resource": "https://dsvs.ir/vastchecker/video.mp4",
			"createdAt": "1402-2-24 10:23:09",
			"updatedAt": "1402-2-31 13:18:36"
		}
	],
	"budget": 99,
	"budget_daily": 100,
	"start_time": "2022-02-12",
	"end_time": null,
	"createdAt": "1402-2-24 08:33:53",
	"updatedAt": "1402-2-31 15:33:58"
}

const ReportView = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const campId = useParams().campId;
	const [showModal, setShowModal] = useState(false);
	const [modal,setModal] = useState('');
	
	const FetchData = async function () {
		setIsLoading(true);

		const fetchedData = await Show(campId);
		if (fetchedData && fetchedData !== false) {
			setData(fetchedData);
		}
		setData(temp)
		setIsLoading(false)
	}
	
	useEffect(() => {
		FetchData();
	}, []);
	
	const tempData = {
		view: 205,
		usedBudget: 800000,
		availableBudget: 1200000,
		events: [
			{
				name: 'نام رویداد تستی',
				description: 'توضیحاتی درباره رویداد'
			}, {
				name: 'نام رویداد تستی',
				description: 'توضیحاتی درباره رویداد'
			},
		]
	}
	const chartData = [
		{
			id: "بودجه",
			label: "Consumed",
			value: data.budget,
			// color: "hsla(205,87%,22%,0.89)"
		},
		{
			id: "مصرف روزانه",
			label: "Available",
			value: data.budget_daily,
			// color: "hsl(107,70%,50%)"
		}
	];
	console.log(temp)
	if (isLoading) {
		return (
		 <Load isLoading={true}/>
		)
	} else
		return (
		 <section className={'flex flex-col md:flex-wrap lg:flex-row gap-5 pt-2'}>
			 <div
			  className="flex-grow min-w-full rounded-[20px] bg-secondary p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-full"
			 >
				 <div className={'inline-flex items-center mb-8'}>
					 <div
					  className=" flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
					 >
						 <span className={'material-symbols-outlined'}>info</span>
					 </div>
					 <h4 className="text-xl font-semibold text-dark mr-3">
						 اطلاعات
					 </h4>
				 </div>
				 
				 <div className={'flex flex-wrap gap-6'}>
					 <label>
						 نام کمپین : {data.title}
					 </label>
					 |
					 <label>
						 تایپ کمپین : {data.type}
					 </label>
					 |
					 <label>
						 وضعیت کمپین : {data.is_enabled === 1 ? 'فعال' : 'غیر فعال'}
					 </label>
					 |
					 <label>
						 دسته بندی : {data.category.name}
					 </label>
					 |
					 <label>
						 تاریخ شروع : {data.start_time}
					 </label>
					 |
					 <label>
						 تاریخ پایان : {data.end_time ? data.end_time : 'مشخص نشده'}
					 </label>
				 
				 </div>
			 </div>
			 {/*<div*/}
			 {/* className="flex-grow rounded-[20px] place-self-stretch bg-secondary p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 "*/}
			 {/*>*/}
			 {/* <div className={'inline-flex items-center mb-8'}>*/}
			 {/*	 <div*/}
			 {/*	  className=" flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"*/}
			 {/*	 >*/}
			 {/*		 <span className={'material-symbols-outlined'}>visibility</span>*/}
			 {/*	 </div>*/}
			 {/*	 <h4 className="text-xl font-semibold text-dark mr-3">*/}
			 {/*		 بازدید امروز*/}
			 {/*	 </h4>*/}
			 {/* </div>*/}
			 {/* <p className="text-lg md:text-2xl">*/}
			 {/*	 کمپین امروز به تعداد {tempData.view} بار دیده شده*/}
			 {/* </p>*/}
			 {/*</div>*/}
			 <div
			  className="flex-grow rounded-[20px] place-self-stretch bg-secondary p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-auto"
			 >
				 <div className={'inline-flex items-center mb-8'}>
					 <div
					  className=" flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
					 >
						 <span className={'material-symbols-outlined'}>movie</span>
					 </div>
					 <h4 className="text-xl font-semibold text-dark mr-3">
						 محتوا
					 </h4>
				 </div>
				 <table className="text-lg md:text-2xl table-auto	 w-full text-center">
					 <thead><tr className={''}>
					 <td className={'px-6 py-4'}>#</td>
					 <td className={'px-6 py-4'}>عملیات</td>
					 </tr>
					 </thead>
					 <tbody className={''}>
					 {data.contents.map((item, index) =>
						 <tr className={'py-3'}>
							 <td className={'px-6 py-2'}>{index + 1}</td>
							 <td className={'px-6 py-2'}><Button
						  onClick={() => {
							  setModal(item.resource)
							  setShowModal(true)
						  }}
						  className="inline-block font-Homa rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
							 پیش نمایش
						 </Button>
							 </td>
						 </tr>)}
					 </tbody>
				 </table>
			 </div>
			 <div
			  className="lg:flex-grow rounded-[20px] bg-secondary p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-auto"
			 >
				 <div className={'inline-flex items-center'}>
					 <div
					  className=" flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
					 >
						 <span className={'material-symbols-outlined'}>attach_money</span>
					 </div>
					 <h4 className="text-xl font-semibold text-dark mr-3">
						 بودجه مصرف شده
					 </h4>
				 </div>
				 <div className={'flex md:flex-row flex-col gap-4 lg:justify-between flex-wrap'}>
					 <p className="flex text-lg md:text-2xl leading-10 items-center">
						 بودجه : {data.budget}
						 <br/>
						 بودجه روزانه : {data.budget_daily}
					 
					 </p>
					 <div className={'w-[300px] h-[200px] text-black'}>
						 <ResponsivePie
						  data={chartData}
						  height={'200'}
						  width={'300'}
						  margin={{top: 10, right: 20, bottom: 10, left: 20}}
						  innerRadius={0.7}
						  padAngle={2}
						  colors={{scheme: 'set2'}}
						  cornerRadius={5}
						  activeOuterRadiusOffset={8}
						  enableArcLinkLabels={false}
						  enableArcLabels={false}
						 />
					 </div>
				 </div>
			 </div>
			 <div
			  className="flex-grow min-w-full rounded-[20px] bg-secondary p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-full"
			 >
				 <div className={'inline-flex items-center mb-8'}>
					 <div
					  className=" flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
					 >
						 <span className={'material-symbols-outlined'}>event</span>
					 </div>
					 <h4 className="text-xl font-semibold text-dark mr-3">
						 رویداد ها
					 </h4>
				 </div>
				 {tempData.events.map((event, index) => (
				  <div key={index} className={'mb-4'}>
					  <h2 className={'text-lg md:text-2xl mb-2'}>{event.name}</h2>
					  <p className="text-sm md:text-l mr-3">
						  {event.description}
					  </p>
				  </div>
				 ))}
			 
			 </div>
			 <VideoModal link={modal} show={showModal} setModal={setShowModal}/>
		 </section>
		);
};

export default ReportView;
