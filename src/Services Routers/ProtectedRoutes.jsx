import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {

    if(localStorage.getItem("token"))
    {
        return(
            <>
                {children}
            </>
        )
    }
    else{
        return (
            <>
                {alert("Please Login to Home page")}
                <Navigate to="/login"/>
            </>
        )
    }
}

export default ProtectedRoutes


//Here we have used Context api 's children.....

/*Here if the local Storagess Childeren matches with the  tokens that special Keyword than return children means it will
    means if it is either users or admin...than if will redirect to Login Page...
    if Not than it will return to the login Page itself....
*/

