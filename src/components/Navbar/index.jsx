import {useState,useEffect, forwardRef, useImperativeHandle} from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = forwardRef(({ onSearch }, ref) =>{
    const [search,setSearch] = useState('');

    useEffect(()=>{
        console.log('onSearch changed');
    },[onSearch]);

    useEffect(()=>{
        console.log('component ready');
    },[]);

    useEffect(()=>{
        console.log('search changed');
    },[search]);

    useImperativeHandle(ref, ()=>({
        search,
        setSearch,
    }));

    const handleInputChange = (ev) =>{
        setSearch(ev.target.value);
    };

    const handleInputKeyDown = (ev) =>{
        if(ev.key === 'Enter'){
            onSearch(search);
        }
    };

    

    return (
        <div ref={ref} style={{
            marginBotton:14,
            maxWidth:'100%',
            display:'flex',

        }}>
            <div style={{flex:1,display:'flex'}}>
            <p style={{
                fontSize:18,
                fontWeight:'bold'
            }}>My wallet</p>
            </div>
            <div style={{
                flex:1,
                display:'flex',
                alignItems:'center', 
                justifyContent:'flex-end'}}>
            <input style={{
                fontSize:16,
                padding:'6px 12px',
                borderRadius:4,
                border:'none',
                width:200
            }}
            className={styles.fontAwesome}
            placeholder="&#xf002; Search event" 
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={search}
            />

<Link to="/profile/my-info"
className={styles.fontAwesome}
style={{
                marginLeft:24,
                color:'#000',
                textDecoration:'none'
            }}>&#xf007; My profile</Link>

            </div>

           
        </div>
    );
});

Navbar.displayName='Navbar';
export default Navbar;