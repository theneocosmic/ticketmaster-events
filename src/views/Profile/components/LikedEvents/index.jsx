import styles from './LikedEvents.module.css';
import { useEffect,useState } from 'react';
import {LIKED_EVENTS_STORAGE_KEY} from './../../../../utils/constants';
import EventItem from '../../../../components/Events/components/EventItem'
import { useNavigate } from 'react-router-dom';

const LikedEvents = () =>{

        const [events,setEvents] = useState([]);
        const [isLoading,setIsLoading] = useState(false);
        const [error,setError] = useState(false);

        const navigate = useNavigate();

        const handleEventItemClick = (eventId) => {
                navigate(`/detail/${eventId}`);
            };

        useEffect(() => {
          const fetchEventsDetails = async () => {
                try{
                        const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY))||[];
                        const results =[];
                        for (const eventId of likedEvents) {
                                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`);
                                const data = await response.json();        

                                results.push(data);
                        }
                        setEvents(results);
                }
                catch(error){
                        setError(error);
                }
                finally{
                        setIsLoading(false);
                }
          };
        
          fetchEventsDetails();
        },[]);

        if(Object.keys(error).length> 0){
                return <div>An error ocurrs</div>
        }
        if(isLoading){
                return <div>Loading...</div>
        }

return(
        <div>
                {events.map((event,index) =>(

                        <EventItem 
                        key={`liked-event-item-${event.id}-${index}`} 
                        name={event.name}
                        info={event.info}
                        image={event.images[0].url}
                        id = {event.id}
                        onEventClick={handleEventItemClick}
                        
                        
                />))}
        </div>
);
};

export default LikedEvents;