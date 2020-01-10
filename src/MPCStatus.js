import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fade, createMuiTheme, ThemeProvider, responsiveFontSizes, withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
    typography: {
      fontFamily: [
        'rubik',
      ].join(','),
    },
    shadows: ["none"]
}));

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

const useStyles = (theme) => ({
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
  }

  componentDidMount() {

  }

  render() {
    const classes = this.props;
    let header = (
      <div>
        <AppBar elevation={0} position="static">
          <Toolbar>   {/* variant="dense"> */}
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
            <Typography variant="h6" color="inherit">
              {`Snarkify` }
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );


    return (
      <ThemeProvider theme={theme}>
        {header}
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
              {clients.map((client, i) => {
                let row = makeRow(client);
                return (
                  // <TableContainer component={Paper}>

                  <TableRow className={classes.center} key={row.name} border={1} borderRadius={16}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.organization}</TableCell>
                    <TableCell align="left">{row.hash}</TableCell>
                    <TableCell align="left">{row.status? "Complete":"Incomplete"}</TableCell>
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

export default withStyles(useStyles)(MPCStatus);
