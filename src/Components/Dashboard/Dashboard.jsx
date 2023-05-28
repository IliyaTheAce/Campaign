import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import ReportView from "./Views/ReportView";
import CampaignsView from "./Campaigns/CampaignsView";
import VideoView from "./Videos/VideoView";
import CreateCampaign from "./Campaigns/CreateCampaign";
import AccountEditing from "./Account/AccountEditing";
import NotFoundPage from "../404";
import NewReportView from "./Views/NewReportView";

const Dashboard = () => {
    return (
        <section className={'h-full'}>
            <Sidebar/>

            <div className="p-4 lg:mr-64 lg:mt-0 h-full mt-12">
                <Routes>
                    <Route path={'/'} element={
                        <NotFoundPage />
                    } />
                    <Route path={'/campaigns'} element={<CampaignsView />} exact/>
                    <Route path={'/campaigns/:campId'} element={<NewReportView />} />
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
