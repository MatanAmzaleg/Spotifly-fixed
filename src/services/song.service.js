import { httpService } from "./http.service"

export const songService = {
    query,
    // save,
    // remove,
    // getById,
    // getEmptyRobot,
    // tryRobot
}

const BASE_URL = "song/"

async function query(collectionName) {
    try{
        return httpService.get(BASE_URL, {'collectionName': collectionName})
    }catch(err){
        console.log( "failed to fetch songs", err)
    }
   
    return Promise.resolve([...robotsToReturn])
}

// function tryRobot(id) {
//     const robot = gRobots.find(robot => robot._id === id)
//     robot.batteryStatus -= 10
//     return Promise.resolve()
// }
// function getById(id) {
//     const robot = gRobots.find(robot => robot._id === id)
//     return Promise.resolve({ ...robot })
// }

// function remove(id) {
//     const idx = gRobots.findIndex(robot => robot._id === id)
//     gRobots.splice(idx, 1)
//     if (!gRobots.length) gRobots = gDefaultRobots.slice()
//     storageService.store(STORAGE_KEY, gRobots)
//     return Promise.resolve()
// }

// function save(robotToSave) {
//     if (robotToSave._id) {
//         const idx = gRobots.findIndex(robot => robot._id === robotToSave._id)
//         gRobots.splice(idx, 1, robotToSave)
//     } else {
//         robotToSave._id = makeId()
//         robotToSave.batteryStatus = 100
//         gRobots.push(robotToSave)
//     }
//     storageService.store(STORAGE_KEY, gRobots)
//     return Promise.resolve(robotToSave)

// }

