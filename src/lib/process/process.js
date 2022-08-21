import React, { useEffect, useState } from 'react';

import './style.css'

const Process = (props) => {

    return (
        <div className="flex-container-fluid py-4"  >
            <div className="row">
                <div className="p-2 mx-4" style={{ backgroundColor:"#FFFFFF", border: "solid 3px #FFFFFF" }}>

                    {
                        props.steps && props.steps.map((item, index) => {
                            return (
                                <div>
                                    <div class="middle-div fw-bold"
                                        style={{ backgroundColor: item.currentStep ? "#081f87" : "#0489ce" }}>
                                        {item.name}
                                    </div>
                                    {
                                        index !== props.steps.length - 1 ?
                                            <div class="arrow-right"
                                                style={{ borderLeft: item.currentStep ? "20px solid #081f87" : "20px solid #0489ce" }}
                                            >
                                            </div> : <div />}
                                </div>
                            )
                        })
                    }
                </div>

                <div className="p-2 mx-4" style={{ border: "solid 3px #FFFFFF" }}>
                    Test
                </div>
            </div>
        </div>
    )
}

export default Process