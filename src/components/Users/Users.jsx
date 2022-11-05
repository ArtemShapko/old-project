import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Users.module.css";

const Users = (props) => {
  let pegesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pegesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={classes.container}>
        <div>
          {pages.map((p) => {
            return (
              <span
                onClick={(e) => props.onPageChanged(p)}
                className={props.currentPage === p && classes.currentPage}
              >
                {p}
              </span>
            );
          })}
        </div>
        <div></div>
        {props.users.map((u) => (
          <div>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className={classes.img}
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mS56D7F_JYlo0zMxIOvCjfwmn5q6uNdBDEpHzbK0OT5SYq3GeXOxiXp4S83DcXmMgCw&usqp=CAU"
                  }
                ></img>
              </NavLink>
            </div>
            <div>{u.name}</div>
            <div>
              {/* <span>{ u.location.country }, </span>
                            <span>{ u.location.city }</span> */}
              <div>{u.status}</div>
              <div>
                {u.followed ? (
                  <button onClick={() => props.unFollow(u.id)}>
                    {" "}
                    UnFollow{" "}
                  </button>
                ) : (
                  <button onClick={() => props.follow(u.id)}> Follow </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
