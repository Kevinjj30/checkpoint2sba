import React, { Component } from 'react'
import {
  AppBar,
  Typography,
  TextField,
  Button,
  Grid
} from '@material-ui/core'


class AccountItem extends Component {
    state = {
        username: ''
       
    }

    render() {
      this.props.username // you have username in props
    };