import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import BlogContext from "../../context/blog/blogContext";
import Moment from "react-moment";
import "moment-timezone";

const PostItem = ({ post }) => {
  const blogContext = useContext(BlogContext);
  const { setCurrent, clearCurrent, likePost } = blogContext;

  const { _id, title, content, likes, date } = post;

  const onClick1 = () => {
    document.getElementById("but").innerHTML = "Liked";

    setCurrent(post);
    likePost(post);
    clearCurrent();
  };

  return (
    <Fragment>
      <div className='leftcolumn'>
        <div className='card shadow p-4 mb-4 bg-dark text-white'>
          <h2>{title}</h2>
          <h5>
            <Moment>{date}</Moment>
          </h5>

          {/* <p>Some text..</p> */}
          <p>{content}</p>
          <p>
            Likes <b>{likes}</b>
          </p>
          <button class='btn btn-block btn-secondary' onClick={onClick1}>
            <i id='but' class='fa fa-thumbs-up'>
              Like
            </i>{" "}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

PostItem.propTypes = {
  psot: PropTypes.object.isRequired,
};

export default PostItem;
