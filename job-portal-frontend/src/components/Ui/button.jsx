import { useContext } from "react";
import { JobContext } from "../../../context/jobs";
import { useNavigate } from "react-router-dom";

export default function Button({style, children}){
   const navigate = useNavigate()
   
   const {setSignUpClicked} = useContext(JobContext)

     return(<button className={`w-[auto]   ${style}`} onClick={()=>navigate("/signup")}>
        {children}
     </button>)
}