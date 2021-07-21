import React, { useState } from "react";
import "../style/cardContent.scss";

const CardContent = (props) => {
  const { username, content } = props;
 const [active,setActive]=useState(false)
  const [showContent, setShowcontent] = useState(false);
  if(parseInt(content.length) < 20){
      setShowcontent(true)
     
    }

  const handleShowContent = () => {
    setShowcontent(true);
    setActive(!active)
  };
  return (
    <div className="cardContent">
      
      <span style={active ? {display:"block"} : null} >
        <a href="#">{username}</a>
      </span>
      {showContent ? (
        <span>{content}</span>
      ) : (
        <span style={{ cursor: "pointer",fontSize:"10px" }} onClick={handleShowContent}>
          {" "}
          more...
        </span>
      )}
    </div>
  );
};

export default CardContent;
