

export default function Button({style, children, onClick}){
     return(<button className={`w-[auto]   ${style}`} onClick={onClick}>
        {children}
     </button>   )
}