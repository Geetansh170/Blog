import React, { Fragment, useContext, useEffect } from "react";
import PostItem from "./PostItem";
import BlogContext from "../../context/blog/blogContext";
import axios from "axios";

const Posts = () => {
  const blogContext = useContext(BlogContext);
  console.log(blogContext);
  const { posts, getPost } = blogContext;

  useEffect(() => {
    getPost();
  }, []);

  console.log(posts[0]);

  if (posts !== null && posts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
      {/* <div className='leftcolumn'>
        <div className='card shadow p-4 mb-4 bg-dark text-white'>
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div className='fakeimg' style={{ height: "200px" }}>
            Image
          </div>
          <p>Some text..</p>
          <p>
            , हमारा काफी बड़ा झगड़ा हो गया हालांकि हमारा झगड़ा कई बार हो चुका है
            लेकिन इतना बड़ा झगड़ा कभी भी नहीं हुआ, हमने लगभग 2 साल बात नहीं
            की..इस बीच उसकी जिदंगी मे बहुत से लोग आए जो मुझसे जयादा खास बन गए
            लेकिन मैं उसे बहुत मिस करती थी और अभी भी करती हूँ.. हमारी बात होती
            है लेकिन एक हाय हैलो वाले दोस्तों की त
          </p>
          <p>
            Likes <b>24</b>
          </p>
          <button class='btn btn-block btn-secondary' onClick={onClick1}>
            <i id='but' class='fa fa-thumbs-up'>
              Like
            </i>{" "}
          </button>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Posts;
