import React, {useState} from 'react';
import VideoTableCol from "./VideoTableCol";

const tableTempContent = [
    {
        num: '1',
        title: 'ویدیو تست',
        time: '0:25',
        aspect: '1920 * 1080',
        id: '2903j134oifh',
        videoLink:'https://tecdn.b-cdn.net/img/video/Sail-Away.mp4'
    },
    {
        num: '2',
        title: 'ویدیو تست 2',
        time: '0:19',
        aspect: '1920 * 1080',
        id: '2903j111oifh',
        videoLink:'https://tecdn.b-cdn.net/img/video/Sail-Away.mp4'
    },
    {
        num: '3',
        title: 'ویدیو تست 3',
        time: '0:30',
        aspect: '1920 * 1080',
        id: '2903j1oیifh',
        videoLink:'https://tecdn.b-cdn.net/img/video/Sail-Away.mp4'
    },
    {
        num: '4',
        title: 'ویدیو تست 4',
        time: '0:45',
        aspect: '1920 * 1080',
        id: '2903j1oifh',
        videoLink:'https://tecdn.b-cdn.net/img/video/Sail-Away.mp4'
    },
]

const VideoView = () => {
const [filteredData,setFilteredData] = useState(tableTempContent)
const FilterSearch = (e) => {
    const  filter =tableTempContent.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(e.target.value)))
    setFilteredData(filter)
}
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
                                <span className={'material-symbols-outlined'}>video_library</span>
                            </div>
                            <h4 className="text-xl font-semibold text-dark mr-3">
                                ویدئو ها
                            </h4>
                        </div>
                            <input
                                type="text"
                                className="relative m-0 block w-1/6 min-w-0 rounded border border-solid border-neutral-500 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                                onChange={FilterSearch}
                                id="search"
                                placeholder="جستجو"/>
                            <button
                                type="button"
                                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                بازخوانی
                            </button>
                    </div>
                    <table className="min-w-full text-right text-sm font-light">
                        <thead className="border-b font-medium">
                        <tr>
                            <th scope="col" className="px-6 py-4">#</th>
                            <th scope="col" className="px-6 py-4">عنوان</th>
                            <th scope="col" className="px-6 py-4">زمان</th>
                            <th scope="col" className="px-6 py-4">ابعاد</th>
                            <th scope="col" className="px-6 py-4 w-1/6">عملیات</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredData ? filteredData.map((item) => (
                            <VideoTableCol key={item.id} num={item.num} title={item.title} time={item.time} aspect={item.aspect} videoLink={item.videoLink}/>
                        )) : ''}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VideoView;
