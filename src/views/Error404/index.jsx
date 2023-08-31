import { useRouteError } from 'react-router-dom';
import styles from './Error404.module.css';

const Error404 =()=>{
    const error = useRouteError();
    console.log(error);
return (
 <div className={styles.container}>
    <h4 className={styles.title}>{error.status} Ops!</h4>
    <p className={styles.description}>{error.data}</p>
</div>)};

export default Error404;