import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    title : {
        flexGrow : 1
    }
}));

export const NavBar = () => {
    const clases = useStyles();
    return (
        <div>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={clases.title}>
                        Table Scrum
                </Typography>
                </Toolbar>
            </AppBar>
            <div className={clases.offset}></div>
        </div>
    )
}
