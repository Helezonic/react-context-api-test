
//import './App.css'
import { useEffect, useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Profile from './components/Profile'
import { ThemeProvider } from './context/ThemeContext'
import UserContextProvider from './context/UserContextProvider'

function App() {
 
  const [theme, setTheme] = useState("light")
  
  //Initiated from the button.jsx
  const lightTheme = () =>{
    setTheme("light")
  }

  //Initiated from the button
  const darkTheme = () =>{
    setTheme("dark")
  }
  
  
  //Change in HTML class, if 'theme' changes
  useEffect (() => {
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(theme)
  },[theme])

  return (
    <>
      <UserContextProvider>
      <ThemeProvider value={{theme, lightTheme, darkTheme}}>
      <div className="p-4 dark:bg-gray-900 bg-gray-200 h-screen border-2 dark:border-gray-200 border-gray-200 duration-300 ">
        <div className="p-4 flex dark:rounded-2xl justify-center items-center dark:bg-gray-900 h-1/2 border-2 dark:border-gray-200 border-gray-200 duration-300">
          <div className='bg-blue-300 rounded-none dark:bg-blue-900 duration-300 dark:rounded-2xl flex-col w-[600px] p-4'>
              <Button/>
            <div className='mt-4'>
              <Card/>
              <Profile/>
            </div>
          </div>
        </div> 
      </div>
      </ThemeProvider>
      </UserContextProvider>
    </>
  )
}

export default App
