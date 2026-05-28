import { useContext } from "react";
import { JobContext } from "../../../context/jobs";

export default function Button({style, children}){
   
   const {setSignUpClicked} = useContext(JobContext)

     return(<button className={`w-[auto]   ${style}`} onClick={()=>setSignUpClicked(prev=>!prev)}>
        {children}
     </button>)
}