import React from 'react' //PhoneList의 자식 Component

export default class PhoneInfo extends React.Component{
    static defaultProps = {
        info : {
            id : 0,
            name : '이름',
            phone : '000-0000-0000'
        }
    }
    render(){
        const {id, name, phone} = this.props.info;
        return(
            <div style = {styles.style}>
                <div>{name}</div>
                <div>{phone}</div>
            </div>
        )
    }
}

const styles = {
    style : {
        border : '1px solid black',
        padding : '8px',
        margin : '8px'
    }
}