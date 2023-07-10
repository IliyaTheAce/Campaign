import React, {useRef, useState} from 'react';
import Load from "../../Common/Load";
import {Button, Input, Option, Select} from "@material-tailwind/react";
import {DatePicker} from "zaman";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import Upload from "../../../Controller/Administrator/Videos/Upload";
import axios from "axios";
function UploadVideo(props) {
    const nav = useNavigate()
    const uploader = useRef();
    const [titleText , setTitleText] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const UploadFile = () => {
        const data = new FormData();
        const file = uploader.current.files[0]
        data.append('title',titleText )
        data.append('file', file)
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://adsapitest.iran.liara.run/api/contents',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            data : data
        };
        axios.request(config).then(() => {
            toast.success('عملیات با موفقیت انجام شد.');
        }).catch(() => {
            toast.error('خطا در انجام عملیات');
        })
    }
    return (
        <div className="py-2 flex flex-wrap w-full h-full">
            <Load isLoading={isLoading}/>
            <div className="px-2 w-full h-full">
                <form
                    method="post" encType={'multipart/form-data'}
                    className="mb-8 rounded-[20px] bg-secondary p-10 md:px-7 xl:px-10 h-full"
                >
                    <div className={'flex flex-col sm:flex-row items-center mb-8 w-full justify-between gap-5'}>
                        <div className={'inline-flex items-center'}>
                            <div
                                className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
                            >
                                <span className={'material-symbols-outlined'}>cloud_upload</span>
                            </div>
                            <h4 className="text-xl font-semibold text-dark mr-3">
                                آپلود ویدیو </h4>
                        </div>
                        <Button
                            onClick={() => nav('/dashboard/videos')}
                            className="mr-2 font-Homa inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                            بازگشت
                        </Button>
                    </div>
                    <div className={'w-full mt-5 flex flex-wrap gap-5 '}>
                        <div className={'w-1/4'}>
                            <Input className={'font-Homa text-white'} color={'blue'} variant={'standard'} label="عوان"
                                   onChange={(e) => setTitleText(e.target.value)}
                                   required/>
                        </div>
                        <input type={'file'} className={'hidden'} multiple={false} accept={'video/*'} ref={uploader}/>
                        <Button
                            onClick={() => uploader.current.click()}
                            className=" font-Homa inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                            انتخاب ویدیو
                        </Button>
                    </div>
                    <Button
                        onClick={() => UploadFile()}
                        className="mt-6 float-left font-Homa inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                        آپلود
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default UploadVideo;