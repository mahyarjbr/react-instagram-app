import React, { useState } from "react";
import "../style/card.scss";
import Profile from "./Profile";
import CardIcons from "./CardIcons";
import CardContent from "./CardContent";
import Comments from "./Comments";
import CardImage from "./CardImage";
import AddComment from "./AddComment";

const Card = (props) => {
  const { username, borderStory, images, comments, likes, time,content ,profileImage } = props;

  const [totalLikes,setTotalLikes]=useState(parseInt(likes))
  const [allComments,setAllComments]=useState(comments)
  const [showAllComments,setShowAllComments]=useState(false)
  const handleShowAllComments=(e) =>{
    e.preventDefault()
    setShowAllComments(true)
  }
  return (
    <div className="card">
      <div className="card__header">
        <Profile
          imageSize="medium"
          borderStory={borderStory}
          username={username}
          image={profileImage}
        />
        <div>
          <svg
            aria-label="More options"
            class="_8-yf5 "
            fill="#262626"
            height="16"
            role="img"
            viewBox="0 0 48 48"
            width="16"
          >
            <circle
              clip-rule="evenodd"
              cx="8"
              cy="24"
              fill-rule="evenodd"
              r="4.5"
            ></circle>
            <circle
              clip-rule="evenodd"
              cx="24"
              cy="24"
              fill-rule="evenodd"
              r="4.5"
            ></circle>
            <circle
              clip-rule="evenodd"
              cx="40"
              cy="24"
              fill-rule="evenodd"
              r="4.5"
            ></circle>
          </svg>
        </div>
      </div>
      <CardImage  images={images} />
      <div className="card__content">
        <CardIcons totalLikes={totalLikes} setTotalLikes={setTotalLikes} />
        <div className="card__likes">
          <span>{totalLikes} likes</span>
        </div>
        <CardContent username={username} content={content} />
        <div className="card__comments">
          {showAllComments ? (allComments.map((comment) => (
            <Comments userComment={comment.user} commentText={comment.text} key={comment.id} />
          ))) : (
            <>
            <span style={{cursor:"pointer" ,fontSize:"10px" ,color:"#8e8e8e"}} onClick={(e) => handleShowAllComments(e)}>{`View all ${allComments.length} comments`}</span>
            <Comments userComment={allComments[0].user} commentText={allComments[0].text} key={allComments[0].id} />
            <Comments userComment={allComments[1].user} commentText={allComments[1].text} key={allComments[1].id} />
            </>
          )}
          
        </div>
        <div className="card__time">{time}</div>
      </div>
      <AddComment allComments={allComments} setAllComments={setAllComments} />
    </div>
  );
};

export default Card;
