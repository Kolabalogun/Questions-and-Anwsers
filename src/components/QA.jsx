import React from 'react'

const QA = ({title, id, Info, isOpen, handleClick}) => {


  
  return (
    <div className="qa">
          <div className="Q">
            <h4>{title}</h4>
             <button onClick={() => handleClick(id)} >
               {isOpen ? "-" : "+"}
             </button>
          </div>
         {isOpen &&  <p>{Info}</p>}
          
        </div>
  )
}

export default QA