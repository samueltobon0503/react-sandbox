import React from 'react'

const EventCard = () => {
    return (
        <div>
            <img
                src={event.image_url}
                className='card-img-top'
            />
            <div className='card-body'>
                <h5 className='card-title'>
                    {event.name}
                </h5>
                <p className='card-text'>
                    <span> Start date: {event.startDate}</span>
                </p>
                <p>
                    <span> End date: {event.endDate}</span>
                </p>
            </div>
        </div>
    )
}

export default EventCard
