const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
  currenLyrics:"",
  currentSong:{},
  relatedSongs: [],
};

export function songReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_SONG":
      return {
        ...state,
        currentSong: action.currSong,
      };
    case "GET_RELATED_SONGS":
      return {
        ...state,
        relatedSongs: action.relatedSongs,
      };
    case "FETCH_SONGS":
      return {
        ...state,
        currentSongs: action.songs,
      };
    case "SET_LYRICS":
      console.log(action);
      return {
        ...state,
        currenLyrics: action.lyrics,
      };
    case "SET_ACTIVE_SONG":
      if (action.payload?.data?.tracks?.hits) {
        console.log(action);
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
