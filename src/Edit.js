import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Edit.css";

function Edit({ postData, updatePostData }) {
  const [title, setTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { editId } = useParams();

  if (!editId || !postData) {
    return <div>Loading...</div>;
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangePostBody = (e) => {
    setPostBody(e.target.value);
  };

  const updatingValues = (id, title, postBody) => {
    const updatedPosts = postData.map((post) => {
      if (post.id === id) {
        if (title !== "") {
          post.title = title;
        }
        if (postBody !== "") {
          post.body = postBody;
        }
      }
      return post;
    });

    return updatedPosts;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPosts = updatingValues(parseInt(editId), title, postBody);
    updatePostData(updatedPosts);
  };

  return (
    <div className="AddDiv">
      {postData.map((post) => {
        return post.id === parseInt(editId) ? (
          <div key={post.id}>
            <form className="AddForm">
              <input type="text" defaultValue={post.title} className="AddTitle" placeholder="Add a title" onChange={handleChangeTitle}></input>
              <input type="text" defaultValue={post.body} className="AddPost" placeholder="Add a post" onChange={handleChangePostBody}></input>
              <Link className="SubmitBtn" to={"/"} onClick={handleSubmit}>
                Submit
              </Link>
            </form>
          </div>
        ) : null;
      })}
    </div>
  );
}

export default Edit;
