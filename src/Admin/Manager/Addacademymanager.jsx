import React from 'react';
import {useState} from 'react';
import axiosInstance from '../../Helpers/AxiosInstance';

import styles from './Acadmanager.module.css'

const Addacademymanager = () => {
  // let navigate = useNavigate();

  let token = localStorage.getItem("token") //Storing the data in localstorage ,using getItem() token to get that tokens

  //Creating the State and storing the data...
  let [data, setData] = useState({
    userName: "",
    email: "",
    password:"",
    dob: "",
    phone: "",
    gender: ""
  });

  // destructuring the data
  let {userName, email, password, dob, phone, gender} = data;

  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({...data, [name]: value});
  }

  let handleSubmit = async (e) => {
    //Here we will practise the post opertion
    
    e.preventDefault();
    let payload = {userName, email, password, dob, phone, gender};
    console.log(payload);
    let info = await axiosInstance.post("/academymanagers/save", payload,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    });
    console.log(info);
    alert("Successfully Submitted Academy Manager's data");
    // navigate('/') 
  }

  return (
    <div id={styles.acdregister} onSubmit={handleSubmit}> 
      <form action='' >
        <h2>Acadamy Manager Register</h2>
        <div className={styles.acdinput}>
          {/* <label htmlFor="userName">userName</label> */}
          <input type='text' name='userName' placeholder='User Name'  id ="userName" required  value={userName} onChange={handleData}/>
        </div>
        <div className={styles.acdinput}>
          {/* <label htmlFor="">Email  id</label> */}
          <input type='text' name='email'  placeholder='abc@gmail.com'  id ="email" value={email} onChange={handleData}/>
        </div>
        <div className={styles.acdinput}>
          {/* <label htmlFor="">password</label> */}
          <input type='text' name='password'  placeholder='password'  id ="password" required  value={password} onChange={handleData} />
        </div>        

        <div className={styles.acdinput}>
          {/* <label htmlFor="dob">Date of birth</label> */}
          <input type="text" id='dob' name='dob'  placeholder='yyyy/mm/dd' required  value={dob} onChange={handleData}/>
        </div>

        <div className={styles.acdinput}>
          {/* <label htmlFor='phone'>Phone No</label> */}
          <input type='text' id='phone' name='phone' placeholder='*********' required  value={phone} onChange={handleData}/>
        </div>

        <div id={styles.acdgender}>    
          <label htmlFor="gender">gender</label>
          <div>
          <input type='radio' id='gender' name="gender"  value="male"  onChange={handleData}/>male
          </div>
          <div>
          <input type='radio' id='gender' name="gender" value="female"  onChange={handleData}/>female
          </div>
        </div>
        
        <div>
          <button>Submit</button>
        </div>
    </form>
    </div>
  )
}

export default Addacademymanager
