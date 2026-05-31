import { useContext, useEffect, useState } from "react"
import { JobContext } from "../../../context/jobs"
import CreateAccount from "./Create"
import { useNavigate } from "react-router-dom"


export default function SignUp(){

    const navigate = useNavigate()

    const [signUp, setSignUp] = useState(true)
    const {signUpClicked} = useContext(JobContext)
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")

    const [userNameErr, setUserNameErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [passErr, setPassErr] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)


    // useEffect(()=>{

    // },[userNameErr,emailErr,passErr,loggedIn])




    const baseCss = "w-40 h-8 border"

    // useEffect(()=>{
    //    console.log({
    //     email:email,
    //     username:userName,
    //     password:password
    //    })
    // },[email, password, userName])

    const register = async()=>{
        try {
            const res = await fetch("http://localhost:5000/api/auth/register",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify( {
                    "username" : userName,
                    "email" : email,
                    "password" : password
                })
            })
            const data = await res.json()

             if(!res.ok) {
                  if(data.error == "Username err"){
                setUserNameErr(true)
            }else{
                    setEmailErr(true)
                }
             return
             }
           
             localStorage.setItem("token", data.token)
             console.log("succesfully token recieved", data.token)
            


        } catch (error) {
            console.log("error : ", error)
        }
    }
    const handleLogIn = async()=>{
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method : "POST",
                headers : {
                    "Content-type" : "application/json",
                    "Authorization" : `Bearer ${localStorage.getItem("token")}`
                },
                body : JSON.stringify({
                    email:email,
                    password:password
                })

            })
            const data = await res.json()

            if(!res.ok){
                console.log("error")
                return
            }

           localStorage.setItem("token", data.token)
           console.log("token received", data.token)
           navigate("/")


            // console.log(data)
        } catch (error) {
            console.log("error", error)
        }
    }



    return(
        <>
          
          <div className="w-60 min-h-90 border border-white absolute inset-0 bg-amber-100 flex flex-col items-center  justify-center gap-5">
              <div>{signUp?"Create Account":"Login"}</div>
              
              {signUp && (<div>
                <h2>Username</h2>
                <input 
                type="text" 
                onChange={(e)=>{
                    setUserName(e.target.value),
                    console.log(email)
                }}
                className={baseCss}
                    />
                {userNameErr && <p className="text-[12px] text-red-700">Enter the correct Username</p>}
                
                

              </div>)}

              <div>
                <h2>Email</h2>
                  <input
                  type="text"
                  onChange={(e)=>{
                    setEmail(e.target.value)
                   }}
                   className={baseCss}
                   />
                {emailErr && <p className="text-[12px] text-red-700">Enter the correct E-mail</p>}
                
              </div>

                <div>
                    <h2>Password</h2>
                    <input 
                    type="text" 
                    onChange={(e)=>{
                    setPassword(e.target.value)
                    }}
                    className={baseCss}
                    /> 
                     {passErr && <p className="text-[12px] text-red-700">Enter the correct Password</p>}
                

                    
                </div>

               <div className="flex gap-2">
                    <button 
                    className="border px-2 bg-blue-600"
                    onClick={()=>setSignUp(true)}
                    >
                    Create Account</button>
                    <button
                    className="border px-2 bg-blue-600"
                    onClick={()=>setSignUp(false)}
                    >Login</button>

               </div>

               <button 
               className="bg-mauve-600 px-3 py-1 rounded-xl text-amber-50"
               onClick={
                (signUp)?register:handleLogIn
               }
               >{signUp?"Sign Up":"Login"}</button>

               {loggedIn && <h1 className="text-green-600">Logged In successfully</h1>}
          </div>
           
        </>
    )
}