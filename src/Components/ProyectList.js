import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';
import { withStyles, Button, Box, ButtonGroup } from '@material-ui/core';
import baseUrl from '../services/baseUrl';
import Axios from '../services/http';
import '../css/styles.css'
const useStyles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

class Projects extends React.Component {
    //const[expanded, setExpanded] = React.useState(false);
    constructor(props) {
        super(props);
        this.state = {
            //setExpanded : false,
            expanded: false,
            loading: true,
            error: null,
            data: undefined
        }
    }

    componentDidMount() {
        this.proyectos(localStorage.getItem('jwt_token'), 1);
    }

    proyectos = async (token, user_id) => {
        this.setState({
            loading: true,
            error: null
        });

        try {
            Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            const data = await Axios.post(baseUrl + 'getproyectosuser', { user_id: user_id })
            this.setState({
                loading: false,
                data: data,
            })
            console.log(this.state.data.data.proyectos)
        } catch (error) {
            this.setState({
                loading: false,
                error: error,
            })
        }
    }

    handleChange = (panel) => (event, isExpanded) => {
        this.setState({
            expanded: isExpanded ? panel : false
        })
        // this.state.setExpanded(isExpanded ? panel : false);
    };
    render() {
        const { classes } = this.props;
        //const[expanded, setExpanded] = this.useState(false);
        if (this.state.loading === true) {
            return (<div class="lds-dual-ring"></div>)
        }
        if (this.state.error) {
            return (
                <Typography>
                    Error al cargar los datos, intentalo nuevamente.
                </Typography>
            )
        }
        return (
            <div className={classes.root}>
                {this.state.data.data.proyectos.map((pro) => (
                    <Accordion key={pro.id} expanded={this.state.expanded === pro.id} onChange={this.handleChange(pro.id)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>{pro.name}</Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {pro.description}
                            </Typography>
                            <div className={classes.root}></div>
                            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                                <Button>One</Button>
                                <Button>Two</Button>
                                <Button>Three</Button>
                            </ButtonGroup>
                        </AccordionDetails>
                    </Accordion>

                ))}
            </div>
        );
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

const Proyectos = connect(
    mapStateToProps,
    mapDispatchToProps
)(Projects);

export default withStyles(useStyles)(Proyectos);