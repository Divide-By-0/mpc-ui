import React, { Fragment } from 'react';
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

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: colors.bgBlack,
    },
    card: {
      backgroundColor: colors.bgBlack,
    },
    title: {
      padding: '20px',
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
    let ceremonies = [
        {"title": "Brian's Game", "mpcId":"12312125", "description": "A zk-snark game.", "creator": "jsd9843ksdhf901kl94k0askl0"}, 
        {"title": "Aayush's Snark", "image":"https://cryptonomist.ch/wp-content/uploads/2018/07/dreamstime_s_102981408-min.jpg", "mpcId":"3665tgr34", "description": "A zk-snark game.", "creator": "jsd9843ksdh2342494k0askl0"},
      {"title": "Aayush's Snark", "image":"https://cryptonomist.ch/wp-content/uploads/2018/07/dreamstime_s_102981408-min.jpg", "mpcId":"3665tgr34", "description": "A zk-snark game.", "creator": "jsd9843ksdh2342494k0askl0"},
      {"title": "Aayush's Snark", "image":"https://cryptonomist.ch/wp-content/uploads/2018/07/dreamstime_s_102981408-min.jpg", "mpcId":"3665tgr34", "description": "A zk-snark game.", "creator": "jsd9843ksdh2342494k0askl0"},
      {"title": "Aayush's Snark", "image":"https://cryptonomist.ch/wp-content/uploads/2018/07/dreamstime_s_102981408-min.jpg", "mpcId":"3665tgr34", "description": "A zk-snark game.", "creator": "jsd9843ksdh2342494k0askl0"},
      {"title": "Aayush's Snark", "image":"https://cryptonomist.ch/wp-content/uploads/2018/07/dreamstime_s_102981408-min.jpg", "mpcId":"3665tgr34", "description": "A zk-snark game.", "creator": "jsd9843ksdh2342494k0askl0"},
        ] // todo get from db

    return (
        <div
          style={{
            backgroundColor: 'black',
            paddingBottom: '50px'
          }}
        >
          {Header}
            <Typography 
              className={classes.title} variant="h3" component="h3">
                All MPC Ceremonies
            </Typography>
            {ceremonies.map((ceremony, i) => (
                <MPCCard 
                    key={ceremony} 
                    mpcId={ceremony.mpcId} 
                    title={ceremony.title} 
                    description={ceremony.description} 
                    date={ceremony.date} 
                    alt={ceremony.title} 
                    image={ceremony.image}>
                </MPCCard> 
            ))}
        </div>
    );
}

