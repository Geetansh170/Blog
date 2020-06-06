import React, {useState, Fragment ,useContext} from "react";
import BlogContext from "../context/blog/blogContext";
import FormData from 'form-data';

const Submit = (props) => {
  const blogContext = useContext(BlogContext);
  const { addPost } = blogContext;

  const [post, setPost] = useState({
    title:'',
    content:''
  });

  const onSubmit = async e => {
    e.preventDefault();
    //console.log(e.target.title.value);
    addPost(post);
    alert("new post added");
    props.history.push('/home');
  };

  const { title,content } = post;

  const onChange = e =>
    setPost({ ...post, [e.target.name]: e.target.value });

    return (
      <Fragment>
          <div>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{__html: "\nbody {font-family: Arial, Helvetica, sans-serif;}\n* {box-sizing: border-box;}\n\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\n\ninput[type=submit] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n}\n" }} />
        <h3 className="header p-3 mb-2 bg-dark text-white">Submit Blog</h3>
        <div className="container">
          <form onSubmit={onSubmit} className="bg-dark text-white">

            <label htmlFor="fname">Topic</label>
            <input type="text" name="title" placeholder="Topic..." value={title} onChange={onChange} className="bg-secondary text-white"/>
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="content" placeholder="Write something.." style={{height: '200px'}} defaultValue={""} value={content} onChange={onChange} className="bg-secondary text-white"/>
            <input type="submit" defaultValue="Submit" className="bg-secondary text-white"/>
          </form>
        </div>
      </div>
      </Fragment>
    );
};

export default Submit;
