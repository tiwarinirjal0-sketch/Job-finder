import { useState } from "react"
import Homepage from "./pages/Home/Homepage"
import JobPostings from "./pages/Jobs/jobPostings"
import { JobContext } from "../context/jobs";


export default function App(){
  
  const [location,setLocation] = useState("");
  const[buttonClicked, setButtonClicked] = useState(false);
  const [jobs,setJobs] = useState([]);

  

  return(
    <>
    <JobContext.Provider
      value = {{
        location,
        setLocation,
        buttonClicked,
        setButtonClicked,
        jobs,
        setJobs,

      }}
    
    >
      <Homepage />
      <JobPostings/>
    </JobContext.Provider>


      
    </>
  )
}