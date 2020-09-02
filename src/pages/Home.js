import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import theme from '../theme';
import { useStyles } from '../Components/css';
import ProyecList from '../Components/ProyectList';
import Boton from '../Components/Boton';
import NavBarAmin from '../Components/NavBarAdmin';
import { Redirect } from 'react-router';
function Home(props) {
    const classes = useStyles(theme);
    //const theme = useTheme();
    let login = false;
    // if (typeof props.login.state != 'undefined') {
    //     props.login.state.map(key => {
    //         // if (typeof key.user.login != 'undefined') {
    //         //   this.state.login = key.user.login
    //         // }
    //         //console.log(key);
    //         login = key.login
    //     })
    // }
    if(typeof props.login.sesion != 'undefined'){
        //console.log(props.login)
        login = props.login.sesion.login;
    }
    //console.log(props.login.user)
    if (login === true) {
        return (
            <ThemeProvider theme={theme}>
                
                <div className={classes.root}>
                    <NavBarAmin useStyles={classes} user={props.login.user}></NavBarAmin>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Typography className={classes.title}>
                            Tus proyectos
                        </Typography>
                        <Boton variant='contained' color='primary' label='Agregar Proyecto' url='/setproyecto' link='link'></Boton>
                        <div className={classes.offset}></div>
                        <ProyecList></ProyecList>


                    </main>
                </div>
            </ThemeProvider>
        );
    }else{
        return(
            <Redirect to='/'></Redirect>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return {
        //authLogOut: token => dispatch(authLogOut(token))
    };
}

const mapStateToProps = state => {
    return { login: state.Auth };
};

const HomeD = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default (HomeD);
