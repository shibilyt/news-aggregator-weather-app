import {useQuery} from 'react-query';
import axios from "axios";

export default function useNews({query, lang}){

    function fetchNews(key ,{query, lang}) {
        if(query!=="") return axios.get(`https://gnews.io/api/v4/search?${query ? `q=`: ''}&token=${process.env.REACT_APP_API_KEY}`).then(res => res.data);
        else {
            return axios.get(`https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_API_KEY}`)
        }
    }

    return useQuery(['news', {query, lang}], fetchNews)
}