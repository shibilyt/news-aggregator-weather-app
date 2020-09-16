import React, { useState, useEffect } from 'react';

import logo from "../assets/logonews-logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
      appBar: {
        background: theme.palette.dark.main
      },
      toolbar: {
        display: 'flex',
        justifyContent: "space-between",
      },
      linkSection : {
        
      }
}))

const useNavStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: '#fefefe',
        padding: '0 20px'
      },
})

function NavLink({url, label}){
    const classes = useNavStyles()
    return (
    <a href={url} className={classes.link}>{label}</a>
    )
  }

  
export default function Header(){
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
          <img
            src={logo}
            alt="The beautiful SNW log"/>
            <div className={classes.linkSection}>
          <NavLink url={'#'} label='Popular'/>
          <NavLink url={'#'} label='Latest'/>
          <NavLink url={'#'} label='Random'/>
            </div>
          </Toolbar>
        </AppBar>
    )
}