import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import ReportView from "./Views/ReportView";

const Dashboard = () => {
    return (
        <section>
            <Sidebar/>

            <div className="p-4 sm:mr-64">
                <Routes>
                    <Route path={'/'} element={<ReportView />} />
                    <Route path={'/campaigns'} element={<h1>campaigns</h1>} />
                    <Route path={'/create-campaign'} element={<h1>create campaign</h1>} />
                    <Route path={'/account'} element={<h1>account</h1>} />
                </Routes>
            </div>

        </section>
    );
};

export default Dashboard;
