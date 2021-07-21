import React from "react";
import "../style/profileIcon.scss";

const ProfileIcon = (props) => {
  const { image, borderStory, imageSize } = props;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomId = getRandomInt(1, 70);

  let profileImage = image
    ? image.src
    : `https://i.pravatar.cc/150?img=${randomId}`;

  return (
    <div className={borderStory ? "border-story" : ""}>
      <img
        src={profileImage}
        alt="profile icon"
        className={`profileIcon ${imageSize}`}
      />
    </div>
  );
};

export default ProfileIcon;
