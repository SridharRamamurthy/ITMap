import React, { useEffect, useState } from 'react';
import Chart from "./lib/chart/chart.js"

const chart = {
    "options": {
        "plugins": {
            "title": {
                "display": true,
                "text": "Total Openings"
            },
            "legend": {
                "display": false
            },
            "responsive": true,
            "maintainAspectRatio": true
        }
    },
    "labels": [
        "Open",
        "Closed"

    ],
    "datasets": [
        {
            "label": "# Positions",
            "data": [
                5,
                11,

            ],
            "backgroundColor": [
                "#786399",
                "#3ba9b8",
                "#a75754",
                "#5ba944"
            ]
        }
    ]
}

const HomePage = (props) => {


    return (
        <div className="flex-container">
            <div className="d-flex align-content-between flex-wrap col-sm m-4"
                style={{ flexDirection: "column", minWidth: "320px" }}>
                <Chart
                    type="Doughnut"
                    chart={chart}
                />
            </div>
        </div >
    )
}



export default HomePage