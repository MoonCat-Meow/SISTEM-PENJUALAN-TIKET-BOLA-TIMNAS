import Header from "./Header";
import Hero from "../Page/Hero";
import JadwalTimnas from "./JadwalTimnas";
import About from "../Page/About";
import Profile from "../Page/Profile";
import Footer from "../Page/Footer";
import { Helmet } from "react-helmet";

const Page = () => {
  return (
    <div className="pt-[85px]">
      <Helmet>
        <title>Timnas ID - User Dashboard</title>
      </Helmet>

      <Header />
      <Hero />
      <div id="jadwaltimnas1">
        <JadwalTimnas />
      </div>
      <div id="about1">
        <About />
      </div>
      <div id="profile1">
        <Profile />
      </div>
      <Footer />
    </div>
  );
};
export default Page;
