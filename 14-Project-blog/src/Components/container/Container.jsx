import React from 'react'

function Container({children ,className = ""}  ) {
  return (
    <div className= {`py-4 flex  gap-4  px-4 ${className} `}>
        {children}
    </div>
  )
}

export default Container