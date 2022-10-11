import produce from "immer";
//불변성 유지 해주는 친구
const initialState = {
  allPost: [],
  allPostsLoading: false,
  allpostsDone: false,
  allpostsError: null,
};

export const LOAD_ALLPOSTS_REQUEST = "LOAD_ALLPOSTS_REQUEST";
export const LOAD_ALLPOSTS_SUCCESS = "LOAD_ALLPOSTS_SUCCESS";
export const LOAD_ALLPOSTS_FAILURE = "LOAD_ALLPOSTS_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // load allposts
      case LOAD_ALLPOSTS_REQUEST:
        draft.allPostsLoading = true;
        draft.allpostsDone = false;
        draft.allpostsError = null;
        break;
      case LOAD_ALLPOSTS_SUCCESS:
        draft.allPostsLoading = false;
        draft.allpostsDone = true;
        draft.allPost = action.data;
        break;
      case LOAD_ALLPOSTS_FAILURE:
        draft.allPostsLoading = false;
        draft.allpostsDone = true;
        draft.allpostsError = action.error;
        break;
      default:
        return console.log("이상해");
    }
  });
};

export default reducer;
