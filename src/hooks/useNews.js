import {useQuery} from 'react-query';
import axios from "axios";

export default function useNews(lang, search){                           

    console.log('lang, search', lang, !search, search);
    function fetchNews(key, {lang, search}) {
        if(lang === "all" && !search){
            return axios.get(`https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_API_KEY}`)
            // return axios.get(`http://newsapi.org/v2/top-headlines?language=en&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
        }
         
        return axios.get(`https://gnews.io/api/v4/${!!search ? 'search': 'top-headlines'}?${lang !== "all" ? 'lang=' + lang +'&': ''}${!!search ? 'q=' + search + '&': ''}&token=${process.env.REACT_APP_API_KEY}`).then(res => res.data);
        
        // return axios.get(`http://newsapi.org/v2/everything?${lang !== "all" ? 'language=' + lang +'&': ''}${!!search ? 'q=' + search + '&': ''}apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
    }

    return useQuery(['news', {lang, search}], fetchNews)
}