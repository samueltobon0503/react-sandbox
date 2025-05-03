import React from 'react'
import EventList from '../components/eventList'

const Homepage = () => {
    return (
        <>
            <div className='container mt-4'>
                <h1 className='text-center mb-4'> my events</h1>
                <div className='row'>
                    <EventList/>
                </div>
            </div>
        </>
    )
}

export default Homepage
