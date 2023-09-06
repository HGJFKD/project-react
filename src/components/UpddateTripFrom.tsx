import { useState, useEffect } from 'react'
import { Trip } from './Trips'
import { useParams, redirect, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'


const UpddateTripFrom = () => {
    const [trip, setTrip] = useState<Trip>({})
    let { tripID } = useParams()

    useEffect(() => {
        const getTrip = async () => {
            const response = await fetch(`http://localhost:3000/api/trips/${tripID}`,
                { headers: { authorization: "test-token" } })
            const trip = await response.json()
            reset(trip)
        }
        getTrip()
    }, [])

    const { register, reset, handleSubmit } = useForm()

    const upDateTrip = async (data: Object) => {
        const response = await fetch(`http://localhost:3000/api/trips/${tripID}`,
            {
                headers: { authorization: "test-token", "content-type": "application/json" },
                method: "PUT",
                body: JSON.stringify(data),

            })

        if (response.ok) {
            redirect("/trips")
        }


    }


    return (
        <div>
            <form onSubmit={handleSubmit(upDateTrip)}>
                <input {...register('name')}></input>                <br />
                <input {...register('destination')}></input>                <br />
                <input {...register('startDate')}></input>                <br />
                <input {...register('endDate')}></input>                <br />
                <input {...register('description')}></input>                <br />
                <input {...register('price')}></input>                <br />
                <img src={trip.image} />                <br />
                <input {...register('image')}></input>                <br />
                <input {...register('activities')}></input>                <br />
                <button type='submit'>Update trip</button>                <br />
                <button> <Link to={'/trips'}>Back to trips</Link></button>
            </form>

        </div>
    )
}

export default UpddateTripFrom