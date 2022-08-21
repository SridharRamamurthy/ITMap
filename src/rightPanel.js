import React, { useEffect, useState } from 'react';

import HomePage from './homePage'
import JobDescription from './jobDescription';
import Applicant from './applicant'
import PO from './po'
import Search from './search';

const TestComponent = (props) => {
    return (<div>{props.tab && props.tab }</div>)
}
const RightPanel = (props) => {

    let MyComponent = {
        Home: HomePage,
        JobDescription: JobDescription,
        Search:Applicant,
        Interview: TestComponent,
        PurchaseOrder: PO,
        Contract : TestComponent
    }[props.tab]

    return (
        <MyComponent tab={props.tab}/>
    )
}

export default RightPanel