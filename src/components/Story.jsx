import React from "react";
import { users } from "../cardData";
import ProfileIcon from "./ProfileIcon";
import "../style/story.scss";

const Story = () => {
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  if (accountName.length > 10) {
    accountName = accountName.substr(1, 10) + "...";
  }
  return (
    <div className="story">
      <ProfileIcon borderStory={true} imageSize="big" />
      <span>{accountName}</span>
    </div>
  );
};

export default Story;
