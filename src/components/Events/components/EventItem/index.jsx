import styles from './EventItem.module.css';
import HearthFilled from '../../../../assets/hearth-filled.png';
import HearthUnfilled from '../../../../assets/hearth-unfilled.png';
import useLikedEvents from '../../../../hooks/useLikedEvents';
import {format} from 'date-fns';
import {es} from 'date-fns/locale';

const EventItem = ({info,id,name,image,onEventClick,fecha})=>{
    const {isEventLiked,toggleEventLike,checkIsEventLiked} = useLikedEvents(id);

  

    const handleSeeMoreClick = (ev) => {
            ev.stopPropagation();
            onEventClick(id);
        };

        const handleHearthClick = ()=>{ 
            toggleEventLike();
        };
    console.log(fecha);

    return(
        // <div className={styles.eventItemContainer}>
        <div className={styles.infoContainer}>
            <div className="row">
                <div className={[styles.dateContainer,'col-lg-2','col-md-2','col-sm-2','col-4','text-center'].join(' ')}>
                    {fecha ? 
                    <div><span className={styles.monthParagraph}>{format(new Date(fecha),'LLL',{locale: es}).toLocaleUpperCase()}</span></div>:
                    null}
                    {fecha ? 
                    <div><span className={styles.dayParagraph}>{format(new Date(fecha),'d',{locale: es})}</span></div>:
                    null}
                        <img src={isEventLiked || checkIsEventLiked(id) ? HearthFilled : HearthUnfilled} alt="Hearh button" className={styles.hearthImage}  onClick={handleHearthClick}/>

                </div>
                <div className={[styles.imageEventSection,'col-lg-2','col-md-2','col-2'].join(' ')}>
                <div className={styles.imageContainer}>
                        <img className={styles.imageEvent} src={image} alt={name} />
                    </div>
                </div>
                <div className={[styles.rigthSide, 'col-lg-8','col-md-6','col-sm-6','col-8'].join(' ')}>
                   
                    <div className={styles.eventInfoContainer}>
                         <h4 className={styles.eventName}>{name}</h4>
                         <p className={styles.eventInfo}>{info}</p>
                         <button className={[styles.fontAwesome,"btn","btn-primary"].join(" ")} onClick={handleSeeMoreClick}>See more &#xf054;</button>
                    </div>
                   
                </div>

            
            </div>
        </div>
    );
};

export default EventItem;