import React, {useState} from 'react'
import '../../scss/global.scss'
import DescLink from './../../component/DescLink';

const LINK_LIST = [
    {
        word: '의존성 배열',
        content : "useEffect 의 두 번째 매개변수으로써 해당 의존성 배열의 내용이 변경되었을 경우 useEffect가 호출된다."
    },
    {
        word : '마운트',
        content : "Component가 새롭게 생성되는 시점"
    },
    {
        word : 'cleanup 함수',
        content : "useEffect(() => /* ... */ return ()=> { ~~~ }"
    }
]

const UseEffectDesc = ()=>{
    const [open, setOpen] = useState('');
    return(
        <>
            <p>
                컴포넌트가 렌더링된 이후 특정 작업을 수행하도록 설정할 수 있는 hook이다.
                클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 볼 수 있다. <nbsp/>
                <DescLink open={open} setOpen ={setOpen} word={LINK_LIST[0].word} content={LINK_LIST[0].content}/>에 따라
                비어 두면  <DescLink open={open} setOpen ={setOpen} word={LINK_LIST[1].word} content={LINK_LIST[1].content}/> 되었을 때만, 특정 값을 넣으면 특정 값에 따라 해당 hook이 호출되게 된다.
            </p>
            <p> 
            <DescLink open={open} setOpen ={setOpen} word={LINK_LIST[2].word} content={LINK_LIST[2].content}/>를 이용하여 컴포넌트가 언마운트 되거나
                        업데이트 되기 직전에 어떠한 작업을 수행 할 수도 있다.
            </p>

        </>
    )
}

export default UseEffectDesc;