const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
};

export function songReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_SONGS":
      return {
        ...state,
        currentSongs: action.songs,
      };
    case "SET_ACTIVE_SONG":
      if (action.payload?.data?.tracks?.hits) {
        return {
          ...state,
          currentSongs: action.payload.data.tracks.hits,
          activeSong: action.payload.song,
          currentIndex: action.payload.i,
          isActive: true,
        };
      } else if (action.payload?.data?.properties) {
        return {
          ...state,
          currentSongs: action.payload?.data?.tracks,
          activeSong: action.payload.song,
          currentIndex: action.payload.i,
          isActive: true,
        };
      } else {
        return {
          ...state,
          currentSongs: action.payload.data,
          activeSong: action.payload.song,
          currentIndex: action.payload.i,
          isActive: true,
        };
      }
    case "NEXT_SONG":
      if (state.currentSongs[action.payload]?.track) {
        return {
          ...state,
          activeSong: state.currentSongs[action.payload]?.track,
          currentIndex: action.payload,
          isActive: true,
        };
      } else
        return {
          ...state,
          activeSong: state.currentSongs[action.payload],
          currentIndex: action.payload,
          isActive: true,
        };
    case "PREV_SONG":
      if (state.currentSongs[action.payload]?.track) {
        return {
          ...state,
          activeSong: state.currentSongs[action.payload]?.track,
          currentIndex: action.payload,
          isActive: true,
        };
      } else
        return {
          ...state,
          activeSong: state.currentSongs[action.payload],
          currentIndex: action.payload,
          isActive: true,
        };
    case "PLAY_PAUSE":
      return {
        ...state,
        isPlaying: action.payload,
      };

    case "SELECT_GENRE_LIST_ID":
      return {
        ...state,
        genreListId: action.payload,
      };
    default:
      return state;
  }
}
