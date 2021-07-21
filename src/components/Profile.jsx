import React from "react";
import "../style/profile.scss";
import ProfileIcon from "./ProfileIcon";
import { users } from "../cardData";

const Profile = (props) => {
  const {
    username,
    captionName,
    hideCaptionText,
    image,
    imageSize,
    buttonStatus,
    borderStory,
  } = props;

  let accountName = username ? username: users[Math.floor(Math.random() * users.length)].username;
  return (
    <div className="profile">
      <div className="profile__icon">
        <ProfileIcon
          image={image}
          imageSize={imageSize}
          borderStory={borderStory}
        />

        {hideCaptionText ? (
          <div className="profile__content">
            <span>{accountName}</span>
          </div>
        ) : (
          <div className="profile__content">
            <span>{accountName}</span>
            <span className="profile__content-secondary">{captionName}</span>
          </div>
        )}
      </div>
      <a href="#">{buttonStatus}</a>
    </div>
  );
};

export default Profile;
