import React from 'react';
import useUserData from '../../hooks/useUserData';

interface IUserContextData {
  name?: string;
  iconImg?: string;
  loading?: boolean;
}


export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({ children } : { children: React.ReactNode }) {
  const { data, loading } = useUserData();
  const dataData = {...data , loading: loading};

  return <userContext.Provider value={dataData}>
      {children}
    </userContext.Provider>

}
