import React, {useState} from 'react';
import axiosInstance from "../Helpers/AxiosInstance.js";
import {useNavigate} from "react-router-dom";
import styles from './adminregister.module.css'
const Adimregister = () => {

    let navigate = useNavigate();
    //here we are oassing an array...
    let [data, setData] = useState(
    {
      userName: "",
      email: "",
      password: "",
      dob: "",
      gender: "",
      phone: ""
    });

    let {userName, email,password, dob, gender , phone} = data;

  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    //here we will destrucure that value....
    setData({...data, [name]: value});
  }
  
  let handleSubmit = async(e) => {
    e.preventDefault();
    let payload = {userName,email,password,dob,gender,phone};
    console.log(payload);
    let info = await axiosInstance.post('/admins/save', payload);
    console.log(info);
    alert("SUCCESSFULLY SUBMITTED AS ");
    navigate("/login");
    // console.log(payload);
  };

  return (
    <div id={styles.adreg}>
      <form action='' onSubmit={handleSubmit}>
      <h2>Admin Register</h2>
        <div className={styles.adinput}>
          {/* <label htmlFor="userName">userName</label> */}
          <input type='text' name='userName' placeholder='Admin Name' value={userName} id='userName' onChange={handleData}/>
        </div>
        <div className={styles.adinput}>
          {/* <label htmlFor="">Email</label> */}
          <input type='text' name='email' placeholder='adminame@gmail.com' value={email}  required onChange={handleData}/>
        </div>
        <div className={styles.adinput}>
          {/* <label htmlFor="">password</label> */}
          <input type='text' name='password' placeholder='Users@2345' value={password}  required onChange={handleData}/>
        </div>

        <div className={styles.adinput}>
          {/* <label htmlFor="dob">DOB</label> */}
          <input type="text" id='dob' name='dob' placeholder='yyyy/mm/dd' value={dob} required onChange={handleData}/>
        </div>

        <div id={styles.adgender}> 
          <label htmlFor="gender">gender</label>
          <input type='radio' id='gender' name="gender" value="male"  onChange={handleData}/>male
          <input type='radio' id='gender' name="gender" value="female"  onChange={handleData}/>female
        </div>

        <div className={styles.adinput}>
          {/* <label htmlFor='phone'>Phone</label> */}
          <input type='text' id='phone' name='phone' placeholder='9********' value={phone}  onChange={handleData}/>
        </div>
        <div>
          <button>Submit</button>
        </div>
    </form>
    </div>
  )
}

export default Adimregister
