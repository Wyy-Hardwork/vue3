import axios from 'axios'

    let request = axios.create({
        baseURL : 'http://localhost:5173',
        timeout:5000
    })

export default request