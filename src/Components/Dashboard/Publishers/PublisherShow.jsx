import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Load from "../../Common/Load";
import Show from "../../../Controller/Administrator/Publishers/Show";
import GetEvents from "../../../Controller/Administrator/Publishers/Events";


const PublishersShow = () => {
	const [publisherData, setPublisherData] = useState({});
	const [event, setEvent] = useState([]);
	const [category, setCategory] = useState([{
		name: "فاقد دسته بندی"
	}]);
	const [isLoading, setIsLoading] = useState(true);
	const params = useParams();
	const publisherId = params.publisherId;
	const GetCostMode = (id) =>{
		switch (id){
			case 1: return "یخش یک چهارم";
			case 2: return " پخش نیم";
			case 3: return "یخش سه چهارم";
			case 4: return "یخش کامل";
			case 5: return "کلیک";
		}
	}
	const FetchingData = async () => {
		setIsLoading(true)
		const data =await Show(publisherId)
		const events =await GetEvents(publisherId);
		if (data && data !== false) {
			setPublisherData(data)
			setEvent(events);
			if (data.categories.length > 0) {
				setCategory(data.categories)
			}
		}
		setIsLoading(false)
	}

	useEffect(() => {
		FetchingData();
	}, []);
	
	if (isLoading) return <Load isLoading={isLoading}/>;
	else
	return (
	 <div className="py-2 flex flex-wrap w-full h-full">
		 
		 <div className="px-2 w-full min-h-full">
			 <div
			  className="mb-8 rounded-[20px] bg-secondary p-4 lg:p-10 shadow-md md:px-7 xl:px-10 h-full "
			 >
				 <div className={'flex flex-col lg:flex-row gap-5 items-center mb-8 w-full justify-between'}>
					 <div className={'inline-flex lg:flex-grow-0 flex-grow items-center justify-start'}>
						 <div
						  className=" flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
						 >
							 <span className={'material-symbols-outlined'}>podcasts</span>
						 </div>
						 <h4 className="text-xl font-semibold text-dark mr-3">
							 پخش کننده {publisherData.title}
						 </h4>
					 </div>
				 </div>
					 <h4> دامنه: {publisherData.domain}</h4>
					 <h4> مدل هزینه: {GetCostMode(publisherData.costId)}</h4>
					 <h4 className={'flex gap-5'}> دسته بندی ها: {category.map((item) => (item.name))}</h4>
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
		 </div>
	 </div>
	);
};

export default PublishersShow;
