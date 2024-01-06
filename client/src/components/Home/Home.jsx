import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.scss";

function Home() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState(null);

  const getSinglePost = (id) => {
    navigate(`/blog/${id}`);
  };

  useEffect(() => {
    AOS.init();
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
    <section id="Home">
      <header>
        <div className="row" data-aos="fade-right" data-aos-duration="850">
          <h1>Unleash Your Imagination</h1>
        </div>
        <div className="row" data-aos="fade-left" data-aos-duration="850">
          <h1>Explore Our Stories.</h1>
        </div>
      </header>
      <div className="blogs">
        <div
          className="cards"
          data-aos="fade-up-right"
          data-aos-duration="850"
          data-aos-delay="300"
        >
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
                            {data.body.length > 25
                              ? data.body.substring(0, 50) + "..."
                              : data.body}
                          </h1>
                        </div>
                        <div className="row">
                          <p>Category</p>
                          <span>:</span>
                          <h1>{data.category}</h1>
                        </div>
                        <div className="row">
                          <p>Author</p>
                          <span>:</span>
                          <h1>{data.author}</h1>
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

export default Home;
