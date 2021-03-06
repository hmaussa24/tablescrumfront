import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import '../css/styles.css'
const useStyles = makeStyles({
    root: {
      border: 0,
      borderRadius: 3,
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

export default function Hook(props) {
  const classes = useStyles();
return (<Link className='link-global' to={props.url}>{props.label}</Link>)
}