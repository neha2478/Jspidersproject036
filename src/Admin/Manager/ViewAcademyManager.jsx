import React , {useEffect, useState} from 'react';
import axiosInstance from '../../Helpers/AxiosInstance';

const ViewAcademyManager = () => {

  let [view, setView] = useState([]); 
  let token = localStorage.getItem(""); //here we arestoring the tokens in local Storage
  
    //Here for view we will use useEffect Hooks...
    useEffect(() =>{
      let fetchdata = async() => {
        //here we have destructured the data.....{data}
        let {data} = await axiosInstance.get("/academymanagers/getall",{
          headers : {
            Authorization: `Bearer ${token}`
          }
        });
        // console.log(data.data);
        setView(data.data);
      }
      //We need to call thatfunction...
      fetchdata();
    })

    return (
      <div>
        <h1>View Academy</h1>
        {view.map((x) => {
          return(
            <div>
              <h3>{x.userName}</h3>
              <h3>{x.email}</h3>
              <h3>{x.password}</h3>
              <h3>{x.dob}</h3>
              <h3>{x.phone}</h3>
              <h3>{x.gender}</h3>
            </div>
          )
        })}
      </div>
    )
}

export default ViewAcademyManager
