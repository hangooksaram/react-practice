import React from 'react';

const DescLink = ({open, setOpen, link, content})=>{    
    return (
        <span className="desc-link" onMouseLeave={()=> setOpen('')} onMouseEnter={()=> setOpen(link)}>            
            {link}
        {open === link? <div className="desc-popup">{content}</div> : ""}
    </span>
    )
}

export default DescLink;