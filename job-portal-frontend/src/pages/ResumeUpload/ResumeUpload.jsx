
import { useRef, useState } from "react";
import { BsUpload } from "react-icons/bs";


export default function ResumeUpload(){
    const fileRef = useRef()
    const [file, setFile] = useState(null)

    const handleUpload = (e)=>{
         const file = e.target.files[0]
         setFile(file)
         console.log(file)


    }

    return(
        <>
        <div className="w-full min-h-screen  bg-amber-50 flex flex-col justify-center items-center ">
            <input
             type="file"
             className="hidden"
             ref={fileRef}
             onChange={handleUpload}
             

              />
             <div className="w-70 h-45 bg-white border-dashed border-gray-400 border-2  flex flex-col justify-center items-center gap-3 rounded-2xl">
                
                    <div className="w-11 h-11 border border-gray-400 rounded-md bg-gray-200 flex items-center justify-center hover:text-gray-400 
                    cursor-pointer
                    ">
                        <BsUpload  onClick={()=>fileRef.current.click()}/>


                     </div>

                    <div>
                        <h5 className="font-bold">Drop your file here</h5>
                        <div><span>or </span><span onClick={()=>fileRef.current.click()}
                         className="text-blue-500 hover:text-blue-700 cursor-pointer"
                         >browse to upload
                         </span></div>
                    </div>

                    <p className="text-[12px] text-gray-500">PDF, DOCX, or TXT · Max 5 MB</p>
                
             </div>
             <div className="w-20 h-30 border ">

             </div>
        </div>
        </>
    )
}