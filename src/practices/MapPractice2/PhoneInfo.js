import React from 'react';

const PhoneInfo = ({info}) => {
    const {name, phone} = info;
    return(
        <div>
            <div>{name}</div>
            <div>{phone}</div>
        </div>
    )
}

export default PhoneInfo;