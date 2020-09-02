import React, {useState} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import theme from '../theme';
import { useStyles } from '../Components/css';
import NavBarAmin from '../Components/NavBarAdmin';
import { Container, CssBaseline, Grid, TextField, Button, Box } from '@material-ui/core';
import Axios from '../services/http';
import baseUrl from '../services/baseUrl';
function Home(props) {
    const classes = useStyles(theme);
    //const theme = useTheme();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = async (event) => {
       // setOpen(true);
       event.preventDefault();
       //console.log(description)
       Axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('jwt_token')}`;
       let proyecto = await Axios.post(baseUrl+'registerproyecto',
       {name: name, description : description, user_id : props.login.user.id})
       .then(resposnse=>{
        props.history.push('/home')
            //console.log(resposnse)
       }, error =>{
            alert(error);
            console.log(error)
       })
    };

    const handleChangeName = (event) => {
         setName(event.target.value);
         //console.log(event.target.value)
    };
    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
        //console.log(event.target.value)
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
            <NavBarAmin useStyles={classes} user={props.login.user}></NavBarAmin>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Typography className={classes.title}>
                        Agregar un proyecto
                    </Typography>
                    <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="fname"
                                        name="name"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Nombre del Proyecto:"
                                        autoFocus
                                        onChange={handleChangeName}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="fname"
                                        name="description"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="discription"
                                        label="Descripcion:"
                                        autoFocus
                                        onChange={handleChangeDescription}
                                    />
                                </Grid>
                            </Grid>
                            <Box mt={5}></Box>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Registrar
                            </Button>
                        </form>
                    </div>
                </Container>
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
