export default function Description({name,role,avatar_initials,email,phone,contact_details }){

    const Details = ({type,detail})=> {
        return(
        <div className="flex gap-2">
            <span>{type}</span><span>{detail}</span>
        </div>
    )}

    return(
        <>
         <div className="w-full h-full flex">
             <div>{avatar_initials}</div>
             <div>
                <h1>{name}</h1>
                <p>{role}</p>
                <div className="flex gap-4">
                   {contact_details.map(item => 
                      <Details type={item.type} detail={item.detail} />
                   )}

                </div>
             </div>
         </div>
        </>
    )
}