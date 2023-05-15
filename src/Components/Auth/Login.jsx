import React, {useRef, useState} from 'react';
import logo from '../../assets/logo.png'
import auth from '../../Controller/Auth/Login'
import {useNavigate} from "react-router-dom";
const Login = () => {
    const [isFetchingData, setIsFetchingData] = useState(false);
    const [hasError, setHasError] = useState(false);
    const usernameInput = useRef();
    const passwordInput = useRef();
    const nav = useNavigate();
    const LoginFetch = async () => {
        setIsFetchingData(true);

        if (await auth(usernameInput.current.value, passwordInput.current.value)) {
            setIsFetchingData(false);
            nav('./dashboard')
        }else{
            setIsFetchingData(false);
            setHasError(true);
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <img
                        className="mx-auto h-16 w-auto"
                        src={logo}
                        alt="Logo"
                    />
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        ورود به حساب کاربری
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium leading-6 text-white">
                                نام کاربری
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    ref={usernameInput}
                                    required
                                    className="block w-full rounded-md bg-gray-800 border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 px-4"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-lg font-medium leading-6 text-white">
                                    رمز عبور
                                </label>
                                <div className="text-base">
                                    <a href="#" className="font-semibold text-indigo-500 hover:text-indigo-400">
                                        فراموشی رمز
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    ref={passwordInput}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md bg-gray-800 border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 px-4"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="button"
                                onClick={LoginFetch}
                                disabled={isFetchingData}
                                className={'flex mt-12 w-full justify-center items-center bg-secondary rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'}
                            >
                                ورود {isFetchingData ? <><div className={'animate-spin w-[20px] h-[20px] border-[2px] border-solid border-white rounded-full border-b-0 border-t-0 mr-2'} ></div> </> : ""}
                            </button>
                        </div>
                    </form>
                    <p className={`${hasError ? "block" : "hidden"} text-red-600 text-center mt-3`}>عملیات با خطا روبرو شد</p>
                </div>
            </div>
    );
};

export default Login;
