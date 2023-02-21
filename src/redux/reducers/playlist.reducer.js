const initialState = {
   myPlaylists: [
    {
      title: 'My Playlist',
      songs: [],
      id: '142536sx',
    }
   ]
    
}


export function playlistReducer(state = initialState, action) {
switch(action.type) {
case 'ADD_SONG':
  console.log(action);
  const playlistIdx = state.myPlaylists.findIndex(playlist=> playlist.id === action.playlistId)
  const updatedPlaylists = state.myPlaylists.map((playlist, idx) =>
  idx === playlistIdx
    ? { ...playlist, songs: [...playlist.songs, action.song] }
    : playlist
);
console.log(updatedPlaylists);
  return{
    ...state, 
    myPlaylists:updatedPlaylists
  }

  case 'REMOVE_SONG':
    console.log(action);
    return{
      ...state,
      myPlaylists: state.myPlaylists.map(playlist => {
        if (playlist.id === action.playlist.id) {
          return action.playlist;
        } else {
          return playlist;
        }
      })
    }
    case 'CREATE_PLAYLIST':
      return {
        ...state,
        myPlaylists:[...state.myPlaylists,action.newPlaylist ]
      }
    case 'REMOVE_PLAYLIST':
      return {
        ...state,
        myPlaylists:[...state.myPlaylists.filter(playlist => playlist.id !== action.playlistId)]
      }
  default:
      return state;
  }
}