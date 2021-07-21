import React from "react";
import "../style/suggestions.scss";
import Profile from "./Profile";

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="suggestions__wrapper">
        <div className="suggestions__header">
          <span>suggestions for you</span>
          <a href="#">see all</a>
        </div>
        <Profile
          hideCaptionText={false}
          imageSize="medium"
          buttonStatus="follow"
          borderStory={true}
          captionName="follows you"
        />
        <Profile
          hideCaptionText={false}
          imageSize="medium"
          buttonStatus="follow"
          borderStory={true}
          captionName="follows you"
        />
        <Profile
          hideCaptionText={false}
          imageSize="medium"
          buttonStatus="follow"
          borderStory={true}
          captionName="follows you"
        />
        <Profile
          hideCaptionText={false}
          imageSize="medium"
          buttonStatus="follow"
          borderStory={true}
          captionName="follows you"
        />
        <Profile
          hideCaptionText={false}
          imageSize="medium"
          buttonStatus="follow"
          borderStory={true}
          captionName="follows you"
        />
      </div>
    </div>
  );
};

export default Suggestions;
