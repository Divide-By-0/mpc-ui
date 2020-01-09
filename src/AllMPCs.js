import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import MPCCard from "./MPCCard";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
}));

function App() {
    const classes = useStyles();
    let header = (
        <div>
            <AppBar position="static">
                <Toolbar>   {/* variant="dense"> */}
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        MPC Ceremonies
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
    // let cards = (<div></div>)
    const allCards = []
    let clients = {
        "as9hndjgn2895423fndsh09": {"title": "Brian's Game", "mpcid":"12312125", "description": "A zk-snark game.", "creator": "jsd9843ksdhf901kl94k0askl0"}, 
        "kjd9034kj0jdsfn903jekwr": {"title": "Aayush's Snark", "image":"https://cryptonomist.ch/wp-content/uploads/2018/07/dreamstime_s_102981408-min.jpg", "mpcid":"3665tgr34", "description": "A zk-snark game.", "creator": "jsd9843ksdh2342494k0askl0"}, 
        "addNew": {"title":"Create your own ceremony", "image": "https://cdn0.iconfinder.com/data/icons/coding-and-programming-1/32/add_new_plus_addition_function_circle_shape-512.png", "mpcid":"new", }} // todo get from db
    // console.log(this.state.allHandCards)
    for (let hashIndex in clients) {
        allCards.push( 
        <MPCCard 
            key={hashIndex} 
            mpcid={clients[hashIndex].mpcid} 
            title={clients[hashIndex].title} 
            description={clients[hashIndex].description} 
            date={clients[hashIndex].date} 
            alt={clients[hashIndex].title} 
            image={clients[hashIndex].image}>
        </MPCCard>)
    }

    return (
        <Fragment>
            {header}
            {allCards}
        </Fragment>
    );
}


export default App;
