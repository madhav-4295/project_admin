import React from "react"
import "./CommonInput.css"
const CommonInput =({
    type,
    name,
    value,
    changeHandler,
    customStyle
})=>{
    return(
        <>
        <input type={type} name={name} onChange={changeHandler} value={value} style={customStyle}></input>
        </>
    )
}
export default CommonInput