import React, { createContext, useState } from 'react';

interface PassengerContextType {
  passengerId: string;
  updatePassengerId: (id: string) => void;
}

const PassengerContext = createContext<PassengerContextType | undefined>(undefined);

export const PassengerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [passengerId, setPassengerId] = useState('');

  const updatePassengerId = (id: string) => {
    setPassengerId(id);
  };

  return (
    <PassengerContext.Provider value={{ passengerId, updatePassengerId }}>
      {children}
    </PassengerContext.Provider>
  );
};

export default PassengerContext;
