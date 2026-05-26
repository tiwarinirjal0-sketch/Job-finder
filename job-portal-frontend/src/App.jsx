import { useState } from "react"
import Homepage from "./pages/Home/Homepage"
import JobPostings from "./pages/Jobs/jobPostings"
import { JobContext } from "../context/jobs";
import SignUp from "./pages/SignUp/SignUp";


export default function App(){
  
  const [location,setLocation] = useState("");
  const[buttonClicked, setButtonClicked] = useState(false);
  const [jobs,setJobs] = useState([]);
  const [signUpClicked, setSignUpClicked] = useState(false);
  

  

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
        signUpClicked,
        setSignUpClicked

      }}
    
    >
      <SignUp />
      <Homepage />
      <JobPostings/>
    </JobContext.Provider>


      
    </>
  )
}