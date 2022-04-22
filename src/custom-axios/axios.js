import axios from "axios";

const instance = axios.create({
    baseURL : "https://library-backend-191232.herokuapp.com/",
    headers : {
        'Access-Control-Allow-Origin' : '*'
    }
})
export default instance;