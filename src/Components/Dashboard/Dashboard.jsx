import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import ReportView from "./Views/ReportView";
import CampaignsView from "./Campaigns/CampaignsView";
import VideoView from "./Videos/VideoView";

const Dashboard = () => {
    return (
        <section className={'h-full'}>
            <Sidebar/>

            <div className="p-4 sm:mr-64 h-full">
                <Routes>
                    <Route path={'/'} element={<h1>dashboard</h1>} />
                    <Route path={'/campaigns'} element={<CampaignsView />} />
                    <Route path={'/videos'} element={<VideoView />} />
                    <Route path={'/account'} element={<h1>account</h1>} />
                    <Route path={'/*'} element={<h1>404 no page found!</h1>}></Route>
                </Routes>
            </div>

        </section>
    );
};

export default Dashboard;
