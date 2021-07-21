import React from "react";
import { users } from "../data";
import ProfileIcon from "./ProfileIcon";
import "../style/story.scss";

const Story = () => {
  let accountName = users[Math.floor(Math.random() * users.length)].username;
  let accountImage = users[Math.floor(Math.random() * users.length)].image;

  if (accountName.length > 10) {
    accountName = accountName.substr(1, 10) + "...";
  }
  return (
    <div className="story">
      <ProfileIcon image={accountImage} borderStory={true} imageSize="big" />
      <span>{accountName}</span>
    </div>
  );
};

export default Story;
