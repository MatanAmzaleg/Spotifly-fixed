import { songService } from "../../services/song.service";


export function loadSongs(collectionName){
    return async(dispatch) => {
        try{
            const songs = await songService.query(collectionName = 'DISCOVER')
            console.log(songs)
            dispatch({type:'FETCH_SONGS', songs})
        }
        catch(err){
            console.log(err);
        }
    }
}
export function setActiveSong(payload){
    return async(dispatch) => {
        try{
            dispatch({type:'SET_ACTIVE_SONG', payload})
        }
        catch(err){
            console.log(err);
        }
    }
}
export function playPause(payload){
    return async(dispatch) => {
        try{
            dispatch({type:'PLAY_PAUSE', payload})
        }
        catch(err){
            console.log(err);
        }
    }
}
export function nextSong(payload){
    return async(dispatch) => {
        try{
            dispatch({type:'NEXT_SONG', payload})
        }
        catch(err){
            console.log(err);
        }
    }
}
export function prevSong(payload){
    return async(dispatch) => {
        try{
            dispatch({type:'PREV_SONG', payload})
        }
        catch(err){
            console.log(err);
        }
    }
}
export function selectGenreListId(payload){
    return async(dispatch) => {
        try{
            console.log(payload)
            dispatch({type:'SELECT_GENRE_LIST_ID', payload})
        }
        catch(err){
            console.log(err);
        }
    }
}