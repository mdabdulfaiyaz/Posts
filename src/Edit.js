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

  const updatingValues = (id) => {
    const updatedPosts = [...postData];
    for (let i = 0; i < updatedPosts.length; i++) {
      if (updatedPosts[i].id === id) {
        updatedPosts[i].title = title;
        updatedPosts[i].body = postBody;
      }
    }
    return updatedPosts;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updatingValues(parseInt(editId));
    updatePostData([...postData]);
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
