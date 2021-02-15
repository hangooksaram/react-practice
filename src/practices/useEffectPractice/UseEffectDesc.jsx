import React, {useState} from 'react'
import '../../scss/global.scss'
import DescLink from './../../component/DescLink';
const UseEffectDesc = ()=>{
    const [open, setOpen] = useState('');
    return(
        <>
            <p>
                컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 hook이다.
                클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 볼 수 있다. <nbsp/>
                <DescLink open={open} setOpen ={setOpen} link={'의존성 배열'} content={
                        "useEffect 의 두 번째 매개변수으로써 해당 의존성 배열의 내용이 변경되었을 경우 useEffect가 호출된다."}/>에 따라
                비어 두면 마운트 되었을 때만, 특정 값을 넣으면 특정 값에 따라 해당 hook이 호출되게 된다.
            </p>
            <p>
            <DescLink open={open} setOpen ={setOpen} link={'cleanup 함수'} content={
                        "useEffect(() => /* ... */ return ()=> { ~~~ } "}/>
            </p>

        </>
    )
}

export default UseEffectDesc;