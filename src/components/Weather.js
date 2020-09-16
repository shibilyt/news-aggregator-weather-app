import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography  from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import sunIcon from '../assets/sun-icon.svg'


export default function Weather(){

    return (
        <Card>
            <header>
                <Typography>Weather</Typography>

                <Box display='flex' justifyContent='space-around'>
                    <img src={sunIcon} alt="sun icon"/>
                    <Box>
                        <div>Morning : 10c</div>
                        <div>Morning : 10c</div>
                        <div>Morning : 10c</div>
                    </Box>
                </Box>
            </header>
        </Card>
    )
}