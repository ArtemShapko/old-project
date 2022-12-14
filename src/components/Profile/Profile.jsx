import React from "react";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer></MyPostsContainer>
    </div>
  );
};

export default Profile;
