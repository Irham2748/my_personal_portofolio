import "./App.css";
import Header from "./Components/Header"
import ProfilePic from "./Components/ProfilePic";
import SideBar from "./Components/SideBar";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import ProgressBar from "./Components/ProgressBar";

function App() {
  return (
    <div className="w-screen">
      <Header />
      <SideBar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3 ">
        <div className="col-span-2 p-5 mt-[90px]">
          <Introduction />
          <About />
        </div>
        <div className="hidden md:block">
          <ProgressBar />
          <ProfilePic />
        </div>
      </div>
    </div>
  );
}

export default App;
