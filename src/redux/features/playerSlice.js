import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
};


export function songReducer(state = initialState, action){
  switch(action.type){
    case 'FETCH_SONGS':
      return {
        ...state, 
        currentSongs: action.songs
      }
    case 'SET_ACTIVE_SONG':
      console.log("ok")
      if (action.data?.tracks?.hits) {
        return{
          ...state,
          currentSongs: action.data.tracks.hits,
          activeSong: action.song,
          currentIndex: action.i,
          isActive: true
        }
      }
      else if (action.payload?.data?.properties) {
        return{
          ...state,
          currentSongs: action.payload?.data?.tracks,
          activeSong: action.payload.song,
          currentIndex: action.payload.i,
          isActive: true
        }
      }else{
        return{
          ...state,
          currentSongs: action.payload.data,
          activeSong: action.payload.song,
          currentIndex: action.payload.i,
          isActive: true
        }
      }
    case 'NEXT_SONG':
      if (state.currentSongs[action.payload]?.track) {
        return{
          ...state,
          activeSong: state.currentSongs[action.payload]?.track,
          currentIndex: action.payload,
          isActive: true
        }
      }else return{
        ...state,
          activeSong: state.currentSongs[action.payload]
      }
    case 'PREV_SONG':
      if (state.currentSongs[action.payload]?.track) {
        return{
          ...state,
          activeSong: state.currentSongs[action.payload]?.track,
          currentIndex: action.payload,
          isActive: true
        }
      }else return{
        ...state,
        activeSong : state.currentSongs[action.payload],
        currentIndex: action.payload,
        isActive: true
      }
      case 'PLAY_PAUSE':
        return{
          ...state,
          isPlaying: action.payload
        }

        case 'SELECT_GENRE_LIST_ID':
          return{
            ...state,
            genreListId: action.payload
          }

  }
}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      console.log(action)
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  selectGenreListId,
} = playerSlice.actions;

export default playerSlice.reducer;
