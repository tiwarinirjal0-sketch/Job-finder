
import Button from "../../components/Ui/button"
import { useState } from "react"

export default function Navbar(){
 
    const [menuVisibility, setMenuVisibility] = useState(false)
   



    return(

        <div className=" px-4 flex justify-between items-center w-screen h-20 ">
            <div>
                <span>icon</span><span>carrermap</span>
            </div>
            <div></div>
            <div>
               <Button style="border rounded-2xl py-2 px-4 border-[#4A78ED] border-2">
                SignUp
               </Button>
            </div>
        </div>
    )
}