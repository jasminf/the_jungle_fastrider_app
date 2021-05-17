import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core';
import Input from '@material-ui/core/Input'
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    root: {
        marginBottom: '10px',
        paddingBottom: '10px',
    },
    input: {
        backgroundColor: '#ffffff',
        width: props => props.isDesktop
            ? '75%'
            : '100%'
    },
    button: {
        width: '25%'
    },
});

function PinCodeSubmissionBox(props) {

    const isDesktop = useMediaQuery(theme => theme.breakpoints.up('sm'));
    const classes = useStyles({isDesktop});
    const {setPinNumber, pinNumber, onClickSubmitBtn} = props

    return (
        <div className={classes.root}>
            <Grid container>
                <Input
                    className={classes.input}
                    placeholder="#PIN"
                    id="pinCode"
                    type="text"
                    value={pinNumber}
                    onChange={(e) => setPinNumber(e.target.value)}
                />
                <Hidden only='xs'>
                    <Button
                        color='secondary'
                        className={classes.button}
                        variant="contained"
                        disableElevation
                        onClick={onClickSubmitBtn}
                    >
                        Submit
                    </Button>
                </Hidden>
            </Grid>
        </div>
    )
}

export default PinCodeSubmissionBox;