import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export interface Trip {
    id?: number,
    name?: string,
    destination?: string,
    startDate?: string,
    endDate?: string,
    description?: string,
    price?: number,
    image?: string,
    activities?: string[] | string,
}
const Trips = () => {
    const [data, setData] = useState<Trip[]>([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:3000/api/trips',
                { headers: { authorization: "test-token" } })
            const trips = await response.json()
            setData(trips)
        }
        getData()
    }, [])

    const deleteTrip = async (id: number | undefined, e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e?.preventDefault()
        const response = await fetch(`http://localhost:3000/api/trips/${id}`,
            { headers: { authorization: "test-token" }, method: "DELETE" })
        const deletedTrip = await response.json()
        if (response.ok) {
            setData(prev => prev.filter(trip => trip.id !== deletedTrip.id))
        }
    }

    return (
        <div>
            <button><Link to={'/Home'}>Home</Link></button>
            <div>
                {data.map(({ id, name, destination, startDate, endDate, image }, index) =>

                    < Link to={`/more/${id}`} key={index}>
                        <div id="trip">
                            <h4><strong>name: </strong>{name}</h4>
                            <p><strong>destination: </strong>{destination}</p>
                            <h5><strong>startDate: </strong>{startDate}</h5>
                            <h5><strong>endDate: </strong>{endDate}</h5>
                            <img src={image} />
                            <button onClick={(e) => {
                                deleteTrip(id, e)
                            }}>Delete</button>
                        </div> </Link >)}
            </div>
        </div>
    )
}

export default Trips 