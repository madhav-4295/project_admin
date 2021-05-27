import React from "react"
import "./CommonButton.css"
const CommonButton =({
    title,
    AddSubject,
    customStyle
})=>{
    return(
        <>
        <button onClick={AddSubject} style={customStyle}> {title}</button>
        </>
    )
}

export default CommonButton