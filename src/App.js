import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Posts from "./Posts.js";
import Body from "./Body";
import Add from "./Add";
import Edit from "./Edit";
import img from "./Assets/Batman.png";
import "./App.css";
import "./Posts.css";

function App() {
  const PostData = [
    {
      userId: 1,
      id: 1,
      title: "are or do repels provide blacked out except option criticizes",
      body: "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the trouble so that the whole\nof our things are but they are the matter will happen to the architect",
    },
    {
      userId: 1,
      id: 2,
      title: "who is being",
      body: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of pleasure, or any trouble to reject them; we shall not open to them; we shall not be able to do anything but nothing.",
    },
    {
      userId: 1,
      id: 3,
      title: "she repels troubles as if she were training, whoever she is",
      body: "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared\nhis pains further by his hatred and labor and wants or",
    },
    {
      userId: 1,
      id: 4,
      title: "and he is blinded",
      body: "by rejecting any and often to obtain pleasure\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things",
    },
    {
      userId: 1,
      id: 5,
      title: "they don't know what they hate",
      body: "Let him seek forgiveness for repudiation, but there are other things, or let him flee, but he is, but there is pleasure, we can all be pleasures; there is no pain, nor is it held",
    },
    {
      userId: 1,
      id: 6,
      title: "I will open them to great pain because",
      body: "I will open them to great Suffering",
    },
  ];

  const [Data, setData] = useState(PostData);

  return (
    <div className="container">
      <Router>
        <header className="header">
          <img src={img} className="image" alt="logo.png" />
          <Link to={"/"}>
            <h3>Posts</h3>
          </Link>
          <Link to={"/Add"}>
            <h3>Add</h3>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Posts postData={Data} updatePostData={setData} />} />
          <Route path="/post/:postId" element={<Body postData={Data} />} />
          <Route path="/edit/:editId" element={<Edit postData={Data} updatePostData={setData} />} />
          <Route path="/Add" element={<Add postData={Data} updatePostData={setData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
