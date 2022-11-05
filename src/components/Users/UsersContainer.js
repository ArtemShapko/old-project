import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  unFollowActionCreator,
  setUserActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
  toggleIsFetchingActionCreator,
} from "../../redux/UsersPage-reducer";
import * as axios from "axios";
import Users from "./Users";
import Spin from "./../../img/Spin.svg";
import Preloader from "../common/Preolader/Preolader";

class UsersAPIComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }
  onPageChanged = (p) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page${p}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader Spin={Spin} /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

let mapStateToPropse = (state) => {
  return {
    users: state.UsersPage.usersData,
    pageSize: state.UsersPage.pageSize,
    totalUsersCount: state.UsersPage.totalUsersCount,
    currentPage: state.UsersPage.currentPage,
    isFetching: state.UsersPage.isFetching,
  };
};

const UsersContainer = connect(mapStateToPropse, {
  follow: followActionCreator,
  unFollow: unFollowActionCreator,
  setUsers: setUserActionCreator,
  setCurrentPage: setCurrentPageActionCreator,
  setTotalCount: setTotalCountActionCreator,
  toggleIsFetching: toggleIsFetchingActionCreator,
})(UsersAPIComponent);

export default UsersContainer;
