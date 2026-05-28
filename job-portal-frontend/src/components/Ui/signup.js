 
 
 
 
 export const handleSubmit = async()=>{
        try{
          const res = await fetch("http://localhost:5000/users",
            {
                method : "POST",
                headers: { "Content-Type": "application/json" },
                body : JSON.stringify( {
                    username: nameRef.current.value,
                    email : emailRef.current.value,
                    password : passRef.current.value
                })
            }
          )
          const data = await res.json()
          console.log(data)
        }
        catch(err){
           console.log(`error:${err}`)
        }
    }

