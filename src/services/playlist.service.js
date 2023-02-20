import { localStorageService } from "./local.storage.service";
import {utilService} from "./util.service";


export const playlistService = {
    addSongToPlaylist,

}


async function addSongToPlaylist(playlistId, song){
    try{
        console.log(playlistId, song);
        localStorageService.saveToStorage
    }catch(err){
        console.log('failed to add song to playlist', err);
    }
}