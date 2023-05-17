import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Button, Input} from "@material-tailwind/react";

const CreateCampaign = () => {
    const nav =useNavigate();
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
                                ایجاد کمپین جدید
                            </h4>
                        </div>
                            <Button
                                onClick={() => nav('/dashboard/campaigns')}
                                className="mr-2 font-Homa inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                بازگشت
                            </Button>
                    </div>
                    <section className={'text-left'}>
                    <div className={'p-10 flex w-full justify-start'}>
                        <div className={'w-[350px]'}>
                        <Input className={'font-Homa text-white'} color={'blue'} variant={'standard'}  label="عوان" />
                        </div>
                        <div className={'w-[350px] mr-10'}>
                        <Input type={'number'} className={'font-Homa text-white'} color={'blue'} variant={'standard'}  label="بودجه" />
                        </div>
                    </div>
                        <div className={'w-[350px] mr-10'}>
                            <Input type={'number'} className={'text-white'} color={'blue'} variant={'standard'}  label="مصرف روزانه" />
                        </div>
                        <Button className="mt-16 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                            ایجاد کمپین
                        </Button>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CreateCampaign;
