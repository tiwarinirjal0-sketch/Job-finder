import { useContext, useEffect, useRef, useState } from "react";
import { JobContext } from "../../../context/jobs";

export default function SignUp() {
    const { signUpClicked } = useContext(JobContext)

    const [emailError, setEmailError] = useState(false)
    const [passError, setPassError] = useState(false)
    const [loginSuccess, setLoginSuccess] = useState(false)

    const emailRef = useRef()
    const passRef = useRef()

    useEffect(()=>{
        // if(!emailError)setEmailError(true)
    },[emailError,passError,loginSuccess])

    const handleSubmit = async () => {
          
          setEmailError(false)   // ✅ reset before fetch
          setPassError(false)
         const res = await fetch("http://localhost:5000/login", 
            {
                method : "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    "email":emailRef.current.value,
                    "password":passRef.current.value
                }),
                
            }
         )
         const data = await res.json()

         if(data.error==="email error"){
            setEmailError(true)
         }else if(data.error==="pass error"){
            setPassError(true)
         }else{
            setLoginSuccess(true)
            setEmailError(false)
            setPassError(false)
         }
         

    }

    const inputDetails = [
        { label: "E-mail", placeholder: "Enter your email", ref: emailRef },
        { label: "Password", placeholder: "Enter your password", ref: passRef }
    ]

    if (!signUpClicked) return

    return (
        <>
            <div className="p-4 w-55 h-105 bg-white overflow-hidden absolute inset-20 rounded-lg flex flex-col items-center justify-between">
                <h1 className="text-center">Login to your account</h1>

                <div className="flex flex-col gap-4">
                    {inputDetails.map(item => (
                        <div>
                            <h2>{item.label}</h2>
                            <input
                                ref={item.ref}
                                type="text"
                                className="border w-full rounded-lg px-2 py-1"
                                placeholder={item.placeholder}
                            />
                          {item.label === "E-mail" && emailError && (
                             <p className="text-red-700 text-sm">Enter Correct Email</p>
                        )}
                        {item.label === "Password" && passError && (
                                <p className="text-red-700 text-sm">Enter Correct Password</p>
                        )}
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-yellow-300 w-45 px-2 py-1 rounded-lg font-semibold text-emerald-600"
                >Login</button>
                {loginSuccess &&(<p className="text-green-500">Succesfully Logged in</p>)}

                <p className="text-blue-900 cursor-pointer">Don't have an account?</p>

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