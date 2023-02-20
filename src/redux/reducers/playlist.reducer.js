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
  default:
      return state;
  }
}