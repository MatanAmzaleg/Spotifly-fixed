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