import { useState, useEffect } from 'react'
import { Trip } from './Trips'
import { Link, useParams } from 'react-router-dom'

const TripDetail = () => {
    const [trip, setData] = useState<Trip>({})
    const { id, startDate, endDate, name, destination, image, activities, price, description } = trip
    let { tripID } = useParams()


    useEffect(() => {
        const getTrip = async () => {
            const response = await fetch(`http://localhost:3000/api/trips/${tripID}`,
                { headers: { authorization: "test-token" } })
            const trip = await response.json()
            setData(trip)
        }
        getTrip()
    }, [])

    return (
        <div>
            <button><Link to={'/Home'}>Home</Link></button>
            <div id="trip">
                <h4><strong>name: </strong>{name}</h4>
                <p><strong>destination: </strong>{destination}</p>
                <h5><strong>startDate: </strong>{startDate}</h5>
                <h5><strong>endDate: </strong>{endDate}</h5>
                <h4><strong>price: </strong>{price}</h4>
                <p><strong>priactivitiesce: </strong>{activities}</p>
                <h4><strong>description: </strong>{description}</h4>
                <img src={image} />
                <button><Link to={`/UpddateTrip/${id}`}>Upddate trip</Link></button>
            </div>
        </div>
    )
}

export default TripDetail