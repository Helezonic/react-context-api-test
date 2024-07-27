import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function Profile () {

  const {data} = useContext(UserContext)
  console.log(data)

  if(!data) return <h1 className="text-white text-center text-xl pt-2 font-semibold">Please enter your name</h1>

  return (
    <>
      <h1 className="text-white text-center text-xl pt-2 duration-300">Welcome {data.name}.</h1>
    </>
  )
}