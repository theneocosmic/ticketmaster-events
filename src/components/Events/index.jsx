import EventItem from './components/EventItem';
import { useNavigate } from 'react-router-dom';
import { memo, useState } from 'react';
import eventFetcher from '../../utils/fetchEvents'

const Events = ({ searchTerm,events }) => {
const navigate = useNavigate();

    const handleEventItemClick = (id) => {
        console.log('evento clickeado: ',id)
        navigate(`/detail/${id}`);
    };

    const renderEvents = () => {

        if(searchTerm.length > 0){
            eventFetcher(`keyword=${searchTerm}`);
        }
        
        let eventsFiltered = events;

            if(eventsFiltered.length > 0){
                // setTotalEvents(eventsFiltered.length);
                return eventsFiltered.map((eventItem) => (
                    <EventItem 
                    key={`event-item-${eventItem.id}`} 
                    name={eventItem.name}
                    info={eventItem.info}
                    image={eventItem.images[0].url}
                    id = {eventItem.id}
                    fecha={eventItem.dates.start.dateTime}
                    onEventClick={handleEventItemClick}
                    />
                    ));
                }
                else{
                    return (<div>No results found</div>);
                }
    };

        return(<div>
            <h2>Eventos</h2>
            {searchTerm.length > 0 && <p>Total de eventos encontrados {events.length}</p>}
           {renderEvents()}
        </div>)
};

export default memo(Events);