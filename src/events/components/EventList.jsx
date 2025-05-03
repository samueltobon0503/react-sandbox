import React from 'react'
import { events } from '../mocks/Events'
import EventCard from './eventCard'

const EventList = () => {
    return (
        <>
            <div className='row'>
                {events.map((event) =>(
                    <div className='col-md-3' key = {event.id}>
                        <EventCard event = {event}/>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default EventList
