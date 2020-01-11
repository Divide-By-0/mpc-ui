import React, { Fragment, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import MPCCard from "./MPCCard";
import Header from './Header';
import 'typeface-rubik';
import { fade, createMuiTheme, ThemeProvider, responsiveFontSizes, withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import colors, {theme} from './colors';
import firestore from "./firestore";
import './style.css'
import redirect from "./redirect";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: colors.bgBlack,
    },
    card: {
      backgroundColor: colors.bgBlack,
    },
    title: {
      paddingTop: '40px',
      paddingBottom: '40px',
      flexGrow: 1,
      textAlign: 'center',
      color: colors.textWhite,
      fontFamily: 'monospace'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
}));


export default function AllMPCs() {
    const classes = useStyles();
    const [ceremonies, setCeremonies] = useState([
      {"title": "Brian's Game", "mpcId":"12312125", "description": "A zk-snark game.", "creator": "jsd9843ksdhf901kl94k0askl0"}, 
      {"title": "Aayush's Snark", "image":"https://cryptonomist.ch/wp-content/uploads/2018/07/dreamstime_s_102981408-min.jpg", "mpcId":"3665tgr34", "description": "A zk-snark game.", "creator": "jsd9843ksdh2342494k0askl0"}, 
      {"title":"Create your own ceremony", "image": "https://cdn0.iconfinder.com/data/icons/coding-and-programming-1/32/add_new_plus_addition_function_circle_shape-512.png", "mpcId":"new"},
      {"title": "Aayush's Snark", "image":"https://cryptonomist.ch/wp-content/uploads/2018/07/dreamstime_s_102981408-min.jpg", "mpcId":"3665tgr34", "description": "A zk-snark game.", "creator": "jsd9843ksdh2342494k0askl0"},
      {"title": "Aayush's Snark", "image":"https://cryptonomist.ch/wp-content/uploads/2018/07/dreamstime_s_102981408-min.jpg", "mpcId":"3665tgr34", "description": "A zk-snark game.", "creator": "jsd9843ksdh2342494k0askl0"},
      {"title": "Aayush's Snark", "image":"https://cryptonomist.ch/wp-content/uploads/2018/07/dreamstime_s_102981408-min.jpg", "mpcId":"3665tgr34", "description": "A zk-snark game.", "creator": "jsd9843ksdh2342494k0askl0"},
      {"title": "Aayush's Snark", "image":"https://cryptonomist.ch/wp-content/uploads/2018/07/dreamstime_s_102981408-min.jpg", "mpcId":"3665tgr34", "description": "A zk-snark game.", "creator": "jsd9843ksdh2342494k0askl0"},
    ]);

    firestore.collection("ceremony-info").onSnapshot(snapshot => {
      let snappedCeremonies = []
      snapshot.forEach(doc => {
        const ceremony = doc.data();
        // todo.id = doc.id;
        console.log(ceremony);
        snappedCeremonies.push(ceremony);
      });
      setCeremonies(snappedCeremonies);
    });

    return (
        <div
          style={{
            backgroundColor: '#121212',
            paddingBottom: '50px'
          }}
        >
          <div
            style={{
              height: '600px',
              backgroundColor: '#444444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              verticalAlign: 'center',
              flexDirection: 'column'
            }}
          >
            <h2
              style={{
                fontFamily: 'Monaco',
                color: '#eeeeee',
                fontSize: '60px'
              }}
            >
              snarkify
            </h2>
            <p>
              An open tool for <a href={"https://en.wikipedia.org/wiki/Secure_multi-party_computation"}>multi-party computation</a>.
            </p>
          </div>
          <div>
            <Typography 
              className={classes.title} variant="h3" component="h3">
                Ongoing MPC Ceremonies
            </Typography>
            {ceremonies.map((ceremony, i) => (
                <MPCCard 
                    key={ceremony.name} 
                    mpcId={ceremony.id} 
                    title={ceremony.name} 
                    description={ceremony.description} 
                    date={ceremony.date} 
                    alt={ceremony.title} 
                    ip={ceremony.ip}
                    image={ceremony.image}>
                </MPCCard> 
            ))}
          </div>
        </div>
    );
}

