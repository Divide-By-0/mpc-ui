import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
// import FormRow from '@material-ui/core/FormRow';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import MPCCard from "./MPCCard";
import 'typeface-rubik';
import PropTypes from 'prop-types';
import Header from './Header';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fade, createMuiTheme, ThemeProvider, responsiveFontSizes, withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {theme} from './colors';

// const theme = responsiveFontSizes(createMuiTheme({
//     typography: {
//       fontFamily: [
//         'rubik',
//       ].join(','),
//     },
//     shadows: ["none"]
// }));

function createData(name, organization, hash, status) {
  return { name, organization, hash, status };
}

let clients = [
    {"name": "Brian", "clientId":"b56ege5", "organization": "Snarkify", "hash": "nth984euromnamipkuoi9uio4jiek", "status":true}, 
    {"name": "Aayush", "clientId":"35bt4v5wc", "organization": "Snarkify 2", "hash": "89354dfkiu980iueorjh43589ty4y", "status":false}, 
    {"name":"Add yourself", "clientId":"new", }] // todo get from db

const makeRow = (client) => {
    return createData(client["name"], client["organization"], client["hash"], client["status"]);
};

const rows = clients.map((client, i) => { 
    return createData(client["name"], client["organization"], client["hash"], client["status"]);
 });

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginTop: 20,
    textAlign: 'center',
  },
  grid: {
    marginTop: 20,
    // maxWidth: 700,
    justifyContent: 'center',
  },
  table: {
    marginTop: 5,
    marginLeft: 100,
    marginRight: 100,
    justifyContent: 'center',
  },
  center: {
    justifyContent: 'center',
  },
});

class MPCStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      participants: []
    };
  }

  async componentDidMount() {
    this.updateStateFromServer();
    setInterval(this.updateStateFromServer.bind(this), 2000);
  }

  async updateStateFromServer() {
    const response = await fetch('http://10.0.0.86:8081/api/state');
    const responseBody = await response.json();
    this.setState({
      participants: responseBody.participants
    });
  }

  render() {
    const {classes} = this.props;

    return (
      <ThemeProvider theme={theme}>
        {Header}
        <Typography
          className={classes.title} variant="h3" component="h3">
          ZKSNARK Trusted Setup MPC
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <Table className={classes.table} >
            <TableBody className={classes.center} >
              <TableRow className={classes.center} border={1} borderRadius={16}>

                <TableCell align="center">{"Online"}</TableCell>
                <TableCell align="left">{"ID"}</TableCell>
                <TableCell align="left">{"Status"}</TableCell>
              </TableRow>
              {this.state.participants.map((participant) => {
                return (
                  // <TableContainer component={Paper}>

                  <TableRow className={classes.center} key={participant.address} border={1} borderRadius={16}>

                    <TableCell align="center">{participant.online ? "🔵" : "🔴"}</TableCell>
                    <TableCell align="left">{participant.address}</TableCell>
                    <TableCell align="left">{participant.state}</TableCell>
                  </TableRow>
                  // </TableContainer>
                );}
              )}
            </TableBody>
          </Table>
        </Grid>
      </ThemeProvider>
    );
  }
}

MPCStatus.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MPCStatus);
