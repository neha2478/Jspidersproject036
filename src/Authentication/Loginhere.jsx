import React, { useState} from 'react';
import axiosInstance from '../Helpers/AxiosInstance';

import styles from "./login.module.css"
import { useNavigate } from 'react-router-dom';


const Loginhere = () => {

    let navigate = useNavigate();

    let[state, setState] = useState({
        //Hete we are creating the data.. in objectform
        userEmail : "",
        password: ""
    });

    //Destructing the data...........
    let {userEmail, password}  = state;

    let handleData = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        //here we are desturcuring the data...
        setState({...state, [name]: value})
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        let payload={userEmail,password}
        let {data}= await axiosInstance.post("/authenticate",payload);
        console.log(data);
        alert("SUCESSFULLY LOGGEDIN");

        let token = data.token; //token is given by browser itself, in console log object...
        let role = data.role; //role is given by browser itself , in console log object....

        //if the token and role are math than it will take to the login Page....
        if(token){
            localStorage.setItem("token",token); //then we are storing it into a local storage using setItem
            localStorage.setItem("role",role); //then we are storing it into a local storage using setItem
            navigate("/")  //here ot will take to the login Page...itself.... 
        }

    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.loginform}>
                <h2>Login</h2>
                <div className={styles.inputfield}>
                    <label htmlFor=''>userEmail</label>
                    <input type='text' id="username" placeholder="abc@gmail.com" onChange={handleData} name='userEmail' value={userEmail}/>
                </div>
                <div className={styles.inputfield}>
                    <label htmlFor=''>password</label>
                    <input type='text' id="password" placeholder="password" onChange={handleData} name='password' value={password}/>
                </div>
                <div className={styles.but}>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Loginhere
