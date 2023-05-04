import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext({});

const UserProvider = ({ children }) => {

  const [userData, setUserData] = useState({})

  const logout = () => {
    setUserData({})
    localStorage.setItem('user', '{}')
  }

  const getUserData = () => {
    console.log(JSON.parse(localStorage.getItem('user')))
    if (JSON.parse(localStorage.getItem('user'))) {
      setUserData(JSON.parse(localStorage.getItem('user')))
      console.log(userData)
    }
  }

  const saveUser = (user) => {
    if (localStorage.getItem('user')) {
      setUserData(JSON.parse(localStorage.getItem('user')))
    } else {
      setUserData(user)
      localStorage.setItem('user', JSON.stringify(user))
    }


  }

  useEffect(() => {
    getUserData()
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ userData, saveUser, logout }}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserProvider

