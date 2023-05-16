import React, {useEffect, useState} from 'react';
import CampaignsTableCol from "./campaignsTableCol";
import axios from "axios";
import campaignsTableCol from "./campaignsTableCol";


const tableTempContent = [
    {
        num: '1',
        title: 'کمپین تست',
        start: '1402/2/17',
        budget: '2000000 تومان',
        status: 'فعال',
        id: '2903j1oifh'
    },
    {
        num: '2',
        title: 'کمپین تست 2',
        start: '1402/1/25',
        budget: '500000 تومان',
        status: 'غیز فعال',
        id: '2903j1oifh'
    },
    {
        num: '3',
        title: 'کمپین تست 3',
        start: '1401/11/10',
        budget: '1300000 تومان',
        status: 'فعال',
        id: '2903j1oifh'
    },
    {
        num: '4',
        title: 'کمپین تست 4',
        start: '1401/12/6',
        budget: '800000 تومان',
        status: 'غیز فعال',
        id: '2903j1oifh'
    },
]

const CampaignsView = () => {
    const [campaignsData, setCampaignsData] = useState(tableTempContent);
    const [isLoading, setIsLoading] = useState(true);
    const FetchingData = () => {
        setIsLoading(true)
        //Delete line below for production
        console.log('FetchingData')
        setCampaignsData(tableTempContent)

        return;
    axios.get('/campaigns').then(res => {
        if (res.status === 200){
            setCampaignsData(res.data);
        }
    })
        setIsLoading(false)
    }

    useEffect(() => {
        FetchingData();
    }, []);


    return (
        <div className="py-2 flex flex-wrap w-full h-full">
            <div className="px-2 w-full h-full">
                <div
                    className="mb-8 rounded-[20px] bg-secondary p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-full"
                >
                    <div className={'inline-flex items-center mb-8 w-full justify-between'}>
                        <div className={'inline-flex items-center'}>
                        <div
                            className=" flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
                        >
                            <span className={'material-symbols-outlined'}>campaign</span>
                        </div>
                        <h4 className="text-xl font-semibold text-dark mr-3">
                            کمپین ها
                        </h4>
                        </div>
                        <div>
                        <button
                            type="button"
                            onClick={FetchingData}
                            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                            بازخوانی
                        </button>
                        <button
                            type="button"
                            className="mr-2 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                            اینجاد کمپین جدید
                        </button>
                        </div>
                    </div>
                    <table className="min-w-full text-right text-sm font-light">
                        <thead className="border-b font-medium">
                        <tr>
                            <th scope="col" className="px-6 py-4">#</th>
                            <th scope="col" className="px-6 py-4">عنوان</th>
                            <th scope="col" className="px-6 py-4">شروع</th>
                            <th scope="col" className="px-6 py-4">بودجه مانده</th>
                            <th scope="col" className="px-6 py-4">وضعیت</th>
                            <th scope="col" className="px-6 py-4 w-1/6">عملیات</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableTempContent.map((item) => (
                            <CampaignsTableCol key={item.id} num={item.num} title={item.title} start={item.start} budget={item.budget} status={item.status} />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CampaignsView;
