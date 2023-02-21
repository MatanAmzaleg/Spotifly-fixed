import { playlistService } from "../../services/playlist.service";
import { utilService } from "../../services/util.service";

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

export function removeSong(playlist ){
    return async (dispatch) => {
        try{
            console.log(playlist);
            dispatch({type: 'REMOVE_SONG', playlist})
        }catch(err){
            console.log('failed to add song to playlist', err);
        }
    }
}


export function createPlaylist(playlistName ){
    return async (dispatch) => {
        try{
            const newPlaylist = {
                title: playlistName,
                id: utilService.makeId(),
                songs: []
            }
            dispatch({type: 'CREATE_PLAYLIST', newPlaylist})
        }catch(err){
            console.log('failed to create playlist', err);
        }
    }
}


export function removePlaylist(playlistId ){
    return async (dispatch) => {
        try{
            dispatch({type: 'REMOVE_PLAYLIST', playlistId})
        }catch(err){
            console.log('failed to create playlist', err);
        }
    }
}