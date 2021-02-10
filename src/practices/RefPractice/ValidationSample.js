import React from 'react'
import ValidationSampleComponent from './ValidationSampleComponent'
import { Route, NavLink } from 'react-router-dom';
import PracticeLink from './../../component/PracticeLink';

const ValidationSample = ()=>{    
    return(
        <>
            <PracticeLink current="ref" next="Test"/>
            <ValidationSampleComponent/>
        </>
    )
}

export default ValidationSample