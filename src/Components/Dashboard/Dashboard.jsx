import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import ReportView from "./Views/ReportView";
import CampaignsView from "./Campaigns/CampaignsView";
import VideoView from "./Videos/VideoView";
import CreateCampaign from "./Campaigns/CreateCampaign";
import AccountEditing from "./Account/AccountEditing";
import NotFoundPage from "../404";

const Dashboard = () => {
    return (
        <section className={'h-full'}>
            <Sidebar/>

            <div className="p-4 sm:mr-64 h-full">
                <Routes>
                    <Route path={'/'} element={
                        <div className={'text-3xl h-full w-full items-center justify-center flex flex-col'}>
                            <h1 className={'text-5xl mb-5'}>404 صفحه مورد نظر یافت نشد.</h1>
                            <p>آدرس وارد شده صحیح نیست!</p>
                        </div>
                    } />
                    <Route path={'/campaigns'} element={<CampaignsView />} exact/>
                    <Route path={'/campaigns/:campId'} element={<ReportView />} />
                    <Route path={'/create-campaign'} element={<CreateCampaign />} />
                    <Route path={'/videos'} element={<VideoView />} />
                    <Route path={'/account'} element={<AccountEditing />} />
                    <Route path={'/*'} element={<NotFoundPage />}></Route>
                </Routes>
            </div>

        </section>
    );
};

export default Dashboard;
