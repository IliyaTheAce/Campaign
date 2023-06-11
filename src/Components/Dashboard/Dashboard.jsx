import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
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
		 
		 <div className="mt-12 h-full p-4 lg:mt-0 lg:mr-64">
			 <Routes>
				 <Route path={'/'} element={
					 <NotFoundPage/>
				 }/>
				 <Route path={'/campaigns'} element={<CampaignsView/>} exact/>
				 <Route path={'/campaigns/:campId'} element={<NewReportView/>}/>
				 <Route path={'/create-campaign'} element={<CreateCampaign/>}/>
				 <Route path={'/videos'} element={<VideoView/>}/>
				 <Route path={'/account'} element={<AccountEditing/>}/>
				 <Route path={'/*'} element={<NotFoundPage/>}></Route>
			 </Routes>
		 </div>
	 
	 </section>
	);
};

export default Dashboard;
