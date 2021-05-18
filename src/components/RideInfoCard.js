import React from 'react';
import moment from "moment";
import {makeStyles} from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ticket_icon from "../icons/RideInfoCardIcons/ticket.png"
import Clock_icon from "../icons/RideInfoCardIcons/clock.png"

const useStyles = makeStyles({
    card: {
        backgroundColor: props => props.isToggled
            ? props.color
            : '#373737',
        height: '170px'
    },
    header: {
        backgroundColor: props => props.color,
        height: '5px',
        padding: '0px'
    },
    RideName: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    zone: {
        color: '#656565',
        fontSize: 14,
    },
    bottomContent: {
        display: 'flex',
        color: '#656565',
    },
    soldOut: {
        color: "darkred",
        fontWeight: 'bolder',
        textAlign: 'center'
    }
});

const RideInfoCard = props => {
    const {zone, rideName, remainingTickets, returnTime, onCardSelected} = props
    const classes = useStyles(props);
    const returnTimeHoursAndMin = moment(returnTime).format('hh:mm');
    const isSoldOut = remainingTickets === 0

    return (
        <Card>
            <CardActionArea onClick={isSoldOut ? null : onCardSelected}>
                <CardHeader className={classes.header}/>
                <CardContent className={classes.card}>
                    <Typography className={classes.zone} gutterBottom align='right'>
                        {zone}
                    </Typography>
                    <Typography className={classes.RideName} gutterBottom align='center'>
                        {rideName}
                    </Typography>
                    {isSoldOut && <Typography className={classes.soldOut}> SOLD OUT</Typography>}
                    <CardContent className={classes.bottomContent}>
                        <Avatar alt="Clock icon" src={Clock_icon}/>
                        <Typography>{returnTimeHoursAndMin}</Typography>
                        <Avatar alt="Ticket icon" src={ticket_icon}/>
                        <Typography>{remainingTickets}</Typography>
                    </CardContent>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default RideInfoCard
