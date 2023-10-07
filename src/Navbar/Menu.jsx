import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

const Menu = () => {
    let navigate = useNavigate();

    let role = localStorage.getItem("role");
    let token = localStorage.getItem("token");

    let logoutHandler = () => {
        alert("Are u sure you want to Logout!!");
        localStorage.clear();
        navigate("/login")
    }

    return(
        <div className={styles.menu}>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/gallary'}>Gallery</Link>
                </li>

                {/* logic for admin Dashboard */}

                {role === "ROLE_ADMIN" ? 
                    (<Link to={'/adminDashbord'}>
                        <li>Admin Here</li>
                    </Link>)
                    : null
                }

                {/* Logic for the from Logout to login and register using tokens */}
                {token ? (
                    <Link to={"/login"}>
                        <li onClick={logoutHandler}>Logout</li>
                    </Link>
                ):(
                    <>
                        <Link to={"/login"}>
                            <li>Login</li>
                        </Link>
                        <Link to={"/register"}>
                            <li>Register</li>
                        </Link>
                    </>
                )
                }
            </ul>
        </div>
    )
}


export default Menu;


//Here also we can put the <section></section> and <article></article>


// if(a > 10) ? true: false