import React, { useEffect, useState } from "react";
import img from "../../assets/images/img.jpg";
import GridOnIcon from "@mui/icons-material/GridOn";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import "./UserProfile.scss";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState(null);

  const getSinglePost = (id) => {
    navigate(`/blog/${id}`);
  };

  useEffect(() => {
    setBlogs([
      {
        id: "1704485953356",
        userId: "1",
        image:
          '["https://firebasestorage.googleapis.com/v0/b/bloggingwebapp-b701d.appspot.com/o/image%2Fcategory-books.jpg?alt=media&token=df25c4f0-084c-4362-a18c-fed11e5e24da"]',
        title: "books bolthe",
        body: "hello from everyone the best boks you can read after soo ogn asldfkhasdf asldfhasdfl asldkf",
        category: "books",
      },
      {
        id: "1704485953356",
        userId: "1",
        image:
          '["https://firebasestorage.googleapis.com/v0/b/bloggingwebapp-b701d.appspot.com/o/image%2Fcategory-books.jpg?alt=media&token=df25c4f0-084c-4362-a18c-fed11e5e24da"]',
        title: "books bolthe",
        body: "hello from everyone the best boks you can read after soo ogn asldfkhasdf asldfhasdfl asldkf",
        category: "books",
      },
      {
        id: "1704485953356",
        userId: "1",
        image:
          '["https://firebasestorage.googleapis.com/v0/b/bloggingwebapp-b701d.appspot.com/o/image%2Fcategory-books.jpg?alt=media&token=df25c4f0-084c-4362-a18c-fed11e5e24da"]',
        title: "books bolthe",
        body: "hello from everyone the best boks you can read after soo ogn asldfkhasdf asldfhasdfl asldkf",
        category: "books",
      },
      {
        id: "1704485953356",
        userId: "1",
        image:
          '["https://firebasestorage.googleapis.com/v0/b/bloggingwebapp-b701d.appspot.com/o/image%2Fcategory-books.jpg?alt=media&token=df25c4f0-084c-4362-a18c-fed11e5e24da"]',
        title: "books bolthe",
        body: "hello from everyone the best boks you can read after soo ogn asldfkhasdf asldfhasdfl asldkf",
        category: "books",
      },
      {
        id: "1704485953356",
        userId: "1",
        image:
          '["https://firebasestorage.googleapis.com/v0/b/bloggingwebapp-b701d.appspot.com/o/image%2Fcategory-books.jpg?alt=media&token=df25c4f0-084c-4362-a18c-fed11e5e24da"]',
        title: "books bolthe",
        body: "hello from everyone the best boks you can read after soo ogn asldfkhasdf asldfhasdfl asldkf",
        category: "books",
      },
      {
        id: "1704485953356",
        userId: "1",
        image:
          '["https://firebasestorage.googleapis.com/v0/b/bloggingwebapp-b701d.appspot.com/o/image%2Fcategory-books.jpg?alt=media&token=df25c4f0-084c-4362-a18c-fed11e5e24da"]',
        title: "books bolthe",
        body: "hello from everyone the best boks you can read after soo ogn asldfkhasdf asldfhasdfl asldkf",
        category: "books",
      },
      {
        id: "1704485953356",
        userId: "1",
        image:
          '["https://firebasestorage.googleapis.com/v0/b/bloggingwebapp-b701d.appspot.com/o/image%2Fcategory-books.jpg?alt=media&token=df25c4f0-084c-4362-a18c-fed11e5e24da"]',
        title: "books bolthe",
        body: "hello from everyone the best boks you can read after soo ogn asldfkhasdf asldfhasdfl asldkf",
        category: "books",
      },
    ]);
  }, []);
  return (
    <>
      <section id="user-profile">
        <header>
          <div className="user-details">
            <div
              className="user-img"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
            <h1>Akhil Nayak</h1>
          </div>
          <div className="statistics">
            <div className="row">
              <h1>59</h1>
              <p>Posts</p>
            </div>
            <div className="row">
              <h1>158</h1>
              <p>Followers</p>
            </div>
            <div className="row">
              <h1>400</h1>
              <p>Followings</p>
            </div>
          </div>
        </header>
        <div className="divider"></div>
        <div className="user-posts-data">
          <div className="select-post-type">
            <div>
              {" "}
              <h1>
                All Posts <GridOnIcon className="icon" />
              </h1>
            </div>
            <div>
              {" "}
              <h1>
                Liked Posts <FavoriteRoundedIcon className="icon" />
              </h1>
            </div>
            <div>
              {" "}
              <h1>
                Saved Posts <BookmarkRoundedIcon className="icon" />
              </h1>
            </div>
          </div>
          <div className="divider"></div>

          <div className="cards">
            {blogs != null && (
              <>
                {blogs.map((data, index) => {
                  return (
                    <>
                      <div
                        className="card"
                        onClick={() => getSinglePost(data.id)}
                      >
                        <div
                          className="blog-img"
                          style={{ backgroundImage: `url(${img})` }}
                        ></div>
                        <div className="details">
                          <div className="row">
                            <p>Title</p>
                            <span>:</span>
                            <h1>{data.title}</h1>
                          </div>
                          <div className="row">
                            <p>Body</p>
                            <span>:</span>
                            <h1>
                              {data.body.length > 10
                                ? data.body.substring(0, 20) + "..."
                                : data.body}
                            </h1>
                          </div>
                          <div className="row">
                            <p>Category</p>
                            <span>:</span>
                            <h1>{data.category}</h1>
                          </div>
                          {/* <div className="row">
                            <p>Author</p>
                            <span>:</span>
                            <h1>{data.author}</h1>
                          </div> */}
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
    </>
  );
}

export default UserProfile;
