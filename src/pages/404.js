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
import  NavBar  from '../Components/NavBar';
import Copyright from '../Components/Copi';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import * as TodoAccion from '../store/actions';
import { connect } from 'react-redux';
import theme from '../theme';
import  Axios  from "../services/http";
import baseUrl from '../services/baseUrl';
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', password: '', password_confirmation: '' };
        this.handleChangName = this.handleChangName.bind(this);
        this.handleChangEmail = this.handleChangEmail.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
        this.handleChangePwdR = this.handleChangePwdR.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangName(event) {
        this.setState({ name: event.target.value });
    }
    handleChangEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleChangePwd(event) {
        this.setState({ password: event.target.value });
    }
    handleChangePwdR(event) {
        this.setState({ password_confirmation: event.target.value });
    }
    async handleSubmit(event) {
        event.preventDefault();
        let date = await Axios.post(baseUrl + 'register', this.state)
            .then(res => {
                //console.log(res.data)
                //window.location = '/home'
                if(res.data){
                    window.location = '/' 
                }else{
                    
                }
            }, (err => {
                alert('No se completo el registro.');
            }))

    }
    render() {
        const { classes } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <h2>404 notFound</h2>
            </ThemeProvider>
        )
    };
}

const mapDispatchToProps = dispatch => bindActionCreators(TodoAccion, dispatch);
const mapStateToProps = state => ({
    state: state
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(SignUp));