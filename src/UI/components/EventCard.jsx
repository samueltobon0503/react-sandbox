export const EventCard = ({ event }) => {
    return (
        <>
            <div className="card">
                <img src={event.imageUrl} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">
                        {event.name}
                    </h5>
                    <p className="card-text">
                        <span>End date: {event.endDate}</span>
                    </p>
                </div>
            </div>
        </>
    )
}