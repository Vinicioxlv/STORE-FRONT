import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    // Obtiene los datos del usuario almacenados en localStorage al cargar el contexto
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const saveUser = (user) => {
    setUserData(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setUserData(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ userData, saveUser, logout }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserProvider;


