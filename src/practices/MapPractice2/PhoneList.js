import React from 'react'
import PhoneInfo from './PhoneInfo' //PhoneInfo의 부모 Component

const PhoneList = ({data})=>{            
        const list = data.map(
            info => (<PhoneInfo key = {info.id} info = {info}/>)
        )
        return (
            <div>{list}</div>
        )    
}

export default PhoneList;