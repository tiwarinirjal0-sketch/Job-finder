import { useEffect, useState } from "react";
import Button from "../../components/Ui/button";
import { useContext } from "react";
import { JobContext } from "../../../context/jobs";
import { useNavigate } from "react-router-dom";






export default function Search(){
    const navigate = useNavigate()
    
     const { location,setLocation,buttonClicked,setButtonClicked,
    jobs,setJobs} = useContext(JobContext);


    useEffect(()=>{
        fetch("http://localhost:5000/api/auth/jobs")
        .then(res=>res.json())
        .then(data=>{
            setJobs(data),
            console.log("data received",data)
        })
        .catch(err=>console.log(`error: ${err}`))
    },[])


    const handleClick = ()=> {
        if(!location)return
        console.log(location)
        setLocation("")
        navigate("/jobs")
        
    }

    


     return(
        <div className="w-screen mt-10 flex justify-center gap-1 py-5">
            <input 
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            type="text" 
            placeholder="Enter your Location or company name or jobtitle"
            className="border rounded-xl px-4 border-none"
            />
            <button 
            

            onClick = {()=>{
                handleClick();
                setButtonClicked(true);
                console.log("jobs",jobs)
                ;}
            }
            className="bg-[#4A78ED] px-5 py-2 rounded-xl"
            >Search</button>
        </div>
     )
}