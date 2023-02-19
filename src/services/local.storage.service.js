export const localStorageService = {
    saveToStorage,
    loadFromStorage
}

function saveToStorage(key, val){
    const users = JSON.stringify(val)
    localStorage.setItem(key, users)
}

function loadFromStorage(key){
    const users = localStorage.getItem(key)
    return JSON.parse(users)
}