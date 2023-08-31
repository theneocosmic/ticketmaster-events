// import { useParams } from "react-router-dom";
// import { useState } from "react";
import styles from './Detail.module.css';
import {format} from 'date-fns';
import {es} from 'date-fns/locale';
import eventFetcher from '../../utils/fetchEvents'
import { Link } from "react-router-dom";

const pathname = window.location.pathname;
const resource = eventFetcher(pathname.substring(8, pathname.length));

const Detail = () =>{ 
       // const { data } = useEventsResults();
    // const { eventId } = useParams();
    // const [eventData, setEventData] = useState({});
    const eventData = resource.eventDetail.read();
    console.log(eventData);

    return (
        <div className={styles.container}>
        <div className={styles.homeContainer}><Link className={styles.homeLink, styles.fontAwesome}  to="/">&#xf015; Home</Link></div>       
        <div className={styles.mainInfoContainer}>
            <img className={styles.eventImage} src={eventData.images?.[0].url} alt={eventData.name}/>
            <h4 className={styles.eventName}>{eventData.name}</h4>
            <p className={styles.infoParagraph}>{eventData.info}</p>
            {eventData.dates?.start.dateTime ? <p className={styles.dateParagraph}>{format(new Date(eventData.dates?.start.dateTime),'d LLLL yyyy H:mm',{locale: es})} hrs</p> : null}
            
            </div>
            <div className={styles.seatInfoContainer}>
                {eventData.seatmap ? <h3 className={styles.seatMapTitle}>Event Seat Map</h3>:''}
                {eventData.seatmap ? <img className={styles.seatInfoImg} src={eventData.seatmap.staticUrl} alt="Seatmap event" />:''}
                <p className={styles.pleaseNoteLegend}>{eventData.pleaseNote}</p>
                <p className={styles.priceRangeLegend}>Prices Range:<br/><b>{eventData.priceRanges?.[0].min}-{eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}</b></p>
            </div>
            <a className={styles.buyButton} href={eventData.url}>Buy ticket</a>
            
    </div>
    );
};

export default Detail;
