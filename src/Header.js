import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import redirect from './redirect';
import colors, {theme} from './colors';
import { ThemeProvider } from '@material-ui/core/styles';

let Header = (
    
    <ThemeProvider theme={theme}>
      <AppBar elevation={0} position="static">
        <Toolbar>
            <Link style={{ textDecoration: 'none', color: colors.textWhite }} onClick={(e) => redirect("/")} color="inherit">
                <Typography variant="h6" color="inherit">
                    {`Snarkify`}
                </Typography>
            </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
export default Header;