import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [selectedId, setSelectedId] = useState("home");

  const sideBarData = {
    mainTabs: [
      {
        head: "Home",
        icon: "home",
      },
      {
        head: "Explore",
        icon: "explore",
      },
      {
        head: "Shorts",
        icon: "bolt",
      },
      {
        head: "Subscriptions",
        icon: "subscriptions",
      },
    ],
    externalTabs: [
      {
        head: "Library",
        icon: "video_library",
      },
      {
        head: "History",
        icon: "history",
      },
      {
        head: "Your Videos",
        icon: "smart_display",
      },
      {
        head: "Watch Later",
        icon: "browse_gallery",
      },
      {
        head: "Liked Vides",
        icon: "thumb_up_off",
      },
    ],
    channels: [
      {
        logo: "https://yt3.ggpht.com/_SQKtbdn1Xv6vkV_OX5D1jTNQY2SAQ5Gq-WSPlTbc8h5qMHQ3dnwpSXlpq8ADikltH3zC9KC5A=s176-c-k-c0x00ffffff-no-rj-mo",
        name: "DanTDM",
        id: "DanTDM",
      },
      {
        logo: "https://yt3.googleusercontent.com/ytc/AL5GRJXjrfspJ8wxKzvK-Q9qRfQGRPFGj1OfJGzDDDOp=s176-c-k-c0x00ffffff-no-rj-mo",
        name: "Web Dev Simplified",
        id: "WebDevSimplified",
      },
      {
        logo: "https://yt3.ggpht.com/enCm_e7ZPtI3_4OlcquaFGPr3v568gpI9Xp6625x6Dbuivx0jb2AKnIAGyDVIEmjpwmlMcXQ5Q=s48-c-k-c0x00ffffff-no-rj",
        name: "Raiyuden",
        id: "Raiyuden",
      },
      {
        logo: "https://yt3.googleusercontent.com/ytc/AL5GRJWLa7d3bmFC47nGIqrHrOIb5AvbpLVyZeyM7D0n=s176-c-k-c0x00ffffff-no-rj-mo",
        name: "ヨルシカ / n-buna Official ",
        id: "ヨルシカ/n-bunaOfficial ",
      },
      {
        logo: "https://yt3.ggpht.com/ytc/AL5GRJVBe7w6rN1a8k0AXrL78dbFcylII5iCKft0GXsb4Q=s176-c-k-c0x00ffffff-no-rj",
        name: "Avicii",
        id: "Avicii",
      },
      {
        logo: "https://yt3.googleusercontent.com/ytc/AL5GRJUdaIE34Ium7zopppZ6g09fgn2yldgnaQ4nZEpqFQ=s176-c-k-c0x00ffffff-no-rj-mo",
        name: "theRadBrad",
        id: "theRadBrad",
      },
    ],
    explore: [
      {
        head: "Films",
        icon: "theaters",
      },
      {
        head: "Gaming",
        icon: "sports_esports",
      },
      {
        head: "Live",
        icon: "sensors",
      },
      {
        head: "Fashion & Beauty",
        icon: "styler",
      },
      {
        head: "Learning",
        icon: "lightbulb",
      },
      {
        head: "Sports",
        icon: "sports_soccer",
      },
    ],
    moreYoutubes: [
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
        name: "Youtube Premium",
      },
      {
        logo: "https://img.utdstc.com/icon/da1/075/da10758eb49eee15e14de4b0d4ac121ad41f44878ef403c6f8af704a8d7b4f49:200",
        name: "Creator Studio",
      },
      {
        logo: "https://seeklogo.com/images/Y/youtube-music-logo-50422973B2-seeklogo.com.png",
        name: "Youtube Music",
      },
      {
        logo: "https://seeklogo.com/images/Y/youtube-kids-logo-40C22D4579-seeklogo.com.png",
        name: "Youtube Kids",
      },
      {
        logo: "https://play-lh.googleusercontent.com/HPyYXe-ToibRPGtFd4Ni4gi7RVfpkj4s8HwtC6fhDPqO7JfkF1-ld2SYFdzOQh-9zXU",
        name: "Youtube TV",
      },
    ],
    settings: [
      {
        head: "Settings",
        icon: "settings",
      },
      {
        head: "Report History",
        icon: "flag",
      },
      {
        head: "Help",
        icon: "help",
      },
      {
        head: "Send Feedback",
        icon: "sms_failed",
      },
    ],
  };

  return (
    <>
      <div className="sidebarSection close" id="sidebarContainer">
        <div className="miniSidebar" id="miniSidebar">
          {sideBarData.mainTabs.map((tab, i) => {
            return (
              <div
                key={i}
                className={`miniSidebarTab ${
                  tab.icon === selectedId && "active"
                }`}
                onClick={() => setSelectedId(tab.icon)}
              >
                <span className="material-symbols-rounded">{tab.icon}</span>
                <p>{tab.head}</p>
              </div>
            );
          })}
        </div>
        <div className="sidebarContainer" id="sidebarContainer">
          <div className="sideBarTabs">
            <div className="tabContainer">
              {sideBarData.mainTabs.map((tab, i) => {
                return (
                  <div
                    key={i}
                    className={`sidebarTab ${
                      tab.icon === selectedId && "active"
                    }`}
                    onClick={() => setSelectedId(tab.icon)}
                  >
                    <span className="material-symbols-rounded">{tab.icon}</span>
                    {tab.head}
                  </div>
                );
              })}
            </div>
            <div className="horizontalLine" style={{ margin: "10px 0" }}></div>
            <div className="tabContainer">
              {sideBarData.externalTabs.map((tab, i) => {
                return (
                  <div
                    key={i}
                    className={`sidebarTab ${
                      tab.icon === selectedId && "active"
                    }`}
                    onClick={() => setSelectedId(tab.icon)}
                  >
                    <span className="material-symbols-rounded">{tab.icon}</span>
                    {tab.head}
                  </div>
                );
              })}
            </div>
            <div className="horizontalLine" style={{ margin: "10px 0" }}></div>
            <div className="subscriptions">
              <h2 className="mainSidebarHead">Subscriptions</h2>
              {sideBarData.channels.map((tab) => {
                return (
                  <div className="channelTab" key={tab.logo}>
                    <img src={tab.logo} alt={tab.logo} />
                    <p>{tab.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="horizontalLine" style={{ margin: "10px 0" }}></div>
            <div className="explore">
              <h2 className="mainSidebarHead">Explore</h2>
              {sideBarData.explore.map((tab) => {
                return (
                  <div className="sidebarTab" key={tab.head}>
                    <span className="material-symbols-rounded">{tab.icon}</span>
                    {tab.head}
                  </div>
                );
              })}
            </div>
            <div className="horizontalLine" style={{ margin: "10px 0" }}></div>
            <div className="moreYoutube">
              <h2 className="mainSidebarHead">More on Youtube</h2>
              {sideBarData.moreYoutubes.map((tab) => {
                return (
                  <div className="youtubeTabs" key={tab.logo}>
                    <img src={tab.logo} alt={tab.logo} />
                    <p>{tab.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="horizontalLine" style={{ margin: "10px 0" }}></div>
            <div className="tabContainer">
              {sideBarData.settings.map((tab, i) => {
                return (
                  <div
                    key={i}
                    className={`sidebarTab ${
                      tab.icon === selectedId && "active"
                    }`}
                    onClick={() => setSelectedId(tab.icon)}
                  >
                    <span className="material-symbols-rounded">{tab.icon}</span>
                    {tab.head}
                  </div>
                );
              })}
            </div>
            <div className="horizontalLine" style={{ margin: "10px 0" }}></div>

            <div className="sidebarBottomLinks">
              <Link to="/">About</Link>
              <Link to="/">Press</Link>
              <Link to="/">Copyright</Link>
              <Link to="/">Contact</Link>
              <Link to="/">Creator</Link>
              <Link to="/">Advertise</Link>
              <Link to="/">Developers</Link>
            </div>
            <div className="sidebarBottomLinks">
              <Link to="/">Terms</Link>
              <Link to="/">Privacy</Link>
              <Link to="/">Policy &amp; Safety</Link>
              <Link to="/">How Youtube works</Link>
              <Link to="/">Test new features</Link>
              <h3>&copy; Teenage Programmer</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
