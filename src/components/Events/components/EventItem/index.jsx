import styles from './EventItem.module.css';
import HearthFilled from '../../../../assets/hearth-filled.png';
import HearthUnfilled from '../../../../assets/hearth-unfilled.png';
import useLikedEvents from '../../../../hooks/useLikedEvents';

const EventItem = ({info,id,name,image,onEventClick})=>{
    const {isEventLiked,toggleEventLike,checkIsEventLiked} = useLikedEvents(id);

    const handleSeeMoreClick = (ev) => {
            ev.stopPropagation();
            onEventClick(id);
        };

        const handleHearthClick = ()=>{
            toggleEventLike();
        };
    

    return(
        <div className={styles.eventItemContainer}>
            <div className={styles.imageContainer}>
                <img src={isEventLiked || checkIsEventLiked(id) ? HearthFilled : HearthUnfilled} alt="Hearh button" className={styles.hearthImage}  onClick={handleHearthClick}/>
            <img src={image} alt={name} width={200} height={200} />

            </div>
            <div className={styles.eventInfoContainer}>
            <h4 className={styles.eventName}>{name}</h4>
            <p className={styles.eventInfo}>{info}</p>
            <button className={styles.seeMoreBtn} onClick={handleSeeMoreClick}>See more</button>
            </div>
        </div>
    );
};

export default EventItem;