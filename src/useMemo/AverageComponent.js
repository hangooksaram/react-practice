import React, {useState, useMemo, useCallback, useRef} from 'react'

const getAverage = numbers => {
    console.log('평균값 계산중..');
    if (numbers.length == 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
}

const getTotal = numbers => {
    const sum = numbers.reduce((a,b) => a+b);
    return sum;
}

const AverageComponent = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback (e => {
        const NextList = list.concat(parseInt(number));
        setList(NextList);
        setNumber('');
        inputEl.current.focus();
    }, [number,list])


    const avg = useMemo(()=> getAverage(list), [list])
    return(
        <div>
            <input value = {number} onChange = {onChange} ref = {inputEl}/>
            <button onClick = {onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (<li key = {index}>{value}</li>))}
            </ul>
            평균값 : {avg}
        </div>
    )
}

export default AverageComponent;