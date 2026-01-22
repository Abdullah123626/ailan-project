import React from "react";
import { Route, Routes } from "react-router-dom";
import Post from "./Components/AD/AD";
import Head from "./Components/AdsDetailspage/Adsdetails";
import Postsell from "./Components/PostAd/Postad";
import Chat from "./Components/Chat/Chat";
import MyProfile from "./Components/ProfilePage/ProfilePage";
import Myadsfavourities from "./Components/Favourities/Myadsfavourities";
import Termsandconditions from "./Components/Termsconditions/Termsandconditions";
import Privacypolicy from "./Components/Privcypolicy/Privacypolicy";
import Page from "./Components/Error/Page";
import Help from "./Components/Help/Help";
import Settings from "./Components/Seetings/Settings";
import Landingpage from "./Components/Landingpage/Landingpage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import Adsdetails from "./Components/AdsDetailspage/Adsdetails";
import Postad from "./Components/PostAd/Postad";
import AD from "./Components/AD/AD";
import Myads from "./Components/Myads/Myads";
import Header from "./Components/Header/Header";
import Categories from "./Components/Categories/Categories";
import Verification from "./Components/Verificication/Verification";
import Otpverify from "./Components/OTPVerify/Otpverify";
import Login from "./Components/Login/Login";
import Create from "./Components/Create/Create";
import Forget from "./Components/Forget/Forget";
import Newpassword from "./Components/Newpasswordd/Newpassword";
import Profile from "./Components/PROFILE/Profile";

const App = () => {
  return (
    <div>

      <Header/>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/Adsdetails" element={<Adsdetails />} />
        <Route path="/ProfilePage" element={<ProfilePage/>}/>
        <Route path="/Chat" element={<Chat/>}/>
        <Route path="/Postad" element={<Postad/>}/>
        <Route path="/AD" element={<AD/>}/>
        <Route path="/Myads" element={<Myads/>}/>
        <Route path="/Error" element={<Error/>}/>
        <Route path="/Settings" element={<Settings/>}/>
        <Route path="/Help" element={<Help/>}/>
        <Route path="/Termsandconditions" element={<Termsandconditions/>}/>
        <Route path="/Privacypolicy" element={<Privacypolicy/>}/>
                <Route path="/Profile" element={<Profile/>}/>

      </Routes>
    </div>
  );
};

export default App;
