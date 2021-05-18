import axios from "axios";

const token = '433898df4a3e992b8411004109e4d574a90695e39e'
const Url = {
    GetRidesList: `http://fast-rider.herokuapp.com/api/v1/rides?token=${token}`,
    PostTicket: 'http://fast-rider.herokuapp.com/api/v1/tickets',
};

class FastRiderAPI {

    fetchRideList() {
        return axios.get(Url.GetRidesList)
            .then((response) => {
                if (response.status === 200) {
                    return response.data.map((ride) => {
                        return {
                            id: ride.id,
                            zone: ride.zone,  //object
                            name: ride.name,
                            remainingTickets: ride.remaining_tickets,
                            returnTime: ride.return_time
                        }
                    })
                } else {
                    throw new Error(`status code: ${response.status}`)
                }
            }).catch((error) => {
                console.error(error)
                throw error;
            })
    }

    submitTicket(pinCode, rideId) {
        const body = {
            pin: pinCode,
            ride_id: rideId,
            token
        }
        return axios.post(Url.PostTicket, body)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    return {
                        accessCode: response.data.access_code,
                        returnTime: response.data.return_time,
                        ride: response.data.ride
                    }
                } else {
                    throw new Error(`status code: ${response.status}`)
                }
            }).catch((error) => {
                console.error(error)
                throw error;
            })
    }
}

export default FastRiderAPI;