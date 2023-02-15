import { songService } from "../../services/song.service";


export function setCurrentSong(currSong){
    return async(dispatch) => {
        try{
            console.log(currSong)
            dispatch({type:'SET_CURRENT_SONG', currSong})
        }
        catch(err){
            console.log(err);
        }
    }
}
export function fetchRelatedSongs(artist){
    return async(dispatch) => {
        try{
            console.log(artist);
            const relatedSongs = await songService.getRelatedSongs(artist)
            console.log(relatedSongs)
            dispatch({type:'GET_RELATED_SONGS', relatedSongs})
        }
        catch(err){
            console.log(err);
        }
    }
}
export function getLyrics(songName, songArtist){
    return async(dispatch) => {
        try{
            const lyrics = await songService.getLyrics(songName, songArtist)
            dispatch({type:'SET_LYRICS', lyrics})
        }
        catch(err){
            console.log(err);
        }
    }
}
export function loadSongs(collectionName = 'DISCOVER'){
    return async(dispatch) => {
        try{
            console.log(collectionName);
            const songs = await songService.query(collectionName)
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
            console.log(payload);
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