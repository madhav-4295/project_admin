import React from "react"
import "./CommonButton.css"
import Button from '@material-ui/core/Button';
const CommonButton =({
    title,
    AddSubject,
    customStyle
})=>{
    return(
        <>
        {/* <button onClick={AddSubject} style={customStyle}> {title}</button> */}
        <Button onClick={AddSubject} variant="contained" color="primary" size="small" style={customStyle} 
        // className="button"
        >{title}</Button>
        </>
    )
}

export default CommonButton