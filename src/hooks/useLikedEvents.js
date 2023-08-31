import { useState } from "react";
import {LIKED_EVENTS_STORAGE_KEY} from '../utils/constants.js';


const checkIsEventLiked = (eventId) => {
    const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
    return likedEvents.includes(eventId);
};

const useLikedEvents = (eventId) => {
    const [isEventLiked, setIsEventLiked] = useState();

    const toggleEventLike = () =>{
        const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
        
        const eventIndex = likedEvents.indexOf(eventId);

        console.log('EventId: '+ eventId)

        if(eventIndex !== -1){
            console.log('quitar')
            likedEvents.splice(eventIndex,1);
            setIsEventLiked(false);
        }else{
            
            console.log('EventId: '+ eventId)

            console.log('poner')
            likedEvents.push(eventId);
            console.log('LikedEvents: ' + likedEvents)
            setIsEventLiked(true);
        }

        localStorage.setItem(LIKED_EVENTS_STORAGE_KEY,JSON.stringify(likedEvents));

    };

    return{
        isEventLiked,
        toggleEventLike,
        checkIsEventLiked
    }; 
};

export default useLikedEvents;