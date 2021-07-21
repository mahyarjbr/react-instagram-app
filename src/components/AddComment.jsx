import React, { useState } from "react";
import "../style/addComment.scss";

const AddComment = (props) => {
  const { allComments, setAllComments } = props;
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setAllComments([...allComments, {
      id: allComments.length + 1,
      user: "mahyarJbr",
      text: comment,
    }]);

    setComment("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="card__addComment">
      <ul>
        <div className="card__addComment__left">
          <li>
            <svg
              aria-label="Emoji"
              class="_8-yf5 "
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="24"
            >
              <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
              <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
            </svg>
          </li>
          <li>
            <input
              className="addComment__input"
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </li>
        </div>
        <li>
          <button disabled={comment.length < 1 } type="button" onClick={handleSubmit}>
            post
          </button>
        </li>
      </ul>
    </form>
  );
};

export default AddComment;
