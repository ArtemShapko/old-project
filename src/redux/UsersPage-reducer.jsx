const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET_USERS";
const SETCURRENTPAGE = "SET_CURRENT_PAGE";
const SETTOTALCOUNT = "SET_TOTAL_COUNT";
const TOGGLEISFETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

export const UsersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SETUSERS: {
      return {
        ...state,
        usersData: [...state.usersData, ...action.usersData],
      };
    }
    case SETCURRENTPAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SETTOTALCOUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }
    case TOGGLEISFETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
};
export const followActionCreator = (userId) => {
  return {
    type: FOLLOW,
    userId: userId,
  };
};

export const unFollowActionCreator = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  };
};
export const setUserActionCreator = (usersData) => {
  return {
    type: SETUSERS,
    usersData: usersData,
  };
};
export const setCurrentPageActionCreator = (currentPage) => {
  return {
    type: SETCURRENTPAGE,
    currentPage: currentPage,
  };
};
export const setTotalCountActionCreator = (totalUsersCount) => {
  return {
    type: SETTOTALCOUNT,
    totalUsersCount: totalUsersCount,
  };
};

export const toggleIsFetchingActionCreator = (isFetching) => {
  return {
    type: TOGGLEISFETCHING,
    isFetching: isFetching,
  };
};
