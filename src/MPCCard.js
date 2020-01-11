import React, {useState, Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/button';
import redirect from './redirect'
import {Redirect} from 'react-router-dom'
import {theme} from './colors';

const useStyles = makeStyles(theme => ({
  card: {
    margin: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  typography: {
    fontFamily: 'Muli',
    fontWeight: 500,
  },
}));

export default function MPCCard(props) {
  // const [expanded, setExpanded] = useState(false);
  // const handleExpandClick = (event) => {
  //   setExpanded(!expanded);
  // };
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");

  // static contextTypes = {
  //   router: PropTypes.object
  // }
  const redirectToTarget = () => {
    this.context.router.history.push(`/target`)
  }
  const goToCeremony = (event) => {
    setIsRedirecting(true);
    setRedirectLink((props.mpcId === "new") ? `/new` : `/mpc/${props.mpcId}`);

    console.log(props.mpcId)
    // redirect(setRedirectLink);
  }
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {(props.title && props.title.length > 0) ? props.title[0] : "$"}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon/>
          </IconButton>
        }
        title={props.title ? props.title : "Unknown Ceremony"}
        subheader={props.date ? props.date : "No set date"}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description ? props.description : "A standard MPC ceremony."}
        </Typography>
      </CardContent>
      <CardActions>
        {isRedirecting ? <Redirect to={redirectLink}/> : <Fragment></Fragment>}
        <Button size="small" color="primary" onClick={goToCeremony}>
          {props.mpcId === "new" ? "Create ceremony" : "See Ceremony"}
        </Button>
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography paragraph>More Info:</Typography>
          <Typography paragraph>
              {props.moreInfo? props.moreInfo : "A standard MPC."}
          </Typography>
          </CardContent>
      </Collapse> */}
    </Card>
  );
}