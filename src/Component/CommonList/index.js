import React from "react"
import "./CommonList.css"

const CommonList =({
    options,
    fillData,
    id,
    customStyle,
    size

})=>{
    return(
        <>  
        {options.map(i=>{
                // console.log(i)
                if(id==="studentList"){
                    return(
                        <ol style={customStyle} > 
                            <li  key={i.id} onClick={()=>{fillData(i)}} style={customStyle}>{i.name}</li>
                        </ol>
                    )
                }else{
                    return(
                        <ol style={customStyle}> 
                            <li  key={Math.random()} style={customStyle}>{i}</li>
                         </ol>
                    )
                }
                    
                
                
            })}
            
        </>
    )
}
export default CommonList