import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button, ThemeProvider  } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { authLogOut } from '../store/actions/';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import theme from '../theme';
import Menu from './Salir'
const useStyles = theme => ({
    offset: theme.mixins.toolbar,
    title: {
        flexGrow: 1
    }
});


class NavBar extends React.Component {



    constructor(props) {
        super(props);
    }



    render() {
        const { classes } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <AppBar position="fixed" color="primary">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title} href='/'>
                                <Button variant="text" color="inherit" href='/'>
                                    Table Scrum
                         </Button>
                            </Typography>
                            <Menu menu={this.props.menu} nombre={this.props.nombre} />
                        </Toolbar>
                    </AppBar>
                    <div className={classes.offset}></div>
                </div>
            </ThemeProvider>
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
