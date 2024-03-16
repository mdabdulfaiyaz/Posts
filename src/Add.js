import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Add.css";

function Add({ postData, updatePostData }) {
  const [title, setTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangePostBody = (e) => {
    setPostBody(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId: 1,
      id: postData.length + 1,
      title: title,
      body: postBody,
    };

    updatePostData((postData) => [...postData, newPost]);
    setTitle("");
    setPostBody("");
  };
  return (
    <div className="AddDiv">
      <form className="AddForm">
        <input type="text" value={title} className="AddTitle" placeholder="Add a title" onChange={handleChangeTitle}></input>
        <input type="text" value={postBody} className="AddPost" placeholder="Add a post" onChange={handleChangePostBody}></input>
        <Link className="SubmitBtn" to={"/"} onClick={handleSubmit}>
          Submit
        </Link>
      </form>
    </div>
  );
}

export default Add;
