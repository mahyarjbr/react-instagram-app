import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import Story from "./Story";
import "../style/stories.scss";

const Stories = () => {
  return (
    <div className="stories">
      <HorizontalScroll>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </HorizontalScroll>
    </div>
  );
};

export default Stories;
