import axios from 'axios'

let Api = axios.create({
    baseURL: "https://akademiapowerfield.ng/api",
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('studentoken') 
    },
})

Api.defaults.withCredentials = true

export default Api
