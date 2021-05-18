import React from 'react';
import {Grid} from '@material-ui/core';
import RideInfoCard from "./RideInfoCard";

function RideCardsContainer(props) {

    return (
        <div>
            <Grid container spacing={1}>
                {props.ridesInfo.map((ride) => (
                    <Grid key={ride.id} item xs={6} sm={3}>
                        <RideInfoCard
                            zone={ride.zone.name}
                            color={ride.zone.color}
                            rideName={ride.name}
                            remainingTickets={ride.remainingTickets}
                            returnTime={ride.returnTime}
                            isToggled={props.selectedRideId === ride.id}
                            onCardSelected={(() => {
                                props.onCardSelected(ride.id)
                            })}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default RideCardsContainer;