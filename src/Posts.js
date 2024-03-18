import React from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

function Posts({ postData, updatePostData }) {
  

  if (!postData) {
    return <div>Loading...</div>;
  }
  const deletePost = (id) => {
    console.log(id);
    const deletePosts = postData.filter((post) => post.id !== id);
    updatePostData(deletePosts);
  };

  return (
    <div>
      {postData.map((post) => {
        return (
          <div key={post.id}>
            <Link
              className="li"
              to={`/post/${post.id}`}
              onClick={() => {
                getPostData(post.id);
              }}
            >
              <p>{post.body}</p>
            </Link>
            <Link to={`/edit/${post.id}`} className="delete-btn">
              Edit
            </Link>
            <Link
              to={`/`}
              onClick={() => {
                deletePost(post.id);
              }}
            >
              Delete
            </Link>
          </div>
        );
      })}
      <Link className="btn" to={`/Add`}>
        ADD
      </Link>
    </div>
  );
}

export default Posts;
