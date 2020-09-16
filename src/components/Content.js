import React,{useState} from 'react';
import Box from '@material-ui/core/Box';
import Filter from './Filter';
import useNews from '../hooks/useNews';
import useSwapi from '../hooks/useSwapi';
import NewsCard from './NewsCard'

import {useQuery} from 'react-query';
import axios from 'axios';
export default function Content(){
    const [lang, setLang] = useState('en');
    const [search, setSearch] = useState('')
    const { status, data, error, isFetching } = useNews({query : '', lang: lang}); 
    // const { status, data, error, isFetching } = useQuery('swapi', () => axios.get('https://swapi.dev/api/films/').then(res => res.data)); 
    
    console.log('swapi data :>> ', data);
    return (
        <Box mt={8} p={3}>
            {/* <Filter lang={lang} setLang={setLang} search={search} setSearch={setSearch} /> */}
            {status ==='success' && 'success'}
            {status === 'loading' ? 'loading': status === 'error'? 'error': data.articles.map(article => <NewsCard data={article}/>)}
          </Box>
    )
}