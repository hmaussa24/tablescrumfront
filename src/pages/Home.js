import React from 'react';
import { Button } from '@material-ui/core';
import * as TodoAccion from '../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Home extends React.Component {


    constructor(props) {
        super(props);
        this.handleSalir = this.handleSalir.bind(this);
    }

  handleSalir(){
  console.log('Salir')
  this.props.authLogOut(localStorage.getItem('jwt_token'));
  window.location = '/'
  }

    render() {
        const { classes } = this.props;
        return (
            <Button variant="text" color="default" onClick={this.handleSalir}>
              salir
            </Button>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(TodoAccion, dispatch);
const mapStateToProps = state => ({
  state: state.Auth
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
