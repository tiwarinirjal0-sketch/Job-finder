import { useContext,useRef } from "react";
import { JobContext } from "../../../context/jobs";
import { useEffect } from "react";


export default function SignUp(){
    const {signUpClicked} = useContext(JobContext)

    const nameRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()


    



    

    const handleSubmit = async()=>{
        try{
          const res = await fetch("http://localhost:5000/users",
            {
                method : "POST",
                headers: { "Content-Type": "application/json" },
                body : JSON.stringify( {
                    username: nameRef.current.value,
                    email : emailRef.current.value,
                    password : passRef.current.value
                })
            }
          )
          const data = await res.json()
          console.log(data)
        }
        catch(err){
           console.log(`error:${err}`)
        }
    }

    const inputDetails = [
        {label:"Full Name", placeholder:"Enter your full-name ",ref:nameRef},
        {label:"E-mail", placeholder:"Enter your email",ref:emailRef},
        {label:"Password", placeholder:"Enter your password",ref:passRef}
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
                        ref={item.ref}
                        
                        type="text" 
                        className="border w-full rounded-lg px-2 py-1"
                        placeholder={item.placeholder}
                        
                        />
                </div>
             ))}
             </div>
             
             <button
             type="submit"
             onClick={handleSubmit}
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