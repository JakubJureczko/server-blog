import React from "react";
import "./App.css";
import SocialMedia from "./components/socialmedia/SocialMedia";
import BlogCard from "./components/blogcard/BlogCard";
import Filter from "./components/filter/Filter";
import Arrow from "./components/arrow/Arrow";
import ScrollArrow from "./components/Scroll/Scroll";
import Blogs from "./components/blogs/Blogs";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Filter />
        <div className="mainwrapper">
          <BlogCard />
        </div>
        <div className="phone">
          <div className="ar2">
            <Arrow />
          </div>
          <div className="so2">
            <SocialMedia />
          </div>
        </div>
      </div>

      <div className="secondContainer">
        <h1>MUSIC BLOG</h1>
        <p>
          This blog was created for music lovers. New albums coming everyday.
          Don't miss them. You can find a collection of outstanding albums from
          various genres. Stay tuned!!!{" "}
        </p>
        <p className="hidden">
          Don't hesitate to checkout our social media and YouTube channel.
        </p>
        <div className="blogs">
          <Blogs />
        </div>
        <div className="arrowcont">
          <ScrollArrow />
          <Arrow />
        </div>
        <div className="socialMedia">
          <SocialMedia className="ikonki" />
        </div>
      </div>
    </div>
  );
}

export default App;
