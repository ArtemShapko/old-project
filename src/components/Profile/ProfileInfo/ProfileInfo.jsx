import React from "react";
import Preloader from "../../common/Preolader/Preolader";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
  return (
    <div className={classes.content}>
      <div>
        <img src="https://oir.mobi/uploads/posts/2021-02/1612361336_30-p-krasnie-oblaka-anime-art-46.jpg"></img>
      </div>
      <div className={classes.descriptionBloc}>
          <img src={props.profile.photos.large}></img>
      </div>
    </div>
  );
};

export default ProfileInfo;
