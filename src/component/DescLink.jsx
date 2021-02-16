import React from 'react';

const DescLink = ({open, setOpen, word, content, link})=>{    
    return (
        <span className="desc-link" onMouseLeave={()=> setOpen('')} onMouseEnter={()=> setOpen(word)}>            
            {word}
        {open === word? <div className="desc-popup">
            {content}
        </div> : ""}
    </span>
    )
}

export default DescLink;