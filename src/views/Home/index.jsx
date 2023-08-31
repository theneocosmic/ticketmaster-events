import { useState,useRef, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Events from '../../components/Events';
import SignupForm from '../../components/SignupForm';
import ReactPaginate from 'react-paginate';
import styles from './Home.module.css';
import useEventsResults from '../../state/event-result';
import { useCallback } from 'react';


const Home = () => {


    const [searchTerm, setSearchTerm] = useState('');
    const {data,isLoading,error, fetchEvents} = useEventsResults();
    const events = data?._embedded?.events || [];
    const page = data?.page || {};
    const containerRef = useRef();

    const fetchMyEventsRef= useRef();
    fetchMyEventsRef.current = fetchEvents;

    useEffect(() => {
      fetchMyEventsRef.current();
      },[]);
    

const handleNavbarSearch = (term) => {
  console.log('containerRefCurrent' + containerRef.current.setSearch(''));
  setSearchTerm(term);
  fetchEvents(`&keyword=${term}`);
};

const handlePageClick = useCallback(({selected}) =>{
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
},[searchTerm, fetchEvents]);

const renderEvents=()=>{
  if(isLoading){
    return <div>Loading data ...</div>
  }
  else{
<Events searchTerm ={searchTerm} events={events}/>
  }

  if(error){
      return <div>An error has ocurred</div>
  }

  return (
    <div className={styles.eventsPaginateContainer}> 
  <Events searchTerm={searchTerm} events={events} />
  <ReactPaginate
  className={styles.pagination}
  nextClassName={styles.next}
  previousClassName={styles.previous}
  pageClassName={styles.page}
  activeClassName={styles.activePage}
  disabledClassName={styles.disabledPage}
  breakLabel="..."
  nextLabel=">"
  onPageChange={handlePageClick}
  pageRangeDisplayed={5}
  pageCount={page.totalPages}
  previousLabel="<"
  renderOnZeroPageCount={null}
  />
  </div>
  );
};

  return (
      <div>
       <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
       {renderEvents()}
       {/* <SignupForm/> */}
      </div>
  )
};

export default Home;

