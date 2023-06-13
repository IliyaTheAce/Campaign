import React, {useContext, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Input, Option, Select} from "@material-tailwind/react";
import {DatePicker} from "zaman";
import {commonDataContext} from "../../../Utilities/CommonDataProvider";
import Load from "../../Common/Load";
import {toast} from "react-toastify";
import Store from "../../../Controller/Administrator/Publishers/Store";


const CreatePublisher = () => {
	const nav = useNavigate();
	const commonData = useContext(commonDataContext);
	let [isLoading,setLoading] = useState(false);
	let [cost,setCost] = useState('1');
	const [title, setTitle] = useState('');
	const [domain, setDomain] = useState('');
	const [selectedCategories, setSelectedCategories] = useState([]);
	
	const handleSubmit =async (e) => {
		e.preventDefault();
		setLoading(true);
		const data = {
			"title": title,
			"coset_id":parseInt(cost),
			"user_id": 0,
			"domain": domain,
			"categories": selectedCategories
		}
		const res = await Store(data);
		if (res && res !== false){
			toast.success('عملیات با موفقیت انجام شد.');
			nav(`/dashboard/publishers`)
		}else{
			toast.error('خطا در انجام عملیات');
		}
		setLoading(false)
		
	}
	const handleSelect = (id) => {
		let index = selectedCategories.indexOf(parseInt(id))
		if (index < 0) {
			setSelectedCategories([...selectedCategories , parseInt(id)])
		}else{
			const updatedArray = selectedCategories.filter((item) => item !== parseInt(id));
			setSelectedCategories(updatedArray);
		}
	}
	return (
	 <div className="py-2 flex flex-wrap w-full h-full">
		 <Load isLoading={isLoading} />
		 <div className="px-2 w-full h-full">
			 <div
			  className="mb-8 rounded-[20px] bg-secondary p-10 md:px-7 xl:px-10 h-full"
			 >
				 <div className={'flex flex-col sm:flex-row items-center mb-8 w-full justify-between gap-5'}>
					 <div className={'inline-flex items-center'}>
						 <div
						  className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
						 >
							 <span className={'material-symbols-outlined'}>podcasts</span>
						 </div>
						 <h4 className="text-xl font-semibold text-dark mr-3">
							 ایجاد پخش کننده جدید
						 </h4>
					 </div>
					 <Button
					  onClick={() => nav('/dashboard/campaigns')}
					  className="mr-2 font-Homa inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
						 بازگشت
					 </Button>
				 </div>
				 <form onSubmit={handleSubmit}>
					 <div className={'text-left sm:pr-10 gap-8 flex flex-wrap mb-10'}>
						 <div className={'sm:w-[350px] w-full'}>
							 <Input className={'font-Homa text-white'} color={'blue'} variant={'standard'} label="عوان"
							        onChange={e => setTitle(e.target.value)}
							        required/>
						 </div>
						 <div className={'sm:w-[350px] w-full'}>
							 <Input className={'font-Homa text-white'} color={'blue'} variant={'standard'} label="دامنه"
							        onChange={e => setDomain(e.target.value)}
							        required/>
						 </div>
						 <div className={'sm:w-[350px] w-full flex justify-center items-center'}>
							 <Select required variant="static" label="مدل هزینه" onChange={(e) => setCost(e)} value={cost}
							         className={'rtl'}>
								 <Option value={'1'}>پخش یک چهارم</Option>
								 <Option value={'2'}>پخش نیم</Option>
								 <Option value={'3'}>پخش سه چهارم</Option>
								 <Option value={'4'}>پخش کامل</Option>
								 <Option value={'5'}>کلیک</Option>
							 </Select>
						 </div>
						 <div className={'sm:w-[350px] w-full flex justify-center items-center'}>
							 <Select variant="static" label="دسته بندی" onChange={(e) => handleSelect(e)}>
								 {commonData.categories ? commonData.categories.map((category,index) => {
									 return <Option key={index+1} value={category.id.toString()}>{category.name}</Option>}) : <Option key={0} value={''}>none</Option>}
							 </Select>
						 </div>

					 </div>
					 <div>
						 دسته بندی انتخاب شده:
						 {selectedCategories.map((category) => <p>{commonData.categories.find(cat => cat.id === category).name}</p>)}
					 </div>
					 <Button
					  type={"submit"}
					  className="rounded mx-auto float-left sm:w-fit w-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
					 
					 >
						 ایجاد پخش کننده
					 </Button>
				 </form>
			 </div>
		 </div>
	 </div>
	);
};

export default CreatePublisher;
