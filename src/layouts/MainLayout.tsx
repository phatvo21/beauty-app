import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import SocialMediaFloat from "../components/social-media-float/SocialMediaFloat";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
      <SocialMediaFloat />
    </>
  );
};

export default MainLayout;
