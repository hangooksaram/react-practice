import React,{useState} from 'react'
import DescLink from '../../component/DescLink';

const LINK_LIST = [
    {
        word : 'ref',
        content : "Reference의 줄임말로써, 특정 DOM에 직접 접근해야 하는 상황에 사용됩니다. input 태그를 가리키고 싶거나 스크롤 위치를 설정하는 것과 같은 상황에서 자주 쓰입니다."
    }
]

const RefDesc = ()=>{
    const [open, setOpen] = useState('');
    return(
        <>            
        <p>
            클래스형 컴포넌트에서 ref를 사용하기 위해 createRef를 사용했다면, 
            useRef 는 함수형 컴포넌트에서 <DescLink open={open} setOpen ={setOpen} word={LINK_LIST[0].word} content={LINK_LIST[0].content}/>를 쉽게 사용할 수 있게 해주는 hook입니다.            
            state와 달리 ref가 관리하는 변수는 값이 바뀌어도 컴포넌트가 리렌더링 되지 않습니다. 
            </p>
            <p>
            부모 컴포넌트에서 자식 컴포넌트의 DOM에 접근하는 상황과 같이 ref는 컴포넌트와도 사용할 수 있습니다.
            하지만 이는 컴포넌트의 캡슐화를 파괴하기 때문에 <a target="blank" className={'outer-link'} href="https://ko.reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components">권장되지 않습니다.</a> 그리고 자식 컴포넌트에 ref를 사용하면,
            클래스형과 달리 함수형 컴포넌트는 인스턴스가 없기 때문에 동작되지 않습니다.
            하지만 자식 컴포넌트의 DOM에 포커스를 해야하는 경우가 있다면 forwardRef를 함께 사용해야 사용가능해집니다.
            </p>
        </>
    )
}

export default RefDesc;