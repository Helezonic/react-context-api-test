import { useContext, useState } from "react"
import UserContext from "../context/UserContext"



export default function Card () {
  const [name,setName] = useState("")
  const {setData} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name) setData("")
    else {
    setData({name})
    }}

  return(
    <>
      <div className="p-4 dark:bg-gray-800 duration-300 rounded-lg bg-gray-200 dark:rounded-2xl">
        <h1 className="text-center dark:rounded-2xl rounded-none bg-blue-300 text-3xl text-blue-900 duration-300 tracking-wider p-2 font-bold dark:bg-blue-900 dark:text-blue-300">CARD</h1>
        <input placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} className="mt-2 mr-2 p-2 xl:w-5/12 shadow-xl dark:rounded-2xl duration-300"></input>
        <button onClick={handleSubmit} className="text-white bg-green-700 w-28 my-2 p-2 dark:rounded-2xl 2xl:w-full duration-300">Submit</button>
        
      </div>
    </>
    
  )
}