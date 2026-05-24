import { useContext } from "react";
import JobCards from "./jobCards";
import { JobContext } from "../../../context/jobs";

export default function JobPostings(){
    const { buttonClicked, jobs } = useContext(JobContext);
    
    if(!buttonClicked)return

    return(

        <div className="w-screen min-h-screen bg-[#1e2330] flex flex-col items-center gap-4 py-4">
            
            <JobCards/>
            
        </div>

    )
}