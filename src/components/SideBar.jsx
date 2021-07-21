import React from "react";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import { myData } from "../data";
import "../style/sideBar.scss";

const SideBar = () => {
  return (
    <Sticky topOffset={-80}>
      <div className="sideBar">
        <Profile
          hideCaptionText={false}
          username={myData.username}
          captionName={myData.captionName}
          image={myData.image}
          imageSize="big"
          buttonStatus="switch"
          borderStory={true}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
};

export default SideBar;
