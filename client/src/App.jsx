import { Routes, Route } from "react-router-dom";
import Navbar from "./reUsedComponents/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import AddPost from "./components/addPost/AddPost.jsx";
import UserProfile from "./components/userProfile/UserProfile.jsx";

import "./App.scss";
import SingleBlog from "./components/singleBlog/SingleBlog.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addpost" element={<AddPost />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/blog/:blogId" element={<SingleBlog />} />
      </Routes>
    </>
  );
}

export default App;
