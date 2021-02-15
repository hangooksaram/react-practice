import React, {useState} from 'react'
import DescLink from './../../component/DescLink';

const UseMemoDesc = ()=>{
    const [open, setOpen] = useState(false);
    return(
        <>            
        <p>
            <DescLink open={open} setOpen ={setOpen} link={'ref'} content={"aaaaaaaaaaaaa"}/>
            </p>     
        </>
    )
}

export default UseMemoDesc;