// import React,{useEffect, useState} from 'react';
// import axiosInstance from '../../Helpers/AxiosInstance';
// // import { Link } from "react-router-dom";

// const Viewacademy = () => {

//   let [view, setView] = useState([]); //Here we need to pass an empty array...

//   let token = localStorage.getItem(""); //here we arestoring the tokens in local Storage

//   //Here for view we will use useEffect Hooks...
//   useEffect(() =>{
//     let fetchdata = async() => {
//       let {data} = await axiosInstance.get("/academymanagers/getall",{
//         headers : 
//         {
//           Authorization: `Bearer ${token}`
//         }
//       })
//       //
//       setView(data.data);
//     }
//     //We need to call thatfunction...
//     fetchdata();
//   })
//   return (
//     <div>
//       <h1>View Academy</h1>
//       {view.map((x) => {
//         return(
//           <div>
//             <h3>{x.userName}</h3>
//             <h3>{x.email}</h3>
//             <h3>{x.password}</h3>
//             <h3>{x.dob}</h3>
//             <h3>{x.phone}</h3>
//             <h3>{x.gender}</h3>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Viewacademy

import React from 'react'

const Viewacademy = () => {
  return (
    <div>
      <h1>View Manager</h1>
    </div>
  )
}

export default Viewacademy
