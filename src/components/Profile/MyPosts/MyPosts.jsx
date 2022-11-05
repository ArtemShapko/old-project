import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.postData.map((currentValue) => (
    <Post message1={currentValue.post} like={currentValue.like}></Post>
  ));
  let newPostElement = React.createRef();
  const addPost = () => {
    props.onAddPost();
  };
  let PostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.content}>
      <div>PY POST</div>
      <div>
        <div>
          <input
            onChange={PostChange}
            ref={newPostElement}
            value={props.newPostText}
          ></input>
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};
export default MyPosts;
