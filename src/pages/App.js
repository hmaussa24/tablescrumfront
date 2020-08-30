import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import theme from '../theme';
import  NavBar  from '../Components/NavBar';
import { withStyles } from '@material-ui/core/styles';
import Axios from '../services/http';
import baseUrl from '../services/baseUrl';
import Copyright from '../Components/Copi';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { authLogin } from '../store/actions/';
const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends React.Component {


  constructor(props) {
    super(props);
    this.state = { email: '', password: '', login: false };
    // let login = this.props.state.map(key => {
    //   // if (typeof key.user.login != 'undefined') {
    //   //   this.state.login = key.user.login
    //   // }
    //   //console.log(key.user.login);
    //   this.state.login = key.user.login
    // })
    //console.log(this.props.state[0].user);
    if (typeof this.props.login.state != 'undefined') {
      this.state.login = this.props.login
      //console.log(this.props.login);
      let login = this.props.login.state.map(key => {
        // if (typeof key.user.login != 'undefined') {
        //   this.state.login = key.user.login
        // }
        console.log(key);
        this.state.login = key.login
      })
    }

    this.handleChangEmail = this.handleChangEmail.bind(this);
    this.handleChangePwd = this.handleChangePwd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePwd(event) {
    this.setState({ password: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    let date = await Axios.post(baseUrl + 'login', {
      email: this.state.email,
      password: this.state.password,
    })
      .then(res => {
        localStorage.setItem('jwt_token', res.data.access_token)
        this.props.authLogin(res.data.access_token);
        //console.log(this.props.login)
        // let login = this.props.state.map(key => {
        //   this.state.login = key.user.login
        // })
        window.location = '/home'
      }, (err => {
        alert('Usuario o contraseña incorrectos.');
      }))
  }

  render() {
    const { classes } = this.props;
    let login = this.state.login;
    return (
      <ThemeProvider theme={theme}>
        {login && <Redirect to='/home'></Redirect>}
        <NavBar />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Inicio de Sesion
        </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.handleChangEmail}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChangePwd}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Iniciar Secion
          </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    ¿Olvide mi contraseña?
              </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"¿No tienes contraseña? Registrate"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}

//const mapDispatchToProps = dispatch => bindActionCreators(TodoAccion, dispatch);
function mapDispatchToProps(dispatch) {
  return {
    authLogin: token => dispatch(authLogin(token))
  };
}

const mapStateToProps = state => {
  return { login: state.Auth };
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

export default withStyles(useStyles)(Login);