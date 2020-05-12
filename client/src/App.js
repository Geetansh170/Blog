import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Side from "./components/Side";
import Posts from "./components/post/Posts";
import BlogState from "./context/blog/BlogState";

function App() {
  return (
    <BlogState>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n* {\n  box-sizing: border-box;\n}\n\n/* Add a gray background color with some padding */\nbody {\n  font-family: Arial;\n  padding: 20px;\n  background: #f1f1f1;\n}\n\n/* Header/Blog Title */\n.header {\n  padding: 30px;\n  font-size: 40px;\n  text-align: center;\n  background: white;\n}\n\n/* Create two unequal columns that floats next to each other */\n/* Left column */\n.leftcolumn {   \n  float: left;\n  width: 75%;\n}\n\n/* Right column */\n.rightcolumn {\n  float: left;\n  width: 25%;\n  padding-left: 20px;\n}\n\n/* Fake image */\n.fakeimg {\n  background-color: #aaa;\n  width: 100%;\n  padding: 20px;\n}\n\n/* Add a card effect for articles */\n.card {\n   background-color: white;\n   padding: 20px;\n   margin-top: 20px;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n\n/* Footer */\n.footer {\n  padding: 20px;\n  text-align: center;\n  background: #ddd;\n  margin-top: 20px;\n}\n\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 800px) {\n  .leftcolumn, .rightcolumn {   \n    width: 100%;\n    padding: 0;\n  }\n}\n',
          }}
        />
        <Header />
        <div className='row'>
          <Posts />
          <Side />
        </div>
        <Footer />
      </div>
    </BlogState>
  );
}

export default App;
