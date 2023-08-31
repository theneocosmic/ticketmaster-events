import { useForm } from "react-hook-form";
import styles from './MyInfo.module.css';
import { useEffect } from "react";

const USER_DATA='userData';

const MyInfo = () =>{

        const {handleSubmit,register, setValue} = useForm();

useEffect(() => {
        try{
                const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {};
                setValue('name',userData?.name);
                setValue('age',userData?.age);
                setValue('email',userData?.email);
        }
        catch(error){
                console.log(error);
        }
},[]);

        const handleFormSubmit = (data) => {
                try {
                        localStorage.setItem(USER_DATA,JSON.stringify(data));
                        alert('User updated');
                } catch (error) {
                        alert('An error ocurrs');
                }
        };



    return(
        <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
                <label className={styles.label}>Name
                        <input className={styles.input} {...register('name',{required:true, minLength:1, maxLength:120})}/>
                </label>
                <label className={styles.label}>Email
                        <input className={styles.input} {...register('email',{required:true, minLength:1, maxLength:120})}/>
                </label>
                <label className={styles.label}>Age
                        <input className={styles.input} {...register('age',{required:true, minLength:1, maxLength:120})}/>
                </label>
                <button className={styles.submitButton} type="submit">Submit</button>
        </form>
            
    );
    };
    
    export default MyInfo;