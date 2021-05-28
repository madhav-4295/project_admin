import React from "react"
import "./CommonList.css"

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { FixedSizeList } from 'react-window';



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
                 console.log(i)
                if(id==="studentList"){
                    return(
                        // <ol style={customStyle} > 
                        //     <li  key={i.id} onClick={()=>{fillData(i)}} style={customStyle}>{i.name}</li>
                        // </ol>
                        <List  component="nav">
                            <ListItem style={customStyle} key={i.id} onClick={()=>{fillData(i)}} alignItems="flex-end" >{i.name}</ListItem>
                        </List>
                    )
                }else{
                    return(
                        <List component="nav"> 
                            <ListItem  key={Math.random()} style={customStyle}>{i}</ListItem>
                         </List>
                    )
                }
                    
                
                
            })}
            
        </>
    )
}
export default CommonList