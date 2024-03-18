import React from "react";
import { useParams } from "react-router-dom";
import "./Body.css";

function Body({ postData }) {
  const { postId } = useParams();

  if (!postId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="BodyDiv">
      {postData.map((postBody) => {
        return postBody.id === parseInt(postId) ? (
          <div key={postBody.id}>
            <h3 className="h3">{postBody.title}</h3>
            <p>{postBody.body}</p>
          </div>
        ) : null;
      })}
     
    </div>
  );
}

export default Body;
