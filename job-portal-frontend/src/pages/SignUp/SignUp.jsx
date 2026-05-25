import { useContext } from "react";
import { JobContext } from "../../../context/jobs";



export default function SignUp(){
    const {signUpClicked} = useContext(JobContext)

    const inputDetails = [
        {label:"Full Name", placeholder:"Enter your full-name "},
        {label:"E-mail", placeholder:"Enter your email"},
        {label:"Password", placeholder:"Enter your password"}
    ]

    if(!signUpClicked)return

    return(
        <>
          <div className="p-4 w-55 h-105 bg-white overflow-hidden absolute inset-20 rounded-lg flex flex-col items-center justify-between ">
            <h1 className="text-center">Create your free account</h1>
             
             <div className="flex flex-col gap-4">
             {inputDetails.map(item=>(
                <div>
                    <h2>{item.label}</h2>
                    <input 
                        type="text" 
                        className="border w-full rounded-lg px-2 py-1"
                        placeholder={item.placeholder}
                        
                        />
                </div>
             ))}
             </div>
             
             <button
             type="submit"

             className="bg-yellow-300 w-45 px-2 py-1 rounded-lg font-semibold text-emerald-600"
             >Create Account</button>
             
             <p>Alread have an account?</p>

             <div className="flex gap-2 text-sm">
                <div className="w-20 h-8 border">
                    <span></span>
                    <span></span>
                </div>
                <div className="w-20 h-8 border"></div>
             </div>
             
                  

          </div>
        </>
    )
}