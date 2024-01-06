import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img from "../../assets/images/img.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import "./SingleBlog.scss";

function SingleBlog() {
  const params = useParams();
  const [isLike, setIsLike] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [blog, setBlog] = useState(null);
  const [postComments, setPostComment] = useState(null);
  const [inputCommentVal, setInputCommentVal] = useState("");

  const handleIsLike = () => {
    if (isLike) {
      setIsLike(false);
    } else {
      setIsLike(true);
    }
  };

  const handleAddComment = () => {
    if (inputCommentVal.length < 2) {
      alert("add propoer comment recommended !");
      return;
    }
    setPostComment((prev) => [
      ...prev,
      {
        id: "",
        userId: "",
        postId: "",
        likes: "",
        postedOn: "today",
        comment: inputCommentVal,
      },
    ]);
    setInputCommentVal("");
  };

  const handleSave = () => {
    if (isSave) {
      setIsSave(false);
    } else {
      setIsSave(true);
    }
  };

  const fetchData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify([
      {
        column: "email",
        value: "mounika@mounika.com",
      },
      {
        column: "password",
        value: "mounika",
      },
    ]);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let result = await fetch(
      "http://localhost:4000/v1/users/login",
      requestOptions
    );
    if (!result.ok) {
      const error = await result.text();
      console.log(error);
      return;
    }

    const data = await result.json();
    console.log(data);
  };

  useEffect(() => {
    setBlog({
      id: "1704485953356",
      userId: "1",
      image:
        '["https://firebasestorage.googleapis.com/v0/b/bloggingwebapp-b701d.appspot.com/o/image%2Fcategory-books.jpg?alt=media&token=df25c4f0-084c-4362-a18c-fed11e5e24da"]',
      title: "books bolthe",
      body: "hello from everyone the best boks you can read after soo ogn asldfkhasdf asldfhasdfl asldkf",
      category: "books",
      postedOn: "dec 15th 2023",
    });
    setPostComment([
      {
        id: "",
        userId: "",
        postId: "",
        likes: "",
        postedOn: "today",
        comment: "asdfasdfasdf asdf",
      },
      {
        id: "",
        userId: "",
        postId: "",
        likes: "",
        postedOn: "today",
        comment: "asdfasdfasdf asdf",
      },
      {
        id: "",
        userId: "",
        postId: "",
        likes: "",
        postedOn: "today",
        comment: "asdfasdfasdf asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf",
      },
    ]);
    fetchData();
  }, []);

  return (
    <section id="single-blog">
      <header>
        <div className="author">
          <div
            className="author-img"
            title="show profile"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <h1>Akhil Nayak</h1>
        </div>
        <button>Follow</button>
      </header>
      <div
        className="blogImage"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="content">
        <div className="heading">
          <h1>
            {/* Books Bolthe <span>posted on : {blog.postedOn}</span> */}
            Books Bolthe <span>posted on : fetch data</span>
          </h1>
          <div className="links">
            {!isLike ? (
              <div className="icon" onClick={() => handleIsLike()}>
                <FavoriteBorderIcon className="icon" />
              </div>
            ) : (
              <div className="icon" onClick={() => handleIsLike()}>
                <FavoriteRoundedIcon className="icon like" />
              </div>
            )}

            <div
              className="icon"
              onClick={() =>
                window.scrollTo({
                  top: 1300,
                  behavior: "smooth",
                })
              }
            >
              <ChatBubbleOutlineIcon className="icon" />
            </div>
            {!isSave ? (
              <div className="icon" onClick={() => handleSave()}>
                <BookmarkBorderIcon className="icon" />
              </div>
            ) : (
              <div className="icon" onClick={() => handleSave()}>
                <BookmarkRoundedIcon className="icon" />
              </div>
            )}
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in
          consequatur mollitia quis asperiores dolor sunt, blanditiis aperiam
          accusantium, deleniti recusandae harum atque quos fugit tempore,
          itaque cum corrupti dolores ducimus fugiat aspernatur voluptate unde
          voluptatem? Atque, vel laborum molestias maiores, totam libero optio
          soluta, ex quo nobis ullam tenetur modi neque odio. Eligendi magnam,
          suscipit magni iure nobis animi harum! Fugiat necessitatibus atque
          rerum? Accusantium, veritatis blanditiis vel sapiente sint magnam
          incidunt totam culpa ducimus facere provident, quia aliquid? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ullam in
          consequatur mollitia quis asperiores dolor sunt, blanditiis aperiam
          accusantium, deleniti recusandae harum atque quos fugit tempore,
          itaque cum corrupti dolores ducimus fugiat aspernatur voluptate unde
          voluptatem? Atque, vel laborum molestias maiores, totam libero optio
          soluta, ex quo nobis ullam tenetur modi neque odio. Eligendi magnam,
          suscipit magni iure nobis animi harum! Fugiat necessitatibus atque
          rerum? Accusantium, veritatis blanditiis vel sapiente sint magnam
          incidunt totam culpa ducimus facere provident, quia aliquid?
        </p>
      </div>
      <div className="comment">
        <header>
          <h1>Comments</h1>
        </header>
        <div className="input">
          <textarea
            placeholder="Share your comment"
            cols="30"
            rows="10"
            value={inputCommentVal}
            onChange={(e) => setInputCommentVal(e.target.value)}
          ></textarea>
          <button onClick={() => handleAddComment()}>Add Comment</button>
        </div>
        <div className="comment-data">
          {postComments != null && (
            <>
              {postComments.map((data, index) => {
                return (
                  <>
                    <div className="card">
                      <p>{data.comment}</p>
                      <div className="bottom-content">
                        <div className="row">
                          <p>author :</p>
                          <h1>fetch auth</h1>
                        </div>
                        <div className="row">
                          <p>{data.postedOn}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default SingleBlog;
