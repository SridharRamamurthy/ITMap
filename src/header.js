import React, { useEffect, useState } from 'react';


const Header = (props) => {


    return (
        <div class="col-1">
            <div
                style={{
                    cursor: "pointer",

                }}
                onClick={(e) => {
                    e.stopPropagation();
                    props.setDisplayMenu()
                }}>
                {
                    props.displayMenu &&
                    <i className="fa fa-bars fa-2x p-2"></i>
                }
               
            </div>
        </div>
    )
}


export default Header
