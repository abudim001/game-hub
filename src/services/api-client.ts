import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '89620896d34d4370a5e96db4e6034c48'
    }
})