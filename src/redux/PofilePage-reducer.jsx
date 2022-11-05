const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
let initialState = {
  postData: [],
  newPostText: "",
  profile: null,
};

// export const ProfilePageReducer = (state = initialState, action) => {
//   const stateCopy = { ...state };
//   stateCopy.postData = [...state.postData];
//   if (action.type === "ADD-POST") {
//     let newPost = {
//       id: 1,
//       post: state.newPostText,
//       like: 0,
//     };
//     stateCopy.postData.push(newPost);
//   } else if (action.type === "UPDATE-NEW-POST-TEXT") {
//     stateCopy.newPostText = action.newText;
//   }
//   if (action.type === 'SET_USER_PROFILE') {
//     return {...state, profile: action.profile}
//   }
//   return stateCopy;
// };
export const ProfilePageReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  stateCopy.postData = [...state.postData];
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 1,
        post: state.newPostText,
        like: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default: {
      return stateCopy;
    }
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  };
};
