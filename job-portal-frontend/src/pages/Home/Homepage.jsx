
import Navbar from "./Navbar"
import ReviewCards from "./reviewcards"
import TextContainer from "./Text"
import Search from "./search"


export default function Homepage({location,setLocation,buttonClicked,setButtonClicked}){
    return(
        <div className="w-screen min-h-screen bg-[#06090D] text-white">
            <Navbar />
            <ReviewCards />
            <TextContainer />
            <Search 
               location={location}
               setLocation={setLocation}
               setButtonClicked = {setButtonClicked}

             />
        </div>
    )
}