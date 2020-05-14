import React from 'react'
import PropTypes from 'prop-types'

const Props = (props) => {
    const {name, children} = props; //비구조화 할당 문법
    return (
        <div>
           기본 props : {name} <br></br>
           children 값 : {children}
        </div>
    )
}


Props.defaultProps = {
    name : '기본 이름'
}
export default Props