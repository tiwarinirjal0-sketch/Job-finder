import { useEffect, useState } from "react";
import Button from "../../components/Ui/button";
import { useContext } from "react";
import { JobContext } from "../../../context/jobs";





export default function Search(){
    
     const { location,setLocation,buttonClicked,setButtonClicked,
    jobs,setJobs} = useContext(JobContext);

    useEffect(()=>{
        fetch("http://localhost:5000/hello")
        .then(res=>res.json())
        .then(data=>setJobs(data))
        .catch(err=>console.log(`error: ${err}`))
    },[])

    const handleClick = ()=> {
        if(!location)return
        console.log(location)
        setLocation("")
    }

    


     return(
        <div className="w-screen mt-10 flex justify-center gap-1 py-5">
            <input 
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            type="text" 
            placeholder="Enter your Location"
            className="border rounded-xl px-4 border-none"
            />
            <Button 
            

            onClick = {()=>{
                handleClick();
                setButtonClicked(true);
                console.log("jobs",jobs)
                ;}
            }
            style="bg-[#4A78ED] px-5 py-2 rounded-xl"
            >Search</Button>
        </div>
     )
}