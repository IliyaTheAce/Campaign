// noinspection JSValidateTypes

import React from 'react';
import {useParams} from "react-router-dom";
import {ResponsivePie} from "@nivo/pie";

const NewReport = () => {
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
	const campId = useParams().campId;
	const chartData = [
		{
			id: "مصرف شده",
			label: "Consumed",
			value: tempData.usedBudget,
			// color: "hsla(205,87%,22%,0.89)"
		},
		{
			id: "موجود",
			label: "Available",
			value: tempData.availableBudget,
			// color: "hsl(107,70%,50%)"
		}
	];
	return (
	 <section className={'flex flex-col md:flex-wrap lg:flex-row gap-5 pt-2'}>
		 <div
		  className="flex-grow rounded-[20px] place-self-stretch bg-secondary p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 "
		 >
			 <div className={'inline-flex items-center mb-8'}>
				 <div
				  className=" flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
				 >
					 <span className={'material-symbols-outlined'}>visibility</span>
				 </div>
				 <h4 className="text-xl font-semibold text-dark mr-3">
					 بازدید امروز
				 </h4>
			 </div>
			 <p className="text-lg md:text-2xl">
				 کمپین امروز به تعداد {tempData.view} بار دیده شده
			 </p>
		 </div>
		 <div
		  className="lg:flex-grow rounded-[20px] bg-secondary p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-full"
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
					 {tempData.usedBudget} تومان از بودجه مصرف شده
					 <br/>
					 {tempData.availableBudget} تومان از بودجه باقی مانده
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
	 </section>
	);
};

export default NewReport;
