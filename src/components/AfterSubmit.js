import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import successesIcon from "../icons/successes_icon.png";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import moment from "moment";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({

    card: {
        backgroundColor: '#373737',
        width: '100%',
        marginBottom: '40px',
        padding: '5px'
    },
    textHeader: {
        color: '#656565',
        fontSize: 18,
        padding: '30px 15px',
        fontWeight: 'bold'
    },
    avatar: {
        backgroundColor: '#373737',
        display: 'center',
        height: '60px',
        width: '60px'
    },
    header: {
        backgroundColor: props => props.ticketInfo.ride.zone.color,
        height: '5px',
        padding: '0px'
    },
    rideName: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
        position: 'absolute',
        left: '0px',
        top: '0px'
    },
    zoneName: {
        position: 'absolute',
        right: '0px',
        top: '0px',
        color: '#656565',
        fontSize: 16,
        fontWeight: 'bold',
    },
    greyText: {
        color: '#656565',
        fontSize: 16,
        fontWeight: 'bold',
    },
    whiteText: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    contentUp: {
        position: 'relative'
    },
    contentBottom: {
        textAlign: 'center',
        marginTop: '50px'
    },
});

function AfterSubmit(props) {
    const classes = useStyles(props);
    const {onGoBack, ticketInfo} = props
    const returnTimeHoursAndMin = moment(ticketInfo.returnTime).format('hh:mm');

    return (
        <Grid container
              direction="column"
              justify="space-between"
              alignItems="center">
            <Avatar className={classes.avatar} alt="Clock icon" src={successesIcon}/>
            <Typography className={classes.textHeader} gutterBottom align='center'>
                Thank you for using The Jungle™ FastRider ticket system - your access code is now ready!
            </Typography>
            <Card className={classes.card}>
                <CardHeader className={classes.header}/>
                <CardContent>
                    <CardContent>
                        <div className={classes.contentUp}>
                            <Typography className={classes.rideName}>{ticketInfo.ride.name}</Typography>
                            <Typography className={classes.zoneName}>{ticketInfo.ride.zone.name}</Typography>
                        </div>
                        <div className={classes.contentBottom}>
                            <Typography className={classes.greyText}>Return At</Typography>
                            <Typography className={classes.whiteText}>{returnTimeHoursAndMin}</Typography>
                            <Typography className={classes.greyText}>Use Access Code</Typography>
                            <Typography className={classes.whiteText}>{ticketInfo.accessCode}</Typography>
                        </div>
                    </CardContent>
                </CardContent>
            </Card>
            <Button color='secondary' variant="contained" disableElevation
                    onClick={onGoBack}>Go Back
            </Button>
        </Grid>
    );
}

export default AfterSubmit;