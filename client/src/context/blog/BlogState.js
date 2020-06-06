import React, { useReducer } from "react";
import axios from "axios";
import BlogContext from "./blogContext";
import blogReducer from "./blogReducer";
import {
  GET_POST,
  ADD_POST,
  POST_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  LIKE_POST,
} from "../types";

const BlogState = (props) => {
  const initialState = {
    posts: [],
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(blogReducer, initialState);

  // Get Posts
  const getPost = async () => {
    try {
      const res = await axios.get("/api/post");
      console.log(res.data);
      dispatch({
        type: GET_POST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add Post
  const addPost = async (post) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    

    console.log("function called");
    console.log(post);



    try {
      console.log("masti nai"); 
      const res = await axios.post("/api/post",post,config); 

      dispatch({
        type: ADD_POST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const likePost = async (post) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/api/post/like/${post._id}`, post, config);

      dispatch({
        type: LIKE_POST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Delete Contact
  // const deleteContact = async (id) => {
  //   try {
  //     await axios.delete(`/api/contacts/${id}`);

  //     dispatch({
  //       type: DELETE_CONTACT,
  //       payload: id,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: CONTACT_ERROR,
  //       payload: err.response.msg,
  //     });
  //   }
  // };

  return (
    <BlogContext.Provider
      value={{
        posts: state.posts,
        error: state.error,
        current: state.current,
        addPost,
        getPost,
        clearCurrent,
        setCurrent,
        likePost,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
