import React, {useContext, useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button, Input, Option, Select} from "@material-tailwind/react";
import {DatePicker} from "zaman";
import {commonDataContext} from "../../../Utilities/CommonDataProvider";
import Load from "../../Common/Load";
import Store from "../../../Controller/Administrator/Campaigns/Store";
import {toast} from "react-toastify";
import Show from "../../../Controller/Administrator/Campaigns/Show";
import Update from "../../../Controller/Administrator/Campaigns/Update";

const CampaginsEdit = () => {
    const nav = useNavigate();
    const commonData = useContext(commonDataContext);
    let [isLoading,setLoading] = useState(false);
    let [link,setLink] = useState('');
    let [category,setCategory] = useState('');
    let [enabled,setEnable] = useState('1');
    let [escape,setEscape] = useState('1');
    let [cost,setCost] = useState('3');
    const [title, setTitle] = useState('');
    const [budget, setBudget] = useState('');
    const [daily_budget, setDaily_budget] = useState('');
    let [date,setDate] = useState();
    let [oldDate,setOldDate] = useState();
    const campId = useParams().campId;
    const FetchData =async () => {
        setLoading(true);
        const fetchedData = await Show(campId);
        if (fetchedData && fetchedData !== false) {
            setCategory(fetchedData.category.id.toString())
            setEnable(fetchedData.is_enabled.toString())
            setEscape(fetchedData.is_escapable.toString())
            setCost(fetchedData.cost_mode.toString())
            setTitle(fetchedData.title)
            setBudget(fetchedData.budget)
            setDaily_budget(fetchedData.budget_daily)
            setDate(new Date(fetchedData.start_time))
            setOldDate(fetchedData.start_time)
            setLink(fetchedData.link)
            setLoading(false)
        }else{
            toast.error("پاسخی از سرور دریافت نشد." ,{rtl: true})
        }
    }

    useEffect(() => {
        FetchData();
    } , [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            "categoryId": parseInt(category),
            "title": title,
            "type": "VIDEO",
            "budget": parseInt(budget),
            "budget_daily": parseInt(daily_budget),
            "start_time": date.toISOString().split('T')[0],
            "end_time": null,
            "is_enabled": parseInt(enabled),
            "is_escapable": parseInt(escape),
            "cost_mode":parseInt(cost),
            "link":link
        }
        const res = await Update(campId , data);
        if (res && res !== false){
            toast.success('عملیات با موفقیت انجام شد.');
            nav(`/dashboard/campaigns`)
        }else{
            toast.error('خطا در انجام عملیات');
        }
        setLoading(false)

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
                                <span className={'material-symbols-outlined'}>campaign</span>
                            </div>
                            <h4 className="text-xl font-semibold text-dark mr-3">
                                ویرایش کمپین
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
                                       value={title}
                                       required/>
                            </div>
                            <div className={'sm:w-[350px] w-full'}>
                                <Input required type={'number'} className={'font-Homa text-white'} color={'blue'} variant={'standard'}
                                       value={budget}
                                       label="بودجه" onChange={e => setBudget(e.target.value)}/>
                            </div>
                            <div className={'sm:w-[350px] w-full'}>
                                <Input required type={'number'} className={'text-white'} color={'blue'} variant={'standard'}
                                       value={daily_budget}
                                       label="مصرف روزانه" onChange={e => setDaily_budget(e.target.value)}/>
                            </div>
                            <div className={'sm:w-[350px] w-full'}>
                                <Input required type={'text'} className={'text-white'} color={'blue'} variant={'standard'}
                                       value={link}
                                       label="لینک" onChange={e => setLink(e.target.value)}/>
                            </div>
                            <div
                                className={'sm:w-[350px] w-full flex justify-center items-center border-b-2  border-gray-500'}>
                                <DatePicker required locale={'fa'} round={'x2'}
                                            inputClass={'bg-secondary text-grey-500 w-full focus:border-0 focus:outline-0'}
                                            inputAttributes={{placeholder: "تاریخ شروع", color: '#1a2439'}}
                                            accentColor="#1a2439"
                                            onChange={(e) => setDate(e.value)}
                                            defaultValue={date}/>
                                <h2>تاریخ فعلی: {oldDate}</h2>
                            </div>
                            <div
                                className={'sm:w-[350px] w-full flex justify-center items-center border-b-2  border-gray-500'}>
                                <select className={'w-full bg-secondary outline-none'} required onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                        value={category}>
                                    {commonData.categories ? commonData.categories.map(item => <option key={item.id} value={item.id}
                                        >{item.name}</option>) : ''}
                                </select>
                            </div>
                            <div className={'sm:w-[350px] w-full flex justify-center items-center'}>
                                <Select required variant="static" label="وضعیت" onChange={(e) => setEnable(e)} value={enabled}
                                        className={'rtl'}>
                                    <Option value={'1'}>فعال</Option>
                                    <Option value={'0'}>غیر فعال</Option>
                                </Select>
                            </div>
                            <div className={'sm:w-[350px] w-full flex justify-center items-center'}>
                                <Select required variant="static" label="قابل رد کردن" onChange={(e) => setEscape(e)} value={escape}
                                        className={'rtl'}>
                                    <Option value={'1'}>فعال</Option>
                                    <Option value={'0'}>غیر فعال</Option>
                                </Select>
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
                        </div>
                        <Button
                            type={"submit"}
                            className="rounded mx-auto float-left sm:w-fit w-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"

                        >
                            ایجاد کمپین
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CampaginsEdit;
