import React, { useEffect, useState } from 'react';
import PlainCard from "./lib/card/plainCard.js"
import Selection from "./lib/selection.js"


function CardPage(props) {

  const [mode, setMode] = useState("card")
  const [viewDetails, setViewDetails] = useState(false)
  const [selectedItem, setSelectedItem] = useState(-1)

  return (
    <div>
      <Selection
        title={props.title}
        setMode={setMode} />

      <div className="row m-4">

        {
          Array.isArray(props.data) && props.data.map((item, i) => {
            return (
              mode === "card" ?
                <div key={i} className={viewDetails ? "" : "col-3 m-4"} onClick={e => {
                  setViewDetails(viewDetails && selectedItem !== i ? viewDetails : !viewDetails)
                  setSelectedItem(viewDetails === false ? i : -1)
                }}>
                  <PlainCard
                    selected={selectedItem === i}
                    title={item.title}
                    displayIcon={props.displayIcon}
                    description={<div> {item.data && item.data.map((desc) => {
                      return (
                        [<div>
                          <i className={desc.icon}></i> {desc.location} </div>])
                    })} </div>} />

                </div>
                : mode === "list" &&
                <div className='m-2'>
                  <PlainCard title={item.title}
                    displayIcon={props.displayIcon}
                    description={[<div>
                      <i className="p-2"></i> Client Page </div>]} />
                </div>
            )
          })
        }

        {
          selectedItem !== -1 &&
          <div> Test msg </div>
        }

      </div>
    </div>

  );
}

export default CardPage;
