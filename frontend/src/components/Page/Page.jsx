import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About";
import Profile from "./Profile";
import JadwalTimnas from "./JadwalTimnas";

const Page = () => {
  return (
    <div className="pt-[85px]">
      <Header />
      <Hero />
      <div id="jadwaltimnas">
        <JadwalTimnas />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="profile">
        <Profile />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
