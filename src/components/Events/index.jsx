import EventItem from './components/EventItem';
import { useNavigate } from 'react-router-dom';
import { memo, useState } from 'react';

const Events = ({ searchTerm,events }) => {
   
const navigate = useNavigate();

    const handleEventItemClick = (id) => {
        console.log('evento clickeado: ',id)
        navigate(`/detail/${id}`);
    };

    const renderEvents = () => {

        let eventsFiltered = events;
            if(searchTerm.length > 0){
                eventsFiltered = eventsFiltered.filter((item)=> 
                item.name.toLowerCase().includes(searchTerm));
            }
            console.log(eventsFiltered.length);

            if(eventsFiltered.length > 0){

                return eventsFiltered.map((eventItem) => (
                    <EventItem 
                    key={`event-item-${eventItem.id}`} 
                    name={eventItem.name}
                    info={eventItem.info}
                    image={eventItem.images[0].url}
                    id = {eventItem.id}
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
           {renderEvents()}
        </div>)
};

export default memo(Events);