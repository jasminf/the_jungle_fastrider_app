import './App.css';
import AfterSubmit from './components/AfterSubmit';
import React, {useState, useEffect} from 'react';
import {Grid, Slide, useScrollTrigger} from '@material-ui/core';
import RideCardsContainer from './components/RideCardsContainer';
import ExplanationBox from './components/ExplanationBox';
import PinCodeSubmissionBox from './components/PinCodeSubmission';
import FastRiderAPI from "./services/Api";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Hidden from '@material-ui/core/Hidden';
import moment from "moment";

const useStyles = makeStyles({
    title: {
        padding: '50px',
        margin: '0px',
        textAlign: 'center',
        color: '#ffffff'
    },
    buttonMobile: {
        width: '66.2%',
        padding: '20px',
        position: 'fixed',
        bottom: '0%',
    },
});
const api = new FastRiderAPI();

function App() {
    const classes = useStyles();
    const [ridesInfo, setRidesInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedRideId, setSelectedRideId] = useState(null);
    const [pinNumber, setPinNumber] = useState('');
    const [ticketInfo, setTicketInfo] = useState(null);

    const trigger = useScrollTrigger();

    const isValidTime = (() => {
        const format = 'hh:mm'
        const beforeTime = moment('09:00', format);
        const afterTime = moment('19:00', format);
        return moment().isBetween(beforeTime, afterTime);
    })

    useEffect(() => {
        fetchRideData()
    }, []);

    const onClickSubmit = () => {
        if (!isValidTime()) {
            alert(`Tickets can be ordered only between 9:00 and 19:00`)
            return
        }
        if (!selectedRideId) {
            alert(`Ride was not selected`) // improve alert message. -> import Dialog from '@material-ui/core/Dialog';
            return
        }
        if (!pinNumber) {
            alert(`pin was not enter`)  // improve alert message.
            return
        }
        // if pinCodeValid
        api.submitTicket(pinNumber, selectedRideId)
            .then(ticketInfo => {
                console.log(`ticketInfo ${ticketInfo}`);
                setTicketInfo(ticketInfo)
            })
            .catch((error) => {
                setError(error);
            })
        // validation -> 1. ride id must be != null
        //2. a. pin code input value => !!pinNumber = true
        //   b. pin code is valid = optional -> when type
    }

    const fetchRideData = () => {
        api.fetchRideList()
            .then(rideData => {
                setIsLoading(false);
                setRidesInfo(rideData);
            })
            .catch((error) => {
                    setIsLoading(false);
                    setError(error);
                }
            )
    }

    const onResetPage = () => {
        setSelectedRideId(null);
        setPinNumber('');
        setTicketInfo(null);
        setError(null);
        setIsLoading(true);
        fetchRideData();
    }

    return (
        <Grid container>
            <Grid item container direction="column" justify="space-between" alignItems="center">
                <Grid item xs={2}/>

                <Grid item xs={8}>
                    <Typography className={classes.title} variant="h4" gutterBottom>The Jungle™ FastRider
                        Service
                    </Typography>
                    <div>
                        {(() => {
                            if (error) {
                                return (
                                    <div>
                                        <Typography className={classes.title}>Error: {error.message}</Typography>;
                                        <Button color='secondary' variant="contained" disableElevation
                                                onClick={onResetPage}>Go Back
                                        </Button>
                                    </div>
                                )
                            } else if (isLoading) {
                                return (<Typography className={classes.title} variant="h5">Loading...</Typography>)
                            } else if (ticketInfo) {
                                return (<AfterSubmit onGoBack={onResetPage} ticketInfo={ticketInfo}/>)
                            } else {
                                return (
                                    <div>
                                        <ExplanationBox/>
                                        <PinCodeSubmissionBox pinNumber={pinNumber} setPinNumber={setPinNumber}
                                                              onClickSubmitBtn={onClickSubmit}/>
                                        <RideCardsContainer ridesInfo={ridesInfo} onCardSelected={setSelectedRideId}
                                                            selectedRideId={selectedRideId}/>
                                    </div>
                                )
                            }
                        })()}
                        <Hidden only={['sm', 'md', 'lg', 'xl']}>
                            <Slide direction='up' in={trigger}>
                                <Button color='secondary' className={classes.buttonMobile} variant="contained"
                                        disableElevation
                                        onClick={onClickSubmit}
                                >Submit
                                </Button>
                            </Slide>
                        </Hidden>
                    </div>
                </Grid>
                <Grid item xs={2}/>
            </Grid>
        </Grid>
    );
}

export default App;


