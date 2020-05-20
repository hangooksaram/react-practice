import React from 'react'

export default class ClassComponent extends React.Component{
    render(){
        
        const {name, age} = this.props;
        return(
            <div>
                내 이름은 {name} 이고 {age} 살이야.
            </div>
        )
    }
}