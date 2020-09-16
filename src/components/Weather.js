import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography  from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useQuery} from 'react-query';

import sunIcon from '../assets/sun-icon.svg'

import useWeather from '../hooks/useWeather';

export default function Weather({lat, lon}){

    const {status, data} = useWeather(lat, lon)

    console.log('data :>> ', data);

    return (
        <Card>
            <header>
                <Typography>Weather</Typography>

                <Box display='flex' justifyContent='space-around'>
                    <img src={sunIcon} alt="sun icon"/>
                    <Box>
                        {status === 'success' && (
                            data.cod === 200 ? (
                            <Typography variant='body1'>It's currently {data.main.temp - 273.15}℃ out there with {data.weather[0].description} </Typography>
                            ): null
                        )}
                    </Box>
                </Box>
            </header>
        </Card>
    )
}