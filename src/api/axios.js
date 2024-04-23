import axios from "axios";

const instance = axios.create( {
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: "5162d47c8cf4a118002e9197bf51d47e",
        language: "ko-KR",
    },
});


export default instance