import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import theme from '../theme';
import { useStyles } from '../Components/css';
import ProyecList from '../Components/ProyectList';
import Boton from '../Components/Boton';
import NavBarAmin from '../Components/NavBarAdmin';
function Home() {
    const classes = useStyles(theme);
    //const theme = useTheme();


    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
            <NavBarAmin useStyles={classes}></NavBarAmin>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Typography className={classes.title}>
                        Tus proyectos
                    </Typography>
                   <Boton color='primary' label='Agregar Proyecto' url='/setproyecto'></Boton>
                        <div className={classes.offset}></div>
                    <ProyecList></ProyecList>
                    

                </main>
            </div>
        </ThemeProvider>
    );
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
