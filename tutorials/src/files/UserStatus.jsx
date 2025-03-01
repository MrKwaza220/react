import React, {useState} from "react";


export default function UserStatus () {
    const [status, setStatus] = useState("online");

    function getStatusMessage(status) {
        switch (status) {
            case "online":
                return <p>User is online 🟢 </p>
            case "offline":
                return <p>User is offline 🔴 </p>
            case "busy":
                return <p>User is busy 🟡</p>
            default:
                return <p>Status Unknown</p>
         };
    
    }
    return (
        <>
           <h2>{getStatusMessage(status)}</h2>
           <button onClick={() => setStatus("online")}>Online</button>
           <button onClick={() => setStatus("offline")} >Offline</button>
           <button onClick={() => setStatus("busy")}>Bust</button>
        </>
    )
}