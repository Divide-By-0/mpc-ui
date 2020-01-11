import { createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

let colors = {
    bgBlack: "#020202",
    colorRed: "#4C0827",
    colorBlue: "#034078",
    colorPurple: "#453A49",
    colorLightPurple: "#BBBDF6",
    textWhite: "#EEEEEE",
}

export const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: { main: colors.colorPurple, contrastText: colors.textWhite },
        secondary: { main: colors.colorBlue, contrastText: colors.textWhite }
    },
    status: {
        danger: colors.colorRed,
    },
    typography: {
        color:colors.textWhite,
        fontFamily: [
            'rubik',
        ].join(','),
    },
    shadows: ["none"]
}));

export default colors;