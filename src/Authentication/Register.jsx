import React, {useState} from 'react';
import axiosInstance from "../Helpers/AxiosInstance.js";
import {useNavigate} from "react-router-dom";

import styles from "./register.module.css"


const Register = () => {
  // let[username,setUsername] = useState("");
  // let[email,setEmail] = useState("");
  // let[pass,setPass] = useState("");
  // let[dob, setDob] = useState("");
  // let[phoneno, setPhoneno] = useState("");

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
  }
  );

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
    let info = await axiosInstance.post('/users/save', payload);
    console.log(info);
    alert("SUCCESSFULLY SUBMITTED");
    navigate("/login");
    // console.log(payload);
  };

  return (
    <div id={styles.box}>
      <form action='' onSubmit={handleSubmit} >
        <h2>Register Your Self</h2>
        <div className={styles.fieldreg}>
          <label htmlFor="userName">userName</label>
          <input type='text' name='userName' placeholder='User Name' value={userName} id ="userName" required onChange={handleData}/>
        </div>
        <div className={styles.fieldreg}>
          <label htmlFor="">Email  id</label>
          <input type='text' name='email'  placeholder='abc@gmail.com' value={email} id ="email" required onChange={handleData}/>
        </div>
        <div className={styles.fieldreg}>
          <label htmlFor="">password</label>
          <input type='text' name='password'  placeholder='password' value={password}  id ="email" required onChange={handleData}/>
        </div>        

        <div className={styles.fieldreg}>
          <label htmlFor="dob">Date of birth</label>
          <input type="text" id='dob' name='dob'  placeholder='yyyy/mm/dd' value={dob} required onChange={handleData}/>
        </div>

        <div className={styles.fieldreg}>
          <label htmlFor='phone'>Phone No</label>
          <input type='text' id='phone' name='phone' placeholder='*********' value={phone}  onChange={handleData}/>
        </div>
        
        <div id={styles.fieldgender}>    
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

export default Register
