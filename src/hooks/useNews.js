import {useQuery} from 'react-query';
import axios from "axios";

export default function useNews(){

    function fetchNews() {
        // if(query!=="") return axios.get(`https://gnews.io/api/v4/search?${query ? `q=`: ''}&token=${process.env.REACT_APP_API_KEY}`).then(res => res.data);
        // else {
        //     return axios.get(`https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_API_KEY}`)
        // }
        return axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
    }

    return useQuery('news', fetchNews)
}