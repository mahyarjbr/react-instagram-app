import React from "react";
import Stories from "./Stories";
import "../style/cards.scss";
import Card from "./Card";
import {cardsData} from "../data";

const Cards = () => {
  return (
    <div className="cards">
      <Stories />
      {cardsData.map((item) => (
        <Card
          key={item.id}
          username={item.username} 
          profileImage={item.profileImage}
          likes={item.likes}
          content={item.content}
          images={item.images}
          comments={item.comments}
          borderStory={true}
          time={item.time}
        />
      ))}
    </div>
  );
};

export default Cards;
