import { events } from "../../data/mocks/events"
import { EventCard } from "./EventCard"

export const EventList = () => {
    return (
        <>
            <div className="row">
                {events.map((event) => (
                    <div className="col-md-3 mb-4" key={event.id}>
                        <EventCard event={event}/>
                    </div>
                ))
                }
            </div>
        </>
    )
}