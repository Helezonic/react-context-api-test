
//Method 1 of creating Context Provider

import { useState } from "react";
import UserContext from "./UserContext.js";

export default function UserContextProvider ({children}) {
  const [data,setData] = useState("") 
  return (
    <UserContext.Provider value={{data,setData}}>
      {children}
    </UserContext.Provider>
  )
}