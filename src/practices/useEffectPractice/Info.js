import React, { useState, useEffect } from 'react'
import InfoComponent from './InfoComponent'
const Info = () => {
    const [visible, setVisible] = useState(false);
    return(
        <div>
            <button onClick = {() => {setVisible(!visible)}}>{visible ? '숨기기' : '보이기'}</button>
            {visible && <InfoComponent/>}
        </div>
    )
}

export default Info