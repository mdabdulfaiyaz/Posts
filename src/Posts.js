import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Posts.css";

function Posts({ postData }) {
  const getPostData = (postsId) => {
    console.log(postsId);
  };

  if (!postData) {
    return <div>Loading...</div>;
  }
  const EditPost = (postsId) => {
    console.log(postsId);
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
            <Link
              to={`/edit/${post.id}`}
              className="delete-btn"
              onClick={() => {
                EditPost(post.id);
              }}
            >
              Edit
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
