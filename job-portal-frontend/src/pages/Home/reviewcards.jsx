export default function ReviewCards(){


   const Cards = ({children,style}) =>(
       <div className={`w-[auto] h-15 px-5 items-center flex flex-col rounded-xl ${style} bg-[#181B20]` }>
           <div className="text-[gold]">★★★★★</div>
           <div>{children}</div>
       </div>
   )


    return(
        <div className="flex flex-wrap justify-center items-center w-screen h-50 mt-4 gap-2 ">
            <Cards >“Superb job matching service”</Cards>
            <Cards>“Found my perfect role fast”</Cards>
            <Cards>“Helped me find work quickly”</Cards>

        </div>
    )
}