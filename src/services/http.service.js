import Axios from 'axios'
// import { router } from '@/router'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://spotifly-server.onrender.com/'
    : '//localhost:3001/api/'



const axios = Axios.create({
    withCredentials: true
})

export const httpService = {
    get(endpoint, data) {
        console.log(endpoint)
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'GET', data = null) {
    try {
        console.log(`${BASE_URL}${endpoint}`)
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: (method === 'GET') ? data : null
        })
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data:`, data)
        console.dir(err)
        if (err.response && err.response.status === 401) {
            sessionStorage.clear()
            window.location.assign('/')
            // Depends on routing startegy - hash or history
            // window.location.assign('/#/login')
            // window.location.assign('/login')
            // router.push('/login')
        }
        throw err
    }
}