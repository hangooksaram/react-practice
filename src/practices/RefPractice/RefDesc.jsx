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
            useRef 는 함수형 컴포넌트에서 <DescLink open={open} setOpen ={setOpen} word={LINK_LIST[0].word} content={LINK_LIST[0].content}/>를 쉽게 사용할 수 있게 해주는 hook이다.
        </>
    )
}

export default RefDesc;