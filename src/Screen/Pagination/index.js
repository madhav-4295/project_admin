import React from "react";
import  "./pagination.css"

const Pagination =({studentPerPage, totalPost, paginate})=>{
    const pageNumbers= []

    for(let i=1; i<= Math.ceil(totalPost / studentPerPage); ++i){
        pageNumbers.push(i)
    }
    return(
        <>
        <nav className="page-list">
            {pageNumbers.map(pagenumber=>(
                <li key={pagenumber}>
                    <a href="!#" onClick={()=> paginate(pagenumber)} >{pagenumber}</a>
                </li>
            ))}
        </nav>
        </>
    )
}
export default Pagination