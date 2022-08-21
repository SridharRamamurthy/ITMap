import React, { useEffect, useState } from 'react';

import './App.css';
import LeftPanel from './leftPanel';
import RightPanel from './rightPanel';
import Header from './header';

const Home = (props) => {

    const [tab, setTab,] = useState("Home")
    const [displayMenu, setDisplayMenu] = useState(false)

    return (
        <div className="flex-container-fluid" >
            <div className="row">
                < Header
                    displayMenu={true}
                    setDisplayMenu={() => { setDisplayMenu(!displayMenu) }} />
            </div>
            <div className="row border">
                {
                    displayMenu &&
                    <div class="col-md-2 col-sm-4 p-0  " style={{
                        "minHeight": "85vh",
                        "position":"absolute",
                        "z-index":99,
                        "backgroundImage": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                    }} >
                        {

                            <div class="col-md-12 col-sm-6 mb-4 " >
                                <LeftPanel
                                    tab={tab}
                                    setTab={setTab}
                                    setDisplayMenu={setDisplayMenu} />
                            </div>
                        }
                    </div>

                }

                <div class={"col-md-12 col-sm-6"} style={{
                    border: "solid 2px #e1e1e1",
                    "minHeight": "85vh", backgroundColor: "#c7ecf4"
                }}>
                    <RightPanel tab={tab} />
                </div>

            </div>

            <div className="row p-2">footer</div>
        </div>

    )
}



export default Home