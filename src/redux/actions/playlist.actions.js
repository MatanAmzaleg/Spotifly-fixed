import { playlistService } from "../../services/playlist.service";

export function addSongToPlaylist(playlistId, song){
    return async (dispatch) => {
        try{
            // console.log(playlistId, song);
            dispatch({type: 'ADD_SONG', playlistId, song})
        }catch(err){
            console.log('failed to add song to playlist', err);
        }
    }
}