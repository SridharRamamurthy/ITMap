import React, { useEffect, useState } from 'react';

import Login from './login';
import Register from './Register';
import './App.css';

const LoginTabs = (props) => {

    const [data, setData] = useState({});
    const [tab, setTab] = useState("SignIn")

    return (
        <div className="App-header">
            <div className="flex-container-fluid" style={{ boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)" }}>
                <div className="flex-container-fluid" style={{ flexDirection: "column" }} >
                    <div className="d-flex" >
                        <div className="d-flex p-3 px-4" style={{
                            backgroundColor: tab === "SignIn" ? "#c7ecf4" : "#ffffff"
                        }}
                            onClick={e => {
                                setTab("SignIn")
                            }}
                        >
                            <div className="icon px-2">
                                <i className="fa fa-user fa-2x" style={{ color: "#999999" }}></i>
                            </div>
                            <div>
                                <label> Sign In </label>
                            </div>
                        </div>


                        <div className="p-3 px-5 d-flex " style={{
                            backgroundColor: tab === "Signup" ? "#c7ecf4" : "#ffffff"
                        }}
                            onClick={() => {
                                setTab("Signup")
                            }}>
                            <div>
                                <i className="fa fa-user-plus fa-2x" style={{ color: "#999999" }}></i>
                            </div>

                            <div className="icon px-2">
                                <label> Sign up </label>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex-container-fluid col-12" >
                    <div style={{ height: "450px", backgroundColor: "#c7ecf4" }}>
                        {
                            tab === "SignIn" &&
                            <Login
                            />
                        }
                        {
                            tab === "Signup" &&
                            <Register
                            />

                        }

                    </div>
                </div>

            </div >
        </div>

    )
}

export default LoginTabs