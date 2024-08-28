import React from "react";
import { useRouteError } from "react-router-dom";

const Error = ()=>{
    let Error= useRouteError()
    return (
        <> 
        page not found 
        {Error.data}
        {Error.message}
        
        </>
    )
}
export default Error