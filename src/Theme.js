import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#373737', // card background
        },
        secondary: {
            main: '#4c4c4b', // submit button
        }
    },
    typography: {
        fontFamily: 'Open Sans, Arial'
    }
});

export default theme