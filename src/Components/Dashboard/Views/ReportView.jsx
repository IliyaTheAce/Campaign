import React from 'react';
import {ResponsivePie} from "@nivo/pie";

 const ReportView = () => {
     const chartData = [
         {
             id: "مصرف شده",
             label: "Consumed",
             value: 200000,
             color: "hsla(205,87%,22%,0.89)"
         },
         {
             id: "موجود",
             label: "Available",
             value: 1000000,
             color: "hsl(107,70%,50%)"
         }
     ];
    return (
        <>
            <div className={'flex flex-row'}>
            <div className="my-4 flex flex-wrap w-1/3">
                <div className="px-4 w-full">
                    <div
                        className="mb-8 rounded-[20px] bg-secondary p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-full "
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
                        <p className="text-2xl">
کمپین ها امروز به تعداد 185 بار دیده شده
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-4 flex flex-wrap w-2/3">
                <div className="px-4 w-full">
                    <div
                        className="mb-4 rounded-[20px] bg-secondary p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-full"
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
                        <div className={'flex'}>
                        <p className="flex text-2xl leading-10 items-center">
                            200000 تومان از بودجه مصرف شده
                            <br/>
                            1000000 تومان از بودجه باقی مانده
                        </p>
                            <div className={'w-[400px] h-[200px] text-black mr-10'}>
                            <ResponsivePie

                                data={chartData}
                                height={'200'}
                                width={'300'}
                                margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
                                innerRadius={0.7}
                                padAngle={2}
                                colors={{ scheme: 'set2' }}
                                cornerRadius={5}
                                activeOuterRadiusOffset={8}
                                enableArcLinkLabels={false}
                                enableArcLabels={false}
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="my-4 flex flex-wrap w-full h-[400px]">
                <div className="px-4 w-full h-full">
                    <div
                        className="mb-8 rounded-[20px] bg-secondary p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-full"
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
                        <p className="text-2xl">
                            رویدادی برای امروز ثبت نشده!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReportView;
