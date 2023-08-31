import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import styles from './Profile.module.css'

const Profile = ()=>{

    const {pathname} = useLocation();
    const navigate = useNavigate();

    const handleTabClick = (path) => {
        navigate(`/profile/${path}`);
    };

return(
<div>
    <Link className={styles.homeLink, styles.fontAwesome}  to="/">&#xf015; Home</Link>
    <div className={styles.tabsContainer}>
        <span className={`${pathname.includes('my-info') ? styles.active : ''} ${styles.tab}`}
        onClick = {() => handleTabClick('my-info')}
        >
            My info
            </span>
        <span className={`${pathname.includes('liked-events') ? styles.active : ''} ${styles.tab}`}
        onClick = {() => handleTabClick('liked-events')}
        >
            Liked Events
            </span>

    </div>
    <Outlet/>
</div>
)
};


export default Profile;