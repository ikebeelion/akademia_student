import axios from 'axios'

let Api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('studentoken') 
    },
})

Api.defaults.withCredentials = true

export default Api