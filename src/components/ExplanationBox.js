import React from 'react';
import {Grid} from '@material-ui/core';
import Clock_icon from '../icons/ExplainationBoxIcons/clock.png';
import Submit_icon from '../icons/ExplainationBoxIcons/submit.png';
import Ticket_icon from '../icons/ExplainationBoxIcons/ticket.png';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    content: {
        color: '#ffffff',
        textAlign: 'center',
        padding: '0px',
        marginBottom: '70px',
    },
    avatar: {
        backgroundColor: '#373737',
        alignSelf: 'center',
        marginBottom: '20px'
    }
});

const ExplanationBox = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Grid container spacing={4}
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start">
                <Grid container item xs={12} sm={4}
                      direction="column"
                      alignItems="center">
                    <Avatar className={classes.avatar} alt="Ticket icon" src={Ticket_icon}/>
                    <Typography> Enter your park ticket #PIN number, then select the desired ride while noting the
                        stated return time</Typography>
                </Grid>
                <Grid container item xs={12} sm={4}
                      direction="column"
                      alignItems="center">
                    <Avatar className={classes.avatar} alt="Submit icon" src={Submit_icon}/>
                    <Typography>press 'submit' to confirm and retrieve your access code</Typography>
                </Grid>
                <Grid container item xs={12} sm={4}
                      direction="column"
                      alignItems="center">
                    <Avatar className={classes.avatar} alt="Clock icon" src={Clock_icon}/>
                    <Typography>When the time comes, use the special FastRider Line to cut out a considerable wait
                        time</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default ExplanationBox;
  

  