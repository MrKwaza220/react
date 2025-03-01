import React, { useState } from "react"

export default function Login(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
       <>
         <h1>{isLoggedIn ? "Welcome Back!!" : "Please Login"}</h1>

         <button 
            onClick={() => setIsLoggedIn(!isLoggedIn)}
         >{isLoggedIn ? "Logout" : "Login"}</button>
       </>
    )
}