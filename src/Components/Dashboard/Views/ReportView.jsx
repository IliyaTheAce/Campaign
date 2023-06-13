import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ResponsivePie} from "@nivo/pie";
import Show from "../../../Controller/Administrator/Campaigns/Show";
import Load from "../../Common/Load";
import {Button} from "@material-tailwind/react";
import VideoModal from "../Videos/VideoModal";
import {toast} from "react-toastify";
import GetEvents from "../../../Controller/Administrator/Campaigns/Events";


const ReportView = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const campId = useParams().campId;
	const [showModal, setShowModal] = useState(false);
	const [modal, setModal] = useState('');
	const [chartData, setChartData] = useState([]);
	const [event, setEvent] = useState([]);
	const FetchData = async function () {
		setIsLoading(true);
		
		const fetchedData = await Show(campId);
		const eventData = await GetEvents(campId);
		if (fetchedData && fetchedData !== false) {
			setData(fetchedData);
			setEvent(eventData)
			const chart = [
				{
					id: "بودجه",
					label: "Consumed",
					value: fetchedData.budget,
				},
				{
					id: "مصرف روزانه",
					label: "Available",
					value: fetchedData.budget_daily,
				}
			];
			setChartData(chart);
		setIsLoading(false)
		}else{
			toast.error("پاسخی از سرور دریافت نشد." ,{rtl: true})
		}
	}
	
	useEffect(() => {
		FetchData();
	}, []);
	
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
					 <thead>
					 <tr className={''}>
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
				 <table className="min-w-full text-right text-sm font-light ">
					 <thead className="border-b font-medium">
					 <tr>
						 <th scope="col" className="px-6 py-4">#</th>
						 <th scope="col" className="px-6 py-4">عنوان رویداد</th>
						 <th scope="col" className="px-6 py-4">آی پی</th>
						 <th scope="col" className="px-6 py-4">هزینه</th>
					 </tr>
					 </thead>
					 <tbody>
					 {event.map((item, index) => (
					  <tr className="border-b">
						  <td className="whitespace-nowrap px-6 py-4 font-medium">{index +1 }</td>
						  <td className="whitespace-nowrap px-6 py-4">{item.event_name}</td>
						  <td className="whitespace-nowrap px-6 py-4">{item.ip}</td>
						  <td className="whitespace-nowrap px-6 py-4">{item.cost}</td>
					  
					  </tr>
					 ))}
					 </tbody>
				 </table>

			 
			 </div>
			 <VideoModal link={modal} show={showModal} setModal={setShowModal}/>
		 </section>
		);
};

export default ReportView;
