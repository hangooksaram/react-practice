import React, {Component} from "react"

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : 0,
            fixednumber : 0
        }
    }

    componentWillMount(){
        console.log('willmount');
    }

    componentDidMount(){
        console.log('didmount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldcomponentupdate');
        if(nextState.number % 3 === 0) return false;
        else return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("willupdate");
    }

    componentDidUpdate(nextProps, nextState){
        console.log("didupdate");
    }

    handleIncrease = () => {
        this.setState({
            number : this.state.number + 1,
        });
    }
    
    handleDecrease = () => {
        const {number} = this.state;
        this.setState({
            number : number - 1
        })
    }

    handleDoubleIncrease = () => {
        this.setState(prevState => {
            return {
                number : prevState.number + 1
        }
        })

        this.setState(prevState => ({        //위의 코드와 도일. 하지만 이 코드는 함수에서 바로 객체를 반환하겠다.
                number : prevState.number + 1
        }))
    }

    handleDecreaseEvent = () => {
        const {number} = this.state;
        this.setState({
            number : number - 1
        }, () => {return (<div>감소되었습니다.</div>)})
    }

    render(){
        const {number, fixednumber} = this.state;  //비구조화 할당 문법
        return(
            <div>
                값 : {number}
                변하지 않는 값 : {fixednumber}
                <button onClick = {this.handleIncrease}>증가</button>
                <button onClick = {this.handleDoubleIncrease}>2X 증가</button>
                <button onClick = {this.handleDecrease}>감소</button>
                <button onClick = {this.handleDecreaseEvent}>감소 후 이벤트</button>
            </div>
        )
    }
    
}

export default function State(){
    return(
        <div>
            <h1>State</h1>
            <Counter/>
        </div>
    )
}