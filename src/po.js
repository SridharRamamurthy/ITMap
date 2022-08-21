import React, { useEffect, useState } from 'react';
import Process from './lib/process/process';



const PO = (props) => {
    return (
        <Process 
        steps={[
            {
                name: "Create PO",
                currentStep: true
            },
            {
                name: "Review PO"
            },
            {
                name: "Approve PO"
            }

        ]} />
    )
}

export default PO