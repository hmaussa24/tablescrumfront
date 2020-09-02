import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { authLogOut } from '../store/actions/';
import { Typography, withStyles, ThemeProvider } from '@material-ui/core';
import theme from '../theme';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// class NavBar extends React.Component {

//     constructor(props) {
//         super(props);
//         this.handleSalir = this.handleSalir.bind(this);
//     }

//     handleSalir() {
//         console.log('Salir')
//         this.props.authLogOut(localStorage.getItem('jwt_token'));
//         window.location = '/'
//     }

//     handleClick = (event) => {
//         this.useState(event.currentTarget);
//     };

//     handleClose = () => {
//         //setAnchorEl(null);
//         this.useState(null)
//     };

//     render() {

//         if (this.props.menu === true) {
//             return (
//                 <div>
//                     <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
//                         Open Menu
//                     </Button>
//                     <Menu
//                         id="simple-menu"
//                         anchorEl={anchorEl}
//                         keepMounted
//                         open={Boolean(anchorEl)}
//                         onClose={this.handleClose}
//                     >
//                         <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//                         <MenuItem onClick={this.handleClose}>My account</MenuItem>
//                         <MenuItem onClick={this.handleClose}>Logout</MenuItem>
//                     </Menu>
//                 </div >
//             )

//         } else {
//             return (
//                 <Button variant="text" color="inherit" href='/registro'>
//                     Registrate
//                 </Button>
//             )
//         }
//     }

// }

const useStyles = theme => ({
    offset: theme.mixins.toolbar,
    title: {
        flexGrow: 1
    }
});

function NavBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [name , setName] = React.useState(props.user);
    //console.log(name);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSalir = () => {
        console.log('Salir')
        props.authLogOut(localStorage.getItem('jwt_token'));
        window.location = '/'
    }

    //console.log(props)
    const { classes } = props;
    if (props.menu === true) {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Typography variant="h6" className={classes.title} href='/'>
                        <Button variant="text" color="inherit" onClick={handleClick}>
                            {name.name}
                            <ArrowForwardIosIcon></ArrowForwardIosIcon>
                        </Button>
                    </Typography>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleSalir}>Salir</MenuItem>
                    </Menu>
                </div>
            </ThemeProvider>
        );
    } else {
        return (
            <Button variant="text" color="inherit" href='/registro'>
                Registrate
            </Button>
        )

    }

}




function mapDispatchToProps(dispatch) {
    return {
        authLogOut: token => dispatch(authLogOut(token))
    };
}

const mapStateToProps = state => {
    return { login: state.Auth };
};

const Nav = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);
export default withStyles(useStyles)(Nav);