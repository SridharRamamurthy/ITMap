import React, { useEffect, useState } from 'react';
import { NavItem } from 'react-bootstrap';

import './App.css';

const MenuItems = [
    {
        label: "Home",
        name:"Home",
        iconName: "fa fa-home fa-2x"
    },
    {
        label: "Job Description",
        name:"JobDescription",
        iconName: "fa fa-list fa-2x"
    },
    {
        label: "Search",
        name:"Search",
        iconName: "fa fa-search fa-2x"
    },
    {
        label: "Interview",
        name:"Interview",
        iconName: "fa fa-users fa-2x"
    },
    {
        label: "Purchase Order",
        name:"PurchaseOrder",
        iconName: "fa fa-yen fa-2x"
    },
    {
        label: "Contract",
        name:"Contract",
        iconName: "fa fa-thumbs-o-up fa-2x"
    }
]


const LeftPanel = (props) => {

    const [currentTab, setCurrentTab] = useState(props.tab)

    return (
        <div className="d-flex flex-column " >
            {Array.isArray(MenuItems) && MenuItems.map((menuItem, i) => {
                return (
                    <div key={i} className="d-flex text-center  "
                        style={{ boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)", cursor: 'pointer' }}
                    >
                        <div className="icon p-3 px-4 d-flex" onClick={e => {
                            setCurrentTab(menuItem.name)
                            props.setDisplayMenu (false)
                            props.setTab(menuItem.name)
                        }} style={{
                           alignItems:"center", color: currentTab === menuItem.name ? "#FFFFFF" : "#818181"
                        }}>
                            <i className={menuItem.iconName} > </i>
                            <label className="p-2">{menuItem.label} </label>
                        </div>
                    </div>
                )

            }
            )
            }           


        </div >
    )
}

export default LeftPanel